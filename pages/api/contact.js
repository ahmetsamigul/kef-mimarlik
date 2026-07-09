export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).end();

    const { name, email, message, subject } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Eksik alanlar var.' });
    }

    const to = process.env.MAIL_TO_ADDRESS;
    const smtpUser = process.env.MAIL_USERNAME;
    const smtpPass = process.env.MAIL_PASSWORD;
    const smtpHost = process.env.MAIL_HOST;
    const smtpPort = parseInt(process.env.MAIL_PORT, 10) || 587;
    const smtpSecure = process.env.MAIL_USE_TLS === 'true';

    const html = `
        <table style="font-family:Arial,sans-serif;font-size:15px;color:#333;max-width:600px;width:100%">
            <tr><td style="padding:24px 0 8px"><h2 style="margin:0;font-size:20px">Yeni İletişim Formu Mesajı</h2></td></tr>
            <tr><td style="padding:6px 0"><strong>Ad Soyad:</strong> ${name}</td></tr>
            <tr><td style="padding:6px 0"><strong>E-Posta:</strong> <a href="mailto:${email}">${email}</a></td></tr>
            ${subject ? `<tr><td style="padding:6px 0"><strong>Konu:</strong> ${subject}</td></tr>` : ''}
            <tr><td style="padding:12px 0 6px"><strong>Mesaj:</strong></td></tr>
            <tr><td style="padding:0 0 24px;white-space:pre-line;line-height:1.7">${message}</td></tr>
        </table>
    `;

    const nodemailer = require('nodemailer');
    const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpSecure,
        auth: { user: smtpUser, pass: smtpPass },
    });

    try {
        await transporter.sendMail({
            from: `"KEF Mimarlık Web" <${smtpUser}>`,
            replyTo: `"${name}" <${email}>`,
            to,
            subject: subject ? `[Web Formu] ${subject}` : `[Web Formu] ${name} mesaj gönderdi`,
            html,
        });
        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('[contact api]', error);
        res.status(500).json({ error: 'E-posta gönderilemedi.' });
    }
}
