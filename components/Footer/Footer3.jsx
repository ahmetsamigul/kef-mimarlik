import Link from 'next/link'
import React from 'react'

const Footer3 = ({ data, dark }) => {
    const currentYear = new Date().getFullYear();

    return (
        <div className={dark ? 'bg-dark' : 'bg-black'}>
            <div className="section-spacing-sm">
                <div className="container">
                    <div className="row g-4 g-lg-5">

                        {/* Sol kolon — logo, açıklama, sosyal linkler */}
                        <div className="col-12 col-lg-4">
                            {data.logoImage && (
                                <Link href="/">
                                    <img
                                        src={data.logoImage}
                                        alt="Logo"
                                        style={{ maxHeight: 60, maxWidth: 180, objectFit: 'contain', marginBottom: '1rem', display: 'block' }}
                                    />
                                </Link>
                            )}
                            {data.logoText && (
                                <p className="text-white-50" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
                                    {data.logoText}
                                </p>
                            )}
                            {data.socialLinks?.length > 0 && (
                                <div className="mt-4">
                                    <p style={{ fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', opacity: 0.5, marginBottom: '0.6rem', color: '#fff' }}>
                                        Bizi Takip Edin:
                                    </p>
                                    <div className="d-flex gap-2">
                                        {data.socialLinks.map((s, i) => (
                                            <a
                                                key={i}
                                                href={s.href || '#'}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                style={{
                                                    display: 'inline-flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    width: 42,
                                                    height: 42,
                                                    borderRadius: '50%',
                                                    backgroundColor: '#2a2a2a',
                                                    color: '#fff',
                                                    fontSize: '1rem',
                                                    transition: 'background-color 0.2s',
                                                    textDecoration: 'none',
                                                }}
                                                onMouseEnter={e => e.currentTarget.style.backgroundColor = '#444'}
                                                onMouseLeave={e => e.currentTarget.style.backgroundColor = '#2a2a2a'}
                                            >
                                                <i className={s.iconClass}></i>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Orta kolon — Hizmetlerimiz listesi */}
                        <div className="col-12 col-md-6 col-lg-4">
                            <h6 style={{ fontSize: '1rem', fontWeight: 600, color: '#fff', marginBottom: '1.2rem' }}>
                                Hizmetlerimiz
                            </h6>
                            {data.footerServices?.length > 0 ? (
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                    {data.footerServices.map((s, i) => (
                                        <li key={i} style={{ marginBottom: '0.65rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                            <i className="bi bi-arrow-right" style={{ fontSize: '0.8rem', opacity: 0.5, color: '#fff' }}></i>
                                            <Link
                                                href={s.href || '/hizmetlerimiz'}
                                                style={{ color: 'rgba(255,255,255,0.65)', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.2s' }}
                                                onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                                                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.65)'}
                                            >
                                                {s.text}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                    {[
                                        { text: 'Mimari Tasarım', href: '/hizmetlerimiz' },
                                        { text: 'İç Mekan Tasarımı', href: '/hizmetlerimiz' },
                                        { text: 'Proje Yönetimi', href: '/hizmetlerimiz' },
                                        { text: 'Uygulama Projeleri', href: '/hizmetlerimiz' },
                                    ].map((s, i) => (
                                        <li key={i} style={{ marginBottom: '0.65rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                            <i className="bi bi-arrow-right" style={{ fontSize: '0.8rem', opacity: 0.5, color: '#fff' }}></i>
                                            <Link href={s.href} style={{ color: 'rgba(255,255,255,0.65)', textDecoration: 'none', fontSize: '0.95rem' }}>
                                                {s.text}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>

                        {/* Sağ kolon — İletişim bilgileri */}
                        <div className="col-12 col-md-6 col-lg-4">
                            <h6 style={{ fontSize: '1rem', fontWeight: 600, color: '#fff', marginBottom: '1.2rem' }}>
                                İletişim Bilgileri
                            </h6>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>

                                {/* Telefon + GSM + Email yan yana */}
                                <li style={{ marginBottom: '1rem', display: 'flex', gap: '1.5rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
                                    {data.phone && (
                                        <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                                            <span style={{ marginTop: '0.15rem', opacity: 0.6, color: '#fff' }}>
                                                <i className="bi bi-telephone" style={{ fontSize: '1rem' }}></i>
                                            </span>
                                            <div>
                                                <p style={{ margin: 0, fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.5, color: '#fff' }}>Telefon</p>
                                                <a href={`tel:${data.phone}`} style={{ color: 'rgba(255,255,255,0.85)', textDecoration: 'none', fontSize: '0.95rem' }}>
                                                    {data.phone}
                                                </a>
                                                {data.gsm && (
                                                    <>
                                                        <p style={{ margin: '0.4rem 0 0', fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.5, color: '#fff' }}>GSM</p>
                                                        <a href={`tel:${data.gsm}`} style={{ color: 'rgba(255,255,255,0.85)', textDecoration: 'none', fontSize: '0.95rem' }}>
                                                            {data.gsm}
                                                        </a>
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                    )}
                                    {data.email && (
                                        <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                                            <span style={{ marginTop: '0.15rem', opacity: 0.6, color: '#fff' }}>
                                                <i className="bi bi-envelope" style={{ fontSize: '1rem' }}></i>
                                            </span>
                                            <div>
                                                <p style={{ margin: 0, fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.5, color: '#fff' }}>E-Mail</p>
                                                <a href={`mailto:${data.email}`} style={{ color: 'rgba(255,255,255,0.85)', textDecoration: 'none', fontSize: '0.95rem' }}>
                                                    {data.email}
                                                </a>
                                            </div>
                                        </div>
                                    )}
                                </li>

                                {/* Adres + Şube Adresi yan yana */}
                                <li style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
                                    {data.address && (
                                        <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                                            <span style={{ marginTop: '0.15rem', opacity: 0.6, color: '#fff' }}>
                                                <i className="bi bi-geo-alt" style={{ fontSize: '1rem' }}></i>
                                            </span>
                                            <div>
                                                <p style={{ margin: 0, fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.5, color: '#fff' }}>Adres</p>
                                                <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.95rem', margin: 0, lineHeight: 1.6 }}>
                                                    {data.address}
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                    {data.addressSecond && (
                                        <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                                            <span style={{ marginTop: '0.15rem', opacity: 0.6, color: '#fff' }}>
                                                <i className="bi bi-geo-alt" style={{ fontSize: '1rem' }}></i>
                                            </span>
                                            <div>
                                                <p style={{ margin: 0, fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.5, color: '#fff' }}>Şube Adresi</p>
                                                <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.95rem', margin: 0, lineHeight: 1.6 }}>
                                                    {data.addressSecond}
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                </li>

                            </ul>
                        </div>

                    </div>
                </div>
            </div>

            {/* Alt çizgi + copyright */}
            <div className="container">
                <hr style={{ borderColor: 'rgba(255,255,255,0.1)', margin: 0 }} />
                <div className="py-4">
                    <div className="row g-2">
                        <div className="col-12 col-md-6 text-center text-md-start">
                            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem', margin: 0 }}>
                                &copy; {currentYear} {data.rights}
                            </p>
                        </div>
                        <div className="col-12 col-md-6 text-center text-md-end">
                            <ul className="list-inline-dot" style={{ margin: 0 }}>
                                {(data.helpItems ?? []).map((item, index) => (
                                    <li key={index}>
                                        <Link className="link-hover-line" href={item.href || '/'} style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem' }}>
                                            {item.text}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer3