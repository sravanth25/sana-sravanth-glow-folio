import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface InquiryRequest {
  inquiryType: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  website?: string;
  goals?: string;
  budget?: string;
  timeline?: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const data: InquiryRequest = await req.json();
    
    console.log("Received inquiry:", JSON.stringify(data, null, 2));

    // Build email content
    let emailContent = `
      <h2>New ${data.inquiryType} Inquiry</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
    `;

    if (data.phone) emailContent += `<p><strong>Phone:</strong> ${data.phone}</p>`;
    if (data.company) emailContent += `<p><strong>Company:</strong> ${data.company}</p>`;
    if (data.website) emailContent += `<p><strong>Website:</strong> ${data.website}</p>`;
    if (data.goals) emailContent += `<p><strong>Goals:</strong> ${data.goals}</p>`;
    if (data.budget) emailContent += `<p><strong>Budget:</strong> ${data.budget}</p>`;
    if (data.timeline) emailContent += `<p><strong>Timeline:</strong> ${data.timeline}</p>`;

    console.log("Attempting to send email...");

    const emailResponse = await resend.emails.send({
      from: "Portfolio Inquiry <onboarding@resend.dev>",
      to: ["sanasravanth25@gmail.com"],
      subject: `New ${data.inquiryType} Inquiry from ${data.name}`,
      html: emailContent,
    });

    console.log("Email sent successfully. Response:", JSON.stringify(emailResponse, null, 2));

    return new Response(JSON.stringify({ success: true, message: "Email sent successfully" }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-inquiry-email function:", error.message);
    console.error("Stack trace:", error.stack);
    return new Response(
      JSON.stringify({ error: "Failed to send email.", details: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
