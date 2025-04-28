import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, message } = body;

    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { message: "Données manquantes." },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: process.env.RESEND_MAIL_FROM,
      to: process.env.RESEND_MAIL_TO,
      subject: "ADR formulaire de Contact",
      html: `<h1>${name} vous a contacté</h1>
      <p>Email: ${email}</p>
      <p>Tél: ${phone}</p>
      <p>Message: ${message}</p>`,
    });

    return NextResponse.json(
      { message: "Formulaire envoyé avec succès" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Erreur lors de l'envoi du formulaire" },
      { status: 500 }
    );
  }
}
