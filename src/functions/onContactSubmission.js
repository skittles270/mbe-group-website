Deno.serve(async (req) => {
  try {
    const { data } = await req.json();
    const { name, email, company, message } = data;
    const apiKey = Deno.env.get('RESEND_API_KEY');
    const emailBody = `Name: ${name}\nEmail: ${email}\nCompany: ${company || 'N/A'}\n\nMessage:\n${message}`;
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${apiKey}` },
      body: JSON.stringify({ from: 'MBE Group <onboarding@resend.dev>', to: 'info@mobihero.de', subject: `New Contact Form Submission from ${name}`, text: emailBody }),
    });
    if (!response.ok) { const error = await response.json(); throw new Error(error.message); }
    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});