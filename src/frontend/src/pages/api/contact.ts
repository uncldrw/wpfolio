import type { APIRoute } from 'astro';

interface ContactPayload {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export const POST: APIRoute = async ({ request }) => {
  let body: Partial<ContactPayload>;

  try {
    body = (await request.json()) as Partial<ContactPayload>;
  } catch {
    return new Response(JSON.stringify({ error: 'Ungültige Anfrage.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const { name, email, message, subject } = body;

  if (!name?.trim() || name.trim().length < 2) {
    return new Response(JSON.stringify({ error: 'Ungültiger Name.' }), {
      status: 422,
      headers: { 'Content-Type': 'application/json' },
    });
  }
  if (!email?.trim() || !isValidEmail(email)) {
    return new Response(JSON.stringify({ error: 'Ungültige E-Mail-Adresse.' }), {
      status: 422,
      headers: { 'Content-Type': 'application/json' },
    });
  }
  if (!message?.trim() || message.trim().length < 10) {
    return new Response(JSON.stringify({ error: 'Nachricht zu kurz (min. 10 Zeichen).' }), {
      status: 422,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const CMS_URL = import.meta.env.CMS_URL ?? 'http://localhost:3000';

  try {
    const res = await fetch(`${CMS_URL}/api/contact-submissions`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: name.trim(),
        email: email.trim(),
        subject: subject?.trim() ?? '',
        message: message.trim(),
      }),
    });

    if (!res.ok) {
      console.error('[contact] CMS responded with', res.status);
      // Still return success to avoid leaking CMS status
    }
  } catch (err) {
    console.error('[contact] Could not reach CMS:', err);
    // Graceful degradation: log but respond success
  }

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
