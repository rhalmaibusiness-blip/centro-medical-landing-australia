import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { name, email, type, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ message: 'Missing required fields' });
    }

    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (!smtpUser || !smtpPass) {
        return res.status(500).json({
            message: 'Server configuration error: Missing SMTP credentials.',
            detail: 'Ensure SMTP_USER and SMTP_PASS are set in Vercel Environment Variables.'
        });
    }

    // Configure Nodemailer with DotRoll SMTP
    const transporter = nodemailer.createTransport({
        host: 'mx1.dotroll.com',
        port: 465,
        secure: true, // Use SSL
        auth: {
            user: smtpUser,
            pass: smtpPass,
        },
        timeout: 10000, // 10 seconds timeout
    });

    try {
        // Send email notification
        await transporter.sendMail({
            from: `"Centro-Medical Web" <${smtpUser}>`,
            to: 'info@centro-medical.com.au',
            subject: `New Enquiry from ${name} (${type})`,
            text: `
Name: ${name}
Email: ${email}
Type: ${type}
Message: ${message}
      `,
            html: `
                <h3>New Enquiry from Landing Page</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Type:</strong> ${type}</p>
                <p><strong>Message:</strong></p>
                <p>${message.replace(/\n/g, '<br>')}</p>
            `,
            replyTo: email,
        });

        return res.status(200).json({ message: 'Enquiry sent successfully' });
    } catch (error) {
        console.error('Email sending error:', error);
        return res.status(500).json({
            message: 'Failed to send enquiry',
            error: error.message,
            code: error.code // Provides SMTP codes like EAUTH, ECONNREFUSED etc.
        });
    }
}
