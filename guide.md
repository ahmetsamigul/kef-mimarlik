# Headless CMS → Next.js Tema Entegrasyon Rehberi

Bu rehber, özel headless CMS sistemini Next.js temalarına entegre ederken yapay zekanın izlemesi gereken kuralları ve kalıpları tanımlar. **Her tema entegrasyon görevine başlamadan önce bu dosyayı oku.**

---

## Projeye Başlarken (Yeni Tema Onboarding)

Her proje birbirinden farklıdır. Tema Envato'dan veya başka bir kaynaktan alınmış olabilir; avukatlık, restoran, temizlik şirketi, turizm gibi farklı sektörlere ait sayfalar içerebilir. Bu nedenle entegrasyon süreci her projede kullanıcıyla birlikte adım adım ilerlenir.

### Kullanıcının Sağlayacakları

Entegrasyona başlamadan önce kullanıcı şunları paylaşır:
1. **Tema dosyaları** — Next.js proje klasörü (mevcut statik bileşenler)
2. **Her sayfa için fetch kodu** — Hangi CMS endpoint'inin kullanılacağı ve hangi alanların geleceği
3. **Hangi sayfadan başlanacağı** — Tek seferde bir sayfa üzerinde çalışılır

### AI'nın Proje Başlangıcında Yapacakları

Yeni bir projeye girildiğinde şu adımları takip et:

**1. Tema yapısını keşfet**
```
app/
├── page.jsx              ← Ana sayfa
├── hakkimizda/page.jsx   ← İç sayfa
├── hizmetler/page.jsx
├── iletisim/page.jsx
└── ...
```
`app/` klasörünü tara, hangi sayfalar mevcut olduğunu listele.

**2. Layout'u incele**
`app/layout.jsx` dosyasını oku:
- Hangi Header/Footer bileşeni kullanılıyor?
- Font, CSS import'ları neler?
- `generateMetadata` var mı, yoksa eklenmesi mi gerekiyor?

**3. Mevcut sayfayı incele**
Kullanıcının gösterdiği sayfa dosyasını oku:
- Kaç section bileşeni kullanılıyor?
- Hangi içerikler hardcoded yazılmış?
- Görseller `<img>` mi yoksa `next/image` ile mi yapılmış?

**4. Fetch kodunu al ve alanları eşleştir**
Kullanıcının verdiği fetch kodundaki alanları bileşenlerdeki hardcoded değerlerle eşleştir. Belirsiz alanlar için kullanıcıya sor.

**5. Sayfa sayfa ilerle**
Tek seferde tek bir sayfayı tamamla, kullanıcının onayını al, sonra bir sonrakine geç.

---

## Tema Farklılıklarını Yönetme

### Layout Bileşen Adları Değişebilir

Her temada Header ve Footer bileşeninin adı farklı olabilir. Mevcut layout'taki adı kullan, değiştirme.

```jsx
// Bir temada:
import Header5 from "@/components/layout/header/Header5"
import Footer5 from "@/components/layout/footer/Footer5"

// Başka bir temada:
import Navbar from "@/components/common/Navbar"
import FooterOne from "@/components/footer/FooterOne"
```

### CSS ve Plugin Import'ları Değişebilir

`layout.jsx` içindeki CSS import'larına dokunma. Tema nereden alınmışsa o tema'nın kendi stil dosyalarını içerir.

### Sayfa Yapısı Projeden Projeye Farklıdır

| Proje Türü | Örnek Sayfalar |
|------------|---------------|
| Avukatlık | ana_sayfa, hukuk_makaleleri, avukatlar, dava_turleri, iletisim |
| Restoran | ana_sayfa, menu, rezervasyon, galeri, hakkimizda |
| Temizlik Şirketi | ana_sayfa, hizmetler, fiyatlandirma, referanslar, iletisim |
| Turizm | ana_sayfa, turlar, galeri, rehberler, rezervasyon |

Hangi sayfaların mevcut olduğunu varsayma — her zaman `app/` klasörünü tara ve kullanıcıya mevcut yapıyı göster.

### Section Bileşen Adları Değişebilir

Aynı işlevi gören bileşenin adı temadan temaya farklı olabilir. Mevcut bileşen adını koru, yeniden adlandırma.

```jsx
// Tema A'da slider bileşeni:
<Slider4 slaytlar={slaytlar} />

// Tema B'de aynı işlevi gören bileşen:
<HeroSection slides={slaytlar} />
```

---

## Genel Mimari

