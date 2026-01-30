import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { name, email, type, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ message: 'Missing required fields' });
    }

    if (!process.env.RESEND_API_KEY) {
        return res.status(500).json({
            message: 'Server configuration error: Missing API Key.',
            detail: 'Ensure RESEND_API_KEY is set in Vercel Environment Variables.'
        });
    }

    try {
        const { data, error } = await resend.emails.send({
            from: 'Centro-Medical <notifications@centro-medical.com.au>',
            to: ['info@centro-medical.com.au'],
            subject: `New Enquiry from ${name} (${type})`,
            replyTo: email,
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
        });

        if (error) {
            console.error('Resend error:', error);
            return res.status(500).json({
                message: 'Failed to send enquiry via Resend',
                error: error.message
            });
        }

        return res.status(200).json({ message: 'Enquiry sent successfully', id: data.id });
    } catch (error) {
        console.error('API Error:', error);
        return res.status(500).json({
            message: 'An unexpected error occurred',
            error: error.message
        });
    }
}
