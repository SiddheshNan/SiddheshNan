function sendResponse(
  data,
  status = 200,
  headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,HEAD,POST,OPTIONS",
    "Access-Control-Allow-Headers": "*",
  }
) {
  return new Response(typeof data === "object" ? JSON.stringify(data) : data, {
    status,
    headers,
  });
}

export async function onRequestGet(request) {
  return sendResponse("Nothin' to see here, move along!", 403, {
    "Content-Type": "text/plain",
  });
}

export async function onRequestPost(request) {
  try {
    const RecaptchaSecret = await request.env.SIDDHESH_ME.get(
      "GOOGLE_RECAPTCHA_SIDDHESH_ME_SECRET_KEY"
    );
    const SendgridApiKey = await request.env.SIDDHESH_ME.get(
      "SENDGRID_SIDDHESH_ME_API_KEY"
    );

    const { name, email, msg, gRecaptchaResponse } = await request.json();

    if (!name || !email || !msg || !gRecaptchaResponse) {
      return sendResponse({ error: "Input fields are not valid" }, 400);
    }

    const recaptchaReq = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${RecaptchaSecret}&response=${gRecaptchaResponse}`,

      {
        method: "POST",
      }
    );

    const recaptchaResp = await recaptchaReq.json();

    if (!recaptchaResp.success) {
      return sendResponse({ error: "Invalid recaptcha" }, 401);
    }

    await fetch("https://api.sendgrid.com/v3/mail/send", {
      body: JSON.stringify({
        from: {
          email: "portfolio-contact@siddhesh.me",
        },
        personalizations: [
          {
            to: [
              {
                email: "sid.nan23@gmail.com",
              },
            ],
            subject: "[siddhesh.me] New contact form enquiry",
          },
        ],
        content: [
          {
            type: "text/plain",
            value: `Name: ${name}\nEmail: ${email}\nMessage: ${msg}`,
          },
        ],
      }),
      headers: {
        Authorization: `Bearer ${SendgridApiKey}`,
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    return sendResponse({ msg: "OK" }, 200);
  } catch (error) {
    return sendResponse({ error: "Internal server error" }, 500);
  }
}
