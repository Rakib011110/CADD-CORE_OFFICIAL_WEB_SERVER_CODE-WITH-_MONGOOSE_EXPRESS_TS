import nodemailer from 'nodemailer';
import config from '../../config';

export const sendVerificationEmail = async (email: string, token: string) => {
  const transporter = nodemailer.createTransport({
    host: config.email_host,
    
    port: Number(config.email_port),
     secure: false, // 👈 must be false for port 587

    auth: {
      user: config.email_user,
      pass: config.email_pass,
    },
  });

  const verificationUrl = `${process.env.CLIENT_URL}/verify-email?token=${token}`;

  await transporter.sendMail({
    from: config.email_from,
    to: email,
    subject: 'Email Verification',
    html: `
      <p>Please click the following link to verify your email:</p>
      <a href="${verificationUrl}">Verify Email</a>
      <p>This link will expire in 24 hours.</p>
    `,
  });
};