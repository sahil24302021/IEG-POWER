import { NextResponse } from 'next/server';

/**
 * POST /api/contact
 * Receives form data and sends it via Web3Forms.
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    const now = new Date();
    const timestamp = `${now.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })} at ${now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true })}`;

    // Send to Web3Forms with clean labeled fields
    const w3fResponse = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        access_key: 'c8e8cba8-cd28-4425-bc5f-336f096d0ee1',
        subject: `New ${subject} Inquiry from ${name}`,
        from_name: `${name} via IEG Website`,
        replyto: email,
        name: name,
        email: email,
        phone: phone || 'Not provided',
        inquiry_type: subject,
        message: message,
        submitted_at: timestamp,
        source: 'iegautopower.com Contact Page',
      }),
    });

    const data = await w3fResponse.json();

    if (data.success) {
      return NextResponse.json({ success: true });
    }

    return NextResponse.json(
      { success: false, error: data.message || 'Failed to send.' },
      { status: 500 }
    );
  } catch (err: unknown) {
    console.error('Contact API error:', err);
    return NextResponse.json(
      { success: false, error: 'Server error. Please try again.' },
      { status: 500 }
    );
  }
}