```
Headless CMS
    │
    ├── Sayfalar (ana_sayfa, hizmetler, iletisim, ...)
    ├── Koleksiyonlar (blog_yazilari, hizmetler, musteriler, ...)
    │
    └── REST API  →  Next.js (fetch + revalidate tags)
                          │
                          └── Page Component → Section Components
```

- CMS'den gelen her veri bir **API endpoint**'e karşılık gelir.
- Her sayfa için ayrı bir fetch fonksiyonu yazılır.
- Next.js'in **tag tabanlı cache** sistemi kullanılır (`next: { tags: [...] }`).
- Sayfalar **Server Component** olarak kalır; istemci etkileşimi gereken parçalar ayrılır.

---

## Ortam Değişkenleri

```env
NEXT_PUBLIC_API_URL=https://cms.example.com/api/
```

- URL her zaman `/` ile biter.
- Endpoint adı doğrudan arkasına eklenir: `process.env.NEXT_PUBLIC_API_URL + "ana_sayfa"`

---

## Fetch Fonksiyonu Kalıbı

### Sayfa Endpoint'i (tekil veri)

Sayfa verisi döndüren endpoint'ler doğrudan endpoint adıyla çağrılır.

```js
async function getSayfaAdi() {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "endpoint_adi", {
    next: {
      tags: ["endpoint_adi"],
    },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return await res.json();
}
```

### Koleksiyon Endpoint'i (liste verisi)

Koleksiyonlar `/all` suffix'iyle çağrılır; tag olarak koleksiyon adının kök hali kullanılır.

```js
async function getKoleksiyonAdi() {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "koleksiyon_adi/all", {
    next: {
      tags: ["koleksiyon_adi"],
    },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return await res.json();
}
let koleksiyonData = await getKoleksiyonAdi();
```

**Örnek (slaytlar koleksiyonu):**
```js
async function getSlaytlar() {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "slaytlar/all", {
    next: { tags: ["slaytlar"] },
  });
  if (!res.ok) throw new Error("Failed to fetch data");
  return await res.json();
}
let slaytlarData = await getSlaytlar();
```

**Kurallar:**
- Sayfa endpoint'i: `"endpoint_adi"` — tag: `["endpoint_adi"]`
- Koleksiyon endpoint'i: `"koleksiyon_adi/all"` — tag: `["koleksiyon_adi"]`
- Hata kontrolü (`if (!res.ok)`) her zaman bulunmalı.
- Fonksiyon `async` olmalı, `await res.json()` ile döndürülmeli.
- `cache: 'no-store'` **asla** kullanılmamalı; revalidate tag sistemi tercih edilmeli.

---

## Sayfa Bileşeni (Page Component) Kalıbı

```jsx
// app/sayfa-adi/page.jsx

import BilesenA from "@/components/sections/BilesenA";
import BilesenB from "@/components/sections/BilesenB";

async function getSayfaAdi() {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "endpoint_adi", {
    next: {
      tags: ["endpoint_adi"],
    },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return await res.json();
}

export default async function SayfaAdi() {
  let sayfaData = await getSayfaAdi();
  let {
    alan_1,
    alan_2,
    alan_3,
    koleksiyon_alani,
  } = sayfaData;

  return (
    <>
      <BilesenA alan_1={alan_1} alan_2={alan_2} />
      <BilesenB alan_3={alan_3} koleksiyon_alani={koleksiyon_alani} />
    </>
  );
}
```

**Kurallar:**
- Sayfa bileşeni `async` olmalı (Server Component).
- Destructuring ile tüm alanlar tek seferde çıkarılmalı.
- Her section bileşenine **sadece ihtiyacı olan** prop'lar geçilmeli.
- `"use client"` sayfa dosyasına **asla** eklenmemeli.

---

## Section Bileşeni (Section Component) Kalıbı

```jsx
// components/sections/BilesenAdi.jsx

import { getFullImage, getThumbImage } from "@/utils/getUrlData";
import Image from "next/image";

export default function BilesenAdi({ alan_1, alan_2, koleksiyon_alani }) {
  return (
    <>
      <section className="...">
        <div className="container">
          <h2>{alan_1}</h2>
          <p>{alan_2}</p>

          {koleksiyon_alani?.map((item, index) => (
            <div key={index}>
              <Image
                src={getFullImage(item.gorsel_alani)}
                width="0"
                height="0"
                sizes="100vw"
                style={{ width: "auto", height: "auto" }}
                alt={item.baslik_alani}
              />
              <h3>{item.baslik_alani}</h3>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
```

