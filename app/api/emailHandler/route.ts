import nodemailer from 'nodemailer';
import { NextResponse, NextRequest } from 'next/server';
import dotenv from 'dotenv';

dotenv.config();


const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: process.env.NEXT_PORT,
    auth: {
        user: process.env.NEXT_USERNAME,
        pass: process.env.NEXT_PASSWORD,
    },
});

export async function POST(req: NextRequest) {
    if (req.method == 'POST') {
        const body = await req.json();
        const { email, subject, message } = body;
        const mailOptions = {
            from: email,
            to: "jai5789anand@gmail.com",
            subject: subject,
            text: `From : ${email}\n\n\nSubject : ${subject}\n\n\n${message}`,
        };
        try {
            await transporter.sendMail(mailOptions);
            return NextResponse.json({ success: true, data: 'Email sent successfully' }, { status: 200 });
        } catch (error) {

            return NextResponse.json({ success: false, data: 'Failed to send email' }, { status: 500 });
        }
    }
}

export const config = {
    api: {
        bodyParser: false,
    },
};