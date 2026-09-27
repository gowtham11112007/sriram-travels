import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, destination, travelDate, travelers, message } = await req.json();

    if (!name || !email || !phone) {
      return NextResponse.json({ error: "Name, email and phone are required." }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });

    // ── Notify the business owner ──
    await transporter.sendMail({
      from: `"SriRam Travels Website" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_TO,
      subject: `🧳 New Booking — ${destination || "Enquiry"} from ${name}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px">
          <div style="background:#0f2744;padding:20px 24px;border-radius:8px 8px 0 0">
            <h2 style="color:#FFD500;margin:0">New Booking Request</h2>
            <p style="color:#fff;margin:4px 0 0;font-size:14px">SriRam Travels Website</p>
          </div>
          <div style="background:#f9f9f9;padding:24px;border:1px solid #e0e0e0;border-radius:0 0 8px 8px">
            <table style="width:100%;border-collapse:collapse;font-size:14px">
              <tr><td style="padding:8px 0;color:#666;width:130px;font-weight:600">Name</td><td style="padding:8px 0;color:#111">${name}</td></tr>
              <tr><td style="padding:8px 0;color:#666;font-weight:600">Email</td><td style="padding:8px 0"><a href="mailto:${email}" style="color:#0f2744">${email}</a></td></tr>
              <tr><td style="padding:8px 0;color:#666;font-weight:600">Phone</td><td style="padding:8px 0"><a href="tel:${phone}" style="color:#0f2744">${phone}</a></td></tr>
              <tr><td style="padding:8px 0;color:#666;font-weight:600">Destination</td><td style="padding:8px 0;color:#111">${destination || "—"}</td></tr>
              <tr><td style="padding:8px 0;color:#666;font-weight:600">Travel Date</td><td style="padding:8px 0;color:#111">${travelDate || "—"}</td></tr>
              <tr><td style="padding:8px 0;color:#666;font-weight:600">Travelers</td><td style="padding:8px 0;color:#111">${travelers || "—"}</td></tr>
              <tr><td style="padding:8px 0;color:#666;font-weight:600;vertical-align:top">Message</td><td style="padding:8px 0;color:#111">${message || "—"}</td></tr>
            </table>
          </div>
        </div>`,
    });

    // ── Auto-reply to customer ──
    await transporter.sendMail({
      from: `"SriRam Travels" <${process.env.SMTP_USER}>`,
      to: email,
      subject: `We received your request — ${destination || "Holiday Package"}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px">
          <div style="background:#0f2744;padding:20px 24px;border-radius:8px 8px 0 0">
            <h2 style="color:#FFD500;margin:0">SriRam Travels</h2>
            <p style="color:#fff;margin:4px 0 0;font-size:14px">Your journey begins here 🌍</p>
          </div>
          <div style="background:#fff;padding:24px;border:1px solid #e0e0e0;border-radius:0 0 8px 8px;font-size:14px;color:#333;line-height:1.7">
            <p>Dear <strong>${name}</strong>,</p>
            <p>Thank you for reaching out! We have received your enquiry for <strong>${destination || "your chosen holiday"}</strong>.</p>
            <p>Our travel expert will call you at <strong>${phone}</strong> within <strong>24 hours</strong> to discuss the itinerary and confirm your booking.</p>
            <div style="background:#f5f5f5;border-radius:8px;padding:16px;margin:20px 0">
              <strong style="color:#0f2744">Need immediate help?</strong><br/>
              📞 <a href="tel:18003135555" style="color:#0f2744;font-weight:700">1800-313-5555</a> (Toll Free, 24×7)
            </div>
            <p style="font-size:12px;color:#999">© ${new Date().getFullYear()} SriRam Travels, Mumbai, India.</p>
          </div>
        </div>`,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("SMTP error:", err);
    return NextResponse.json({ error: "Email failed." }, { status: 500 });
  }
}
