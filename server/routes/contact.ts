import { Request, Response } from "express";
import nodemailer from "nodemailer";

export const handleContact = async (req: Request, res: Response) => {
  try {
    const { name, surname, phone, email, message } = req.body;

    // Validation
    if (!name || !phone || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Required fields missing",
      });
    }

    // Mail transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send mail
    await transporter.sendMail({
      from: `"Website Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: "📩 New Contact Form Submission",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2 style="color:#CE9162;">📩 New Contact Form</h2>

          <p><strong>Name:</strong> ${name} ${surname || ""}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Message:</strong><br/>${message}</p>

          <hr style="margin:20px 0;" />

          <p style="color: green; font-weight: bold;">
            ✅ Form submitted successfully
          </p>

          <p style="font-size: 12px; color: #777;">
            This message was sent from your website contact form.
          </p>
        </div>
      `,
    });

    // API response
    res.status(200).json({
      success: true,
      message: "Form submitted successfully",
    });
  } catch (error) {
    console.error("❌ EMAIL ERROR:", error);

    res.status(500).json({
      success: false,
      message: "Email sending failed",
    });
  }
};
