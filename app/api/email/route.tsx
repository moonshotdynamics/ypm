import nodemailer from 'nodemailer';

import { NextResponse, NextRequest } from 'next/server';
export async function POST(req: NextRequest) {

  const { name, email, message } = (await req.json()) as {
    name: string;
    email: string;
    message: string;
  };

  // Create a nodemailer transporter
  const transporter = nodemailer.createTransport({
    // Configure your email service here
    // For example, using Gmail:
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'indira@youngpreneurmedia.com',
      subject: 'New Contact Form Submission',
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
