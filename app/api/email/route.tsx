import nodemailer from 'nodemailer';

import { NextResponse, NextRequest } from 'next/server';
export async function POST(req: NextRequest) {
  const { name, email, message } = (await req.json()) as {
    name: string;
    email: string;
    message: string;
  };

  // Create a nodemailer transporter

  const sendgridApiKey = process.env.SENDGRID_API_KEY || '';
  const transporter = nodemailer.createTransport({
    host: 'smtp.sendgrid.net',
    port: 587,
    auth: {
      user: 'apikey',
      pass: sendgridApiKey,
    },
  });

  try {
    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'indira@youngprenuermedia.com;tshemm@gmail.com',
      subject: 'YPM: New Contact Form Submission',
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
    });
    return NextResponse.json({ status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({
      error: 'Error sending email',
      details: {
        name: (error as Error)?.name,
        message: (error as Error)?.message,
      },
    });
  }
}
