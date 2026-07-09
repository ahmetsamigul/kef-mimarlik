import Link from 'next/link';
import React, { useState } from 'react'

const HeaderFullscreenMenu2 = ({ data }) => {
    const [isMenuVisible, setMenuVisible] = useState(false);

    const toggleMobileMenu = () => {
        setMenuVisible(!isMenuVisible);
    };
    return (
        <>
            <div className="header header-xl transparent-light">
                <div className="container-fluid px-lg-5">
                    {/* Logo */}
                    <div className="header-logo">
                        {data.logoImage
                            ? <Link href="/"><img src={data.logoImage} alt="Logo" style={{ height: '55px', width: 'auto', objectFit: 'contain' }} /></Link>
                            : <h5 className="uppercase">{data.logoText}</h5>
                        }
                    </div>
                    {/* Menu Toggle */}
                    <button className="fm-toggle" onClick={toggleMobileMenu}>Menu<span></span></button>
                </div>{/* end container-fluid */}
            </div>

            <div className={`fullscreen-menu bg-black ${isMenuVisible ? 'show' : ''}`}>
                <div className="position-absolute top-50 start-50 translate-middle w-100">
                    <div className="container">
                        <div className="row g-4 g-lg-5 align-items-center">
                            <div className="col-12 col-lg-7">
                                <ul className="list-unstyled display-2 font-family-poppins fw-semi-bold mt-4">
                                    {data.menuItems.map((link, index) => (
                                        <li key={index}>
                                            <Link
                                                className="link-hover-fill"
                                                href={link.href || '/'}
                                                onClick={toggleMobileMenu}
                                            >
                                                {link.text}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="col-12 col-lg-5">
                                <div className="row g-4 g-lg-5">
                                    <div className="col-12">
                                        <h6 className="sm-heading">Adres:</h6>
                                        <p style={{ margin: 0 }}>{data.address}</p>
                                        {data.addressSecond && (
                                            <>
                                                <h6 className="sm-heading" style={{ marginTop: '0.75rem' }}>Şube Adresi:</h6>
                                                <p style={{ margin: 0 }}>{data.addressSecond}</p>
                                            </>
                                        )}
                                    </div>
                                    <div className="col-6 col-lg-12">
                                        <h6 className="sm-heading">İletişim:</h6>
                                        <ul className="list-unstyled">
                                            <li>{data.contact.phone1}</li>
                                            {data.contact.gsm && <li>{data.contact.gsm}</li>}
                                            <li>{data.contact.email}</li>
                                        </ul>
                                    </div>
                                    <div className="col-6 col-lg-12">
                                        <h6 className="sm-heading">Bizi Takip Edin:</h6>
                                        <ul className="list-inline">
                                            {data.socialLinks.map((link, index) => (
                                                <li key={index}><Link className="button-circle button-circle-sm button-circle-white-2" href={link.href}><i className={link.iconClass}></i></Link></li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>{/* end row(inner) */}
                            </div>
                        </div>{/* end row */}
                    </div>{/* end container */}
                </div>
                {/* Close Menu */}
                <button className="fm-close text-white" onClick={toggleMobileMenu}>
                    <i className="bi bi-x-lg"></i>
                </button>
            </div>
        </>
    )
}

export default HeaderFullscreenMenu2