import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '@/styles/all.min.css'
import "swiper/css";
import '@/styles/theme.scss'
import '@/styles/themify-icons.css'
import Head from 'next/head'
import { mainData } from '@/lib/data'

function WhatsAppFloat({ phone }) {
  const [hovered, setHovered] = React.useState(false);
  if (!phone) return null;
  const digits = phone.replace(/\D/g, '').replace(/^0+/, '');
  const href = `https://wa.me/+90${digits}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'fixed',
        bottom: 90,
        right: 28,
        zIndex: 9999,
        width: 64,
        height: 64,
        borderRadius: '50%',
        backgroundColor: hovered ? '#1da851' : '#25D366',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 16px rgba(0,0,0,0.18)',
        transition: 'background-color 0.2s, transform 0.2s',
        transform: hovered ? 'scale(1.08)' : 'scale(1)',
        textDecoration: 'none',
      }}
      title="WhatsApp ile iletişime geç"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="#fff">
        <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.668 4.61 1.832 6.516L4 29l7.697-1.809A11.94 11.94 0 0 0 16 28c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22a9.94 9.94 0 0 1-5.09-1.395l-.364-.216-4.572 1.074 1.116-4.45-.237-.375A9.955 9.955 0 0 1 6 15c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.417-7.403c-.297-.148-1.757-.866-2.03-.965-.273-.099-.472-.148-.671.148-.198.297-.768.965-.941 1.164-.173.198-.347.223-.644.074-.297-.148-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.457.13-.605.133-.133.297-.347.446-.521.148-.173.198-.297.297-.495.099-.198.05-.372-.025-.521-.074-.148-.671-1.617-.919-2.214-.242-.581-.488-.502-.671-.511l-.571-.01c-.198 0-.521.074-.794.372-.273.297-1.04 1.017-1.04 2.479 0 1.463 1.065 2.875 1.213 3.074.148.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.757-.718 2.006-1.413.248-.694.248-1.29.173-1.413-.074-.124-.273-.198-.57-.347z"/>
      </svg>
    </a>
  );
}

export default function App({ Component, pageProps }) {
  const phone = pageProps?.cmsHeader?.contact?.phone1 ?? null;
  const favicon = pageProps?.cmsHeader?.logoImage ?? mainData.favicon?.src ?? null;

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {favicon && <link rel="shortcut icon" href={favicon} />}
      </Head>
      <Component {...pageProps} />
      <WhatsAppFloat phone={phone} />
    </>
  )
}