**Kurallar:**
- Bileşen `"use client"` **içermemeli** (etkileşim gerekmiyorsa).
- Prop adları CMS alan adlarıyla **birebir** aynı olmalı.
- Görseller için `next/image` kullanılmalı, `src` her zaman `getFullImage()` veya `getThumbImage()` ile sarılmalı.
- Koleksiyonlar `.map()` ile render edilmeli, `key` olarak `index` kullanılabilir.

---

## Görsel Yardımcı Fonksiyonları

```js
import { getFullImage, getThumbImage } from "@/utils/getUrlData";

// Tam boyut görsel için
getFullImage(item.gorsel_alani)

// Küçük önizleme görseli için
getThumbImage(item.gorsel_alani)
```

- CMS'den gelen **tüm görsel alanları** bu fonksiyonlardan geçirilmeli.
- Ham URL asla doğrudan `src`'ye yazılmamalı.

---

## Veri Yapısı Tipleri

CMS'den gelen veriler iki kategoriye ayrılır:

### 1. Tekil Alanlar (string / number / boolean)
Doğrudan JSX içinde kullanılır:
```jsx
<h1>{baslik}</h1>
<p>{aciklama}</p>
<a href={buton_linki}>{buton_yazisi}</a>
```

### 2. Koleksiyonlar (array of objects)
`.map()` ile döngüye alınır:
```jsx
{koleksiyon.map((item, index) => (
  <div key={index}>
    <Image src={getFullImage(item.gorsel)} ... alt={item.baslik} />
    <h3>{item.baslik}</h3>
    <p>{item.aciklama}</p>
  </div>
))}
```

---

## Entegrasyon İş Akışı

Bir tema dosyası entegre ederken şu adımları izle:

1. **Fetch kodunu al** — Kullanıcının verdiği fetch kodu, hangi endpoint'in kullanıldığını ve hangi alanların geldiğini gösterir.
2. **Mevcut tema bileşenini oku** — Şu an statik/hardcoded içerik kullanan bileşeni incele.
3. **Alan eşlemesini yap** — CMS alanlarını bileşenin hangi statik değerlerin yerine geçeceğine karar ver.
4. **Sayfa dosyasını yaz** — Fetch fonksiyonu + destructuring + section bileşenlerine prop geçişi.
5. **Section bileşenini güncelle** — Hardcoded değerleri `{prop_adi}` ile değiştir.
6. **Görselleri kontrol et** — `<img>` etiketlerini `next/image` + `getFullImage()` ile değiştir.

---

## Örnek: Ana Sayfa Entegrasyonu

Kullanıcı bu fetch kodunu verir:

```js
async function getAnaSayfa() {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "ana_sayfa", {
    next: { tags: ["ana_sayfa"] },
  });
  if (!res.ok) throw new Error("Failed to fetch data");
  return await res.json();
}

let anasayfaData = await getAnaSayfa();
let {
  slaytlar,
  musteriler,
  ana_sayfa_hizmetler,
  hakkimizda_baslik,
  hakkimizda_aciklama,
  hakkimizda_bolumu_buton,
  hakkimizda_iletisim_numarasi,
  mutlu_musteri_sayisi,
  basarili_operasyon_sayisi,
  hizmetler_basligi,
  musterilerimiz_aciklama,
  blog_yazilari_kismi_baslik,
  alt_cta_yazi,
  alt_cta_buton,
  blog_yazilari,
  mutlu_musteri_gorseli,
  hakkimizda_sag_sayi_yazisi,
  hakkimizda_sol_sayi_yazisi,
} = anasayfaData;
```

Beklenen çıktı (`app/page.jsx`):

```jsx
import About5 from "@/components/sections/About5";
import Blog5 from "@/components/sections/Blog5";
import Client4 from "@/components/sections/Client4";
import Cta2 from "@/components/sections/Cta2";
import Service8 from "@/components/sections/Service8";
import Slider4 from "@/components/sections/Slider4";

async function getAnaSayfa() {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "ana_sayfa", {
    next: { tags: ["ana_sayfa"] },
  });
  if (!res.ok) throw new Error("Failed to fetch data");
  return await res.json();
}

export default async function Home() {
  let anasayfaData = await getAnaSayfa();
  let {
    slaytlar,
    hakkimizda_baslik,
    hakkimizda_aciklama,
    hakkimizda_bolumu_buton,
    hakkimizda_iletisim_numarasi,
    mutlu_musteri_sayisi,
    mutlu_musteri_gorseli,
    basarili_operasyon_sayisi,
    hizmetler_basligi,
    ana_sayfa_hizmetler,
    musterilerimiz_aciklama,
    musteriler,
    blog_yazilari_kismi_baslik,
    blog_yazilari,
    alt_cta_yazi,
    alt_cta_buton,
    hakkimizda_sag_sayi_yazisi,
    hakkimizda_sol_sayi_yazisi,
  } = anasayfaData;

  return (
    <>
      <Slider4 slaytlar={slaytlar} />
      <About5
        hakkimizda_baslik={hakkimizda_baslik}
        hakkimizda_aciklama={hakkimizda_aciklama}
        hakkimizda_bolumu_buton={hakkimizda_bolumu_buton}
        hakkimizda_iletisim_numarasi={hakkimizda_iletisim_numarasi}
        mutlu_musteri_sayisi={mutlu_musteri_sayisi}
        mutlu_musteri_gorseli={mutlu_musteri_gorseli}
        basarili_operasyon_sayisi={basarili_operasyon_sayisi}
        hakkimizda_sag_sayi_yazisi={hakkimizda_sag_sayi_yazisi}
        hakkimizda_sol_sayi_yazisi={hakkimizda_sol_sayi_yazisi}
      />
      <Service8 hizmetler_basligi={hizmetler_basligi} ana_sayfa_hizmetler={ana_sayfa_hizmetler} />
      <Client4 musterilerimiz_aciklama={musterilerimiz_aciklama} musteriler={musteriler} />
      <Cta2 alt_cta_yazi={alt_cta_yazi} alt_cta_buton={alt_cta_buton} />
      <Blog5 blog_yazilari_kismi_baslik={blog_yazilari_kismi_baslik} blog_yazilari={blog_yazilari} />
    </>
  );
}
```

---

## Layout Yapısı

`app/layout.jsx` her temada şu sabit yapıyı içerir. Tema entegrasyon sırasında bu dosyaya dokunmak gerekirse aşağıdaki kalıbı koru.

### Sabit Bileşenler

Layout her zaman şunları içerir:
- `<Header>` — `menuData` ve `settings` prop'larını alır
- `<Footer>` — prop almaz, settings'e kendi içinden erişebilir
- `<Floating>` — CMS'den gelen iletişim/sosyal medya butonları
- `<BackToTop>` — sayfa en üste çıkma butonu

### Settings ve Menu Fetch'i

Layout, iki özel CMS endpoint'ini her sayfada otomatik çeker:

```js
async function getMenuData() {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "settings/menu", {
    next: { tags: ["settings"] },
  });
  if (!res.ok) throw new Error("Failed to fetch data");
  return await res.json();
}

async function getSettings() {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "settings", {
    next: { tags: ["settings"] },
  });
  if (!res.ok) throw new Error("Failed to fetch data");
  return await res.json();
}
```

- İki endpoint de aynı `"settings"` tag'ini kullanır; biri invalidate olunca ikisi de yenilenir.
- `settings` nesnesi site genelinde kullanılan verileri taşır (aşağıya bak).

### `settings` Nesnesindeki Alanlar

```js
settings.site_title          // Site başlığı
settings.site_description    // Meta açıklaması
settings.site_meta_tags_default  // Virgülle ayrılmış varsayılan keywords
settings.site_url            // Canonical URL
```

### generateMetadata (SEO)

Layout'ta `generateMetadata` fonksiyonu `settings` verisini kullanarak site genelinde metadata üretir:

```js
import { finalizeSeo, generateBasicSeo } from "../../utils/seo/GenerateSeo";
import { generateBasicOgMeta } from "../../utils/seo/ogSeo";

export async function generateMetadata({ params }) {
  let settings = await getSettings();

  let seoObject = finalizeSeo(
    generateBasicSeo({
      title: {
        template: "%s | " + settings.site_title,
        default: settings.site_title,
      },
      description: settings.site_description,
      keywords: settings.site_meta_tags_default.split(","),
    }),
    generateBasicOgMeta({
      description: settings.site_description,
      title: settings.site_title,
      url: settings.site_url,
      imageUrl: process.env.NEXT_PUBLIC_SITE_URL + "api/generateimage?t=" + settings.site_title,
      imageWidth: 1280,
      imageHeight: 720,
    })
  );

  return {
    ...seoObject,
    icons: { /* apple-touch-icon dizisi */ },
  };
}
```

