function sendResponse(
  data,
  status = 200,
  headers = {
    "Content-Type": "application/json",
  }
) {
  return new Response(typeof data === "object" ? JSON.stringify(data) : data, {
    status,
    headers: {
      ...headers,
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,HEAD,POST,OPTIONS",
      "Access-Control-Allow-Headers": "*",
    },
  });
}

export async function onRequestGet(request) {
  return sendResponse("Nothin' to see here, move along!", 403, {
    "Content-Type": "text/plain",
  });
}

export async function onRequestOptions(request) {
  return sendResponse(null, 200, {
    "Content-Type": "text/plain",
  });
}

export async function onRequestPost(request) {
  try {
    const { name, email, msg, gRecaptchaResponse } = await request.request.json();

    if (!name || !email || !msg || !gRecaptchaResponse) {
      return sendResponse({ error: "Input fields are not valid" }, 400);
    }

    const GOOGLE_RECAPTCHA_SECRET_KEY = await request.env.SIDDHESH_ME.get("GOOGLE_RECAPTCHA_SECRET_KEY");

    const recaptchaReq = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${GOOGLE_RECAPTCHA_SECRET_KEY}&response=${gRecaptchaResponse}`,
      { method: "POST" }
    );

    const recaptchaResp = await recaptchaReq.json();

    if (!recaptchaResp.success) {
      return sendResponse({ error: "Invalid recaptcha" }, 401);
    }

    const SENDGRID_API_KEY = await request.env.SIDDHESH_ME.get("SENDGRID_API_KEY");

    await fetch("https://api.sendgrid.com/v3/mail/send", {
      body: JSON.stringify({
        from: {
          email: "portfolio-contact@siddhesh.me",
        },
        personalizations: [
          {
            to: [
              {
                email: "hello@siddhesh.me",
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
        Authorization: `Bearer ${SENDGRID_API_KEY}`,
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    return sendResponse({ msg: "OK" }, 200);
  } catch (error) {
    return sendResponse(
      { error: "Internal server error", type: error?.name },
      500
    );
  }
}
