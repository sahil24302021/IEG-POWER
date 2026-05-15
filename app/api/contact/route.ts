import { NextResponse } from 'next/server';

/**
 * POST /api/contact
 * Receives form data and sends it via Web3Forms.
 * Uses the server-side route to construct the submission properly.
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

    const timestamp = new Date().toLocaleString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });

    // Send to Web3Forms with clean formatted fields
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        access_key: 'c8e8cba8-cd28-4425-bc5f-336f096d0ee1',
        subject: `🔔 New ${subject} Inquiry — ${name}`,
        from_name: `${name} via IEG Website`,
        replyto: email,
        // Clean structured fields — Web3Forms displays these as a formatted table
        '👤 Full Name': name,
        '📧 Email': email,
        '📱 Mobile': phone || 'Not provided',
        '📋 Inquiry Type': subject,
        '💬 Message': message,
        '🕐 Submitted At': timestamp,
        '🌐 Source': 'iegautopower.com — Contact Page',
      }),
    });

    const data = await response.json();

    if (data.success) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json(
        { success: false, error: 'Failed to send message.' },
        { status: 500 }
      );
    }
  } catch {
    return NextResponse.json(
      { success: false, error: 'Server error. Please try again.' },
      { status: 500 }
    );
  }
}
