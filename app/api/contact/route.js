export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return Response.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const response = await fetch("https://next-api.useplunk.com/v1/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.PLUNK_API_KEY}`,
      },
      body: JSON.stringify({
        to: "hello@codecret.com",
        from: "hello@codecret.com",
        subject: `Contact Form: ${name}`,
        body: `<h2>New Contact Form Submission</h2>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Message:</strong></p>
<p>${message}</p>`,
        reply: email,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error("Plunk API error:", error);
      return Response.json(
        { error: "Failed to send email." },
        { status: 500 }
      );
    }

    return Response.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return Response.json({ error: "Internal server error." }, { status: 500 });
  }
}
