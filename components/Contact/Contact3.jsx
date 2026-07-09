import React, { useState } from 'react';

const Contact3 = ({ data }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        subject: '',
    });

    const [submitStatus, setSubmitStatus] = useState(null);
    const [submitButtonText, setSubmitButtonText] = useState('Gönder');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitButtonText('Gönderiliyor...');
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            setSubmitStatus(response.status === 200 ? 'success' : 'error');
        } catch {
            setSubmitStatus('error');
        } finally {
            setSubmitButtonText('Gönder');
        }
    };

    return (
        <div className="section-spacing">
            <div className="container">
                <div className="row g-2 hover-border-wrapper">
                    <div className="col-12 col-md-4">
                        <div className="p-4 p-lg-5 hover-border hover-border-active">
                            <div className="icon-3xl mb-3">
                                <i className="bi bi-telephone"></i>
                            </div>
                            <h5>Telefon</h5>
                            {(data.phoneNumbers ?? []).map((phone, index) => (
                                <p key={index} style={{ margin: '0 0 0.25rem' }}>
                                    <a href={`tel:${phone}`} style={{ color: 'inherit', textDecoration: 'none' }}>{phone}</a>
                                </p>
                            ))}
                            {data.gsm && (
                                <>
                                    <p style={{ margin: '0.75rem 0 0.1rem', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.08em', opacity: 0.55 }}>GSM</p>
                                    <p style={{ margin: 0 }}>
                                        <a href={`tel:${data.gsm}`} style={{ color: 'inherit', textDecoration: 'none' }}>{data.gsm}</a>
                                    </p>
                                </>
                            )}
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="p-4 p-lg-5 hover-border">
                            <div className="icon-3xl mb-3">
                                <i className="bi bi-envelope"></i>
                            </div>
                            <h5>E-Posta</h5>
                            {(data.emails ?? []).map((email, index) => (
                                <span key={index}>
                                    <a href={`mailto:${email}`} style={{ color: 'inherit', textDecoration: 'none' }}>{email}</a>
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="p-4 p-lg-5 hover-border">
                            <div className="icon-3xl mb-3">
                                <i className="bi bi-geo-alt"></i>
                            </div>
                            <h5>Adres</h5>
                            <span>{data.address}</span>
                            {data.addressSecond && (
                                <>
                                    <p style={{ margin: '0.75rem 0 0.1rem', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.08em', opacity: 0.55 }}>Şube Adresi</p>
                                    <span>{data.addressSecond}</span>
                                </>
                            )}
                        </div>
                    </div>
                </div>
                <div className="row g-5 mt-1">
                    <div className="col-12 col-xl-6">
                        {data.googleMaps ? (
                            <iframe
                                src={data.googleMaps}
                                width="100%"
                                height="350"
                                style={{ border: 0, borderRadius: '4px' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        ) : (
                            <div style={{ width: '100%', height: '350px', background: '#1a1a1a', borderRadius: '4px' }} />
                        )}
                    </div>
                    <div className="col-12 col-xl-6 text-xl-end">
                        <div className="contact-form">
                            <form className="form-style-2" method="post" id="contactform" onSubmit={handleSubmit}>
                                <div className="row gx-3 gy-0">
                                    <div className="col-12 col-md-6">
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            placeholder="Adınız"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            placeholder="E-Mail"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    placeholder="Konu"
                                    required
                                    value={formData.subject}
                                    onChange={handleChange}
                                />
                                <textarea
                                    name="message"
                                    id="message"
                                    placeholder="Mesajınız"
                                    value={formData.message}
                                    onChange={handleChange}
                                ></textarea>
                                <button className="button button-lg button-rounded button-dark button-hover-slide" type="submit">
                                    <span data-text={submitButtonText}>{submitButtonText}</span>
                                </button>
                            </form>
                            <div className="submit-result">
                                {submitStatus === 'success' && (
                                    <span id="success">Teşekkürler! Mesajınız gönderildi.</span>
                                )}
                                {submitStatus === 'error' && (
                                    <span id="error">Bir hata oluştu, lütfen tekrar deneyin!</span>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact3;