**Kurallar:**
- `generateMetadata` layout'ta tanımlanır, sayfa dosyalarında tanımlanmamalı (sadece sayfa bazlı override gerekiyorsa).
- `title.template` formatı `"%s | Site Adı"` şeklinde olmalı; `%s` sayfa başlığını alır.
- OG image URL'si `api/generateimage` endpoint'i üzerinden dinamik üretilir.

### Google Analytics

Layout, Lighthouse tarayıcısını performans testlerini bozmamak için Google Analytics'ten hariç tutar:

```jsx
import { GoogleAnalytics } from "@next/third-parties/google";
import { headers } from "next/headers";

// RootLayout içinde:
const { get } = headers();
const ua = get("user-agent");

// html kapanış etiketinden önce:
{!ua.includes("Chrome-Lighthouse") ? (
  <GoogleAnalytics gaId="G-XXXXXXXXXX" />
) : (
  ""
)}
```

- `gaId` değeri `.env` üzerinden alınmalı ya da doğrudan yazılabilir.
- Bu Lighthouse kontrolü her layout dosyasında korunmalı, kaldırılmamalı.

---

## Ortam Değişkenleri (Tam Liste)

```env
NEXT_PUBLIC_API_URL=https://cms.example.com/api/
NEXT_PUBLIC_SITE_URL=https://site.example.com/
REVALIDATE_KEY=gizli_anahtar_buraya
```

- `NEXT_PUBLIC_API_URL` — CMS API base URL, `/` ile biter.
- `NEXT_PUBLIC_SITE_URL` — Sitenin public URL'i, OG image üretiminde kullanılır, `/` ile biter.
- `REVALIDATE_KEY` — CMS'in cache'i temizlemek için gönderdiği secret key; `NEXT_PUBLIC_` **olmaz**, sunucu taraflı kalır.

---

## Revalidate API Sistemi

Cache'i CMS tarafından tetiklemek için `app/api/revalidate/route.js` dosyası kullanılır. Bu dosya her projede aynı kalıpla oluşturulur.

### Route Dosyası Kalıbı

```js
// app/api/revalidate/route.js

import { NextResponse, NextRequest } from "next/server";
import { revalidateTag } from "next/cache";

export function GET(request) {
  const searchParams = request.nextUrl.searchParams;
  const secretKey = searchParams.get("secret");

  if (!secretKey || secretKey !== process.env.REVALIDATE_KEY) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const tag = searchParams.get("tag");
  if (!tag)
    return NextResponse.json({ error: "No Tag Provided" }, { status: 404 });

  try {
    let tags = [
      "ana_sayfa",
      "settings",
      "hakkimizda_sayfasi",
      "hizmetler",
      // ... projedeki tüm tag'ler
    ];

    if (tag === "all") {
      tags.forEach((tag) => revalidateTag(tag));
      return NextResponse.json(
        { message: `${tags.join(" - ")} are revalidated` },
        { status: 200 }
      );
    } else {
      revalidateTag(tag);
      return NextResponse.json(
        { message: `${tag} is revalidated` },
        { status: 200 }
      );
    }
  } catch (error) {
    return NextResponse.json({ error }, { status: 404 });
  }
}
```

### Ortam Değişkeni

```env
REVALIDATE_KEY=gizli_anahtar_buraya
```

- CMS, içerik güncellendiğinde bu endpoint'i `secret` ve `tag` parametreleriyle çağırır.
- `REVALIDATE_KEY` değeri `.env` dosyasında tutulur, asla kod içine yazılmaz.

### Kullanım

Tek bir tag'i revalidate etmek için:
```
GET /api/revalidate?secret=REVALIDATE_KEY&tag=ana_sayfa
```

Tüm tag'leri aynı anda revalidate etmek için:
```
GET /api/revalidate?secret=REVALIDATE_KEY&tag=all
```

### Yeni Proje Kurulum Adımları

Yeni bir temaya entegrasyon yapılırken `tags` dizisi projedeki **tüm endpoint tag'lerini** içermelidir. Her yeni sayfa eklendikçe bu listeye o sayfanın tag'i de eklenir.

```js
let tags = [
  "ana_sayfa",
  "settings",
  "hakkimizda_sayfasi",
  "hizmetler_sayfasi",
  "iletisim_sayfasi",
  "blog_yazilari",
  // ... yeni sayfa eklendikçe buraya da eklenir
];
```

**Kurallar:**
- `tags` dizisi projedeki fetch fonksiyonlarında kullanılan tüm tag değerlerini kapsamalı.
- `secret` parametresi olmayan istekler `401` döner — bu kontrol kaldırılmamalı.
- `tag` parametresi olmayan istekler `404` döner.

---

## Sık Yapılan Hatalar

| Hata | Doğrusu |
|------|---------|
| `cache: 'no-store'` kullanmak | `next: { tags: ["..."] }` kullanmak |
| Sayfa bileşenine `"use client"` eklemek | Sayfa Server Component kalmalı |
| Görseli `<img src={item.gorsel}>` yazmak | `<Image src={getFullImage(item.gorsel)} ...>` |
| Ham URL'yi `src`'ye yazmak | `getFullImage()` veya `getThumbImage()` ile sarmak |
| Prop adını CMS alanından farklı yazmak | CMS alan adıyla birebir eşleşmeli |
| Fetch'i bileşen içine yazmak | Fetch sayfa dosyasında, bileşen dışında olmalı |
| Koleksiyonda `key` prop'u unutmak | `.map()` içinde `key={index}` veya `key={item.id}` |
| Koleksiyon endpoint'ini `/all` olmadan çağırmak | `"koleksiyon_adi/all"` formatı zorunlu |
| Layout'ta Lighthouse kontrolünü kaldırmak | `ua.includes("Chrome-Lighthouse")` koşulu korunmalı |
| `generateMetadata`'yı sayfa dosyasına taşımak | Layout'ta kalmalı; sayfa bazlı override gerekirse ek tanım yapılabilir |
| `settings` tag'ini farklı adla tanımlamak | Menu ve settings fetch'inde tag her zaman `["settings"]` olmalı |

---

## Sayfa Entegrasyon Talimatı (Her Sayfa İçin Tekrarlanır)

Entegrasyon süreci sayfa bazlıdır. Her sayfa için şu döngü tekrarlanır:

### Kullanıcı Şunları Verir
1. **Hangi sayfa** — örn. "hizmetler sayfasını entegre edelim"
2. **Fetch kodu** — endpoint adı, koleksiyon/sayfa ayrımı ve tüm alanlar
3. **Tema dosyası** — ilgili `page.jsx` ve/veya section bileşenleri

### AI Şunları Yapar

**Adım 1 — Fetch kodunu analiz et**
- Endpoint türünü belirle: sayfa mı (`hizmetler`) yoksa koleksiyon mu (`hizmetler/all`)?
- Tüm alanları listele: tekil mi (string/number) yoksa koleksiyon mu (array)?

**Adım 2 — Tema dosyasını oku**
- Sayfadaki section bileşenlerini tespit et.
- Hardcoded içerikleri bul (metin, görsel src, link href).
- `<img>` etiketi kullanımı var mı kontrol et.

**Adım 3 — Alan eşlemesini yap**
Belirsizlik varsa kullanıcıya sor. Örnek:
> "Fetch kodunda `hizmet_aciklamasi` alanı var. Bu bileşende 'Lorem ipsum...' yazan paragrafın yerine mi geçecek?"

**Adım 4 — Dosyaları güncelle**
- `page.jsx` → fetch fonksiyonu + destructuring + prop geçişleri
- Section bileşenleri → hardcoded değerleri prop'larla değiştir
- Görseller → `<img>` yerine `next/image` + `getFullImage()`

**Adım 5 — Revalidate tag'ini kaydet**
`app/api/revalidate/route.js` içindeki `tags` dizisine yeni sayfanın tag'ini ekle.

**Adım 6 — Kullanıcıya özet sun**
Yapılan değişiklikleri kısaca özetle, sonraki sayfaya geçmeye hazır olduğunu belirt.

---

### Karşılaşılabilecek Durumlar

**Fetch kodunda olmayan bir alan bileşende kullanılıyorsa:**
Kullanıcıya bildir. O alan CMS'e eklenmemiş olabilir ya da farklı bir endpoint'ten geliyor olabilir.

**Bileşen `"use client"` içeriyorsa:**
Etkileşim (state, event handler, slider init vb.) gerektirip gerektirmediğini kontrol et. Gerektiriyorsa bırak; veri prop olarak page'den geçirilmeli.

**Koleksiyon uzunluğu belirsizse:**
`.map()` kullan, sabit index'e bağlı (`musteriler[0]`) erişimden kaç. Tek öğe gösterilecekse bile ilk öğeyi map içinden al.

**Tema farklı bir image component kullanıyorsa:**
`next/image` ile değiştir. Mevcut className'leri koru, sadece tag'i ve `src` sarmalını güncelle.