import { EmailTemplate } from "@/components/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req:Request) {
    try {
      const formData=await req.json();
      const { data, error } = await resend.emails.send({
        from: "From-Portfolio <onboarding@resend.dev>",
        to: process.env.RESEND_RECEIVER_EMAIL!,
        subject: `New Contact Form Submission from ${formData.name}`,
        react: EmailTemplate({ ...formData }),
      });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
