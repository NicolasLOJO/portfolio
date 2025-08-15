import { EmailTemplate } from "@/components/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.EMAIL_FROM;
const toEmail = process.env.EMAIL_TO;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log(body);
    const { name, email, message } = body;

    if (!fromEmail || !toEmail) {
      return Response.json(
        { error: "Les adresses d'envoi ne sont pas configurées." },
        { status: 500 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      subject: `Nouveau message de ${name}`,
      react: await EmailTemplate({ name, email, message }),
      text: message,
    });

    if (error) {
      console.error(error);
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    console.error(error);
    return Response.json({ error }, { status: 500 });
  }
}
