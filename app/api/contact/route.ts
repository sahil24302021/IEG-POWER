import { Resend } from 'resend';
import { NextResponse } from 'next/server';

// Force dynamic — never pre-render this route
export const dynamic = 'force-dynamic';

/**
 * POST /api/contact
 * Sends a premium branded HTML email via Resend (3,000 free/month).
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    const timestamp = new Date().toLocaleString('en-IN', {
      day: '2-digit', month: 'short', year: 'numeric',
      hour: '2-digit', minute: '2-digit', hour12: true,
      timeZone: 'Asia/Kolkata',
    });

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { error } = await resend.emails.send({
      from: 'IEG Website <onboarding@resend.dev>',
      to: ['lilaajay07@gmail.com'], // TODO: Change to legautopowerltd@gmail.com after domain verification
      replyTo: email,
      subject: `🔔 New ${subject} Inquiry — ${name}`,
      html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
<body style="margin: 0; padding: 0; background-color: #080F1E; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #080F1E; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="background: linear-gradient(180deg, #0B1526 0%, #0E1B33 100%); border-radius: 16px; overflow: hidden; border: 1px solid rgba(212,175,55,0.12);">
          
          <!-- HEADER -->
          <tr>
            <td style="padding: 32px 40px 24px; border-bottom: 1px solid rgba(212,175,55,0.08);">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td width="48" valign="middle">
                    <div style="width: 44px; height: 44px; border-radius: 12px; background: rgba(212,175,55,0.06); border: 1px solid rgba(212,175,55,0.12); text-align: center; line-height: 44px; font-size: 22px;">⚡</div>
                  </td>
                  <td style="padding-left: 16px;" valign="middle">
                    <div style="font-weight: 700; font-size: 17px; color: #F5F5F0; letter-spacing: -0.01em;">IEG Auto Powers Ltd</div>
                    <div style="font-size: 11px; color: #5E7A99; letter-spacing: 0.08em; margin-top: 3px; text-transform: uppercase;">New Website Inquiry</div>
                  </td>
                  <td align="right" valign="middle">
                    <span style="display: inline-block; padding: 5px 14px; border-radius: 20px; background: rgba(212,175,55,0.06); border: 1px solid rgba(212,175,55,0.12); color: #D4AF37; font-size: 11px; font-weight: 600; letter-spacing: 0.05em; text-transform: uppercase;">${subject}</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- SENDER INFO -->
          <tr>
            <td style="padding: 28px 40px 0;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background: rgba(255,255,255,0.02); border-radius: 12px; border: 1px solid rgba(255,255,255,0.04);">
                <tr>
                  <td style="padding: 22px 26px;">
                    <div style="font-size: 10px; color: #4A6580; letter-spacing: 0.14em; text-transform: uppercase; margin-bottom: 12px; font-weight: 600;">Contact Details</div>
                    
                    <div style="font-size: 20px; font-weight: 700; color: #F5F5F0; margin-bottom: 6px; letter-spacing: -0.01em;">${name}</div>
                    
                    <table role="presentation" cellpadding="0" cellspacing="0" style="margin-top: 10px;">
                      <tr>
                        <td style="padding: 4px 0;">
                          <span style="color: #4A6580; font-size: 13px; display: inline-block; width: 24px;">📧</span>
                          <a href="mailto:${email}" style="color: #7EB8E0; font-size: 14px; text-decoration: none;">${email}</a>
                        </td>
                      </tr>
                      ${phone ? `<tr>
                        <td style="padding: 4px 0;">
                          <span style="color: #4A6580; font-size: 13px; display: inline-block; width: 24px;">📱</span>
                          <span style="color: #94A3B8; font-size: 14px;">${phone}</span>
                        </td>
                      </tr>` : ''}
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- MESSAGE -->
          <tr>
            <td style="padding: 20px 40px 0;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background: rgba(255,255,255,0.02); border-radius: 12px; border: 1px solid rgba(255,255,255,0.04);">
                <tr>
                  <td style="padding: 22px 26px;">
                    <div style="font-size: 10px; color: #4A6580; letter-spacing: 0.14em; text-transform: uppercase; margin-bottom: 14px; font-weight: 600;">Message</div>
                    <div style="font-size: 15px; color: #E2E8F0; line-height: 1.75;">${message.replace(/\n/g, '<br/>')}</div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- REPLY BUTTON -->
          <tr>
            <td style="padding: 28px 40px 0;" align="center">
              <a href="mailto:${email}?subject=Re: Your ${subject} inquiry to IEG Auto Powers" 
                 style="display: inline-block; padding: 14px 36px; background: linear-gradient(135deg, #D4AF37, #B8941E); color: #0B1526; font-weight: 700; font-size: 14px; text-decoration: none; border-radius: 10px; letter-spacing: 0.01em;">
                ↩ Reply to ${name.split(' ')[0]}
              </a>
            </td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td style="padding: 28px 40px 24px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-top: 1px solid rgba(255,255,255,0.04); padding-top: 20px;">
                <tr>
                  <td>
                    <div style="font-size: 11px; color: #3D5A73; line-height: 1.7;">
                      Sent from <span style="color: #5E7A99;">iegautopower.com</span> contact form<br/>
                      ${timestamp} IST
                    </div>
                  </td>
                  <td align="right" valign="bottom">
                    <div style="font-size: 10px; color: #2D4A63; letter-spacing: 0.05em;">POWERED BY IEG</div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    console.error('Contact API error:', err);
    return NextResponse.json(
      { success: false, error: 'Server error. Please try again.' },
      { status: 500 }
    );
  }
}
