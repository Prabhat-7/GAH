export const otpEmailTemplate = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Your OTP Code</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif; background-color: #f7f7f7;">
  <!-- Main Container -->
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f7f7f7; padding: 20px 0;">
    <tr>
      <td align="center">
        <!-- Email Content Wrapper -->
        <table width="100%" maxwidth="600" cellpadding="0" cellspacing="0" style="max-width: 600px; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); overflow: hidden;">
          
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg,rgb(102, 234, 214) 0%, #764ba2 100%); padding: 40px 20px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 600;">Verify Your Email</h1>
            </td>
          </tr>

          <!-- Body Content -->
          <tr>
            <td style="padding: 40px 30px;">
              <p style="margin: 0 0 24px 0; color: #333333; font-size: 16px; line-height: 1.5;">
                Hello,
              </p>
              
              <p style="margin: 0 0 32px 0; color: #666666; font-size: 14px; line-height: 1.6;">
                Verify your account. Use the following One-Time Password (OTP) to complete your verification:
              </p>

              <!-- OTP Code Box -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 32px;">
                <tr>
                  <td style="background-color: #f0f4ff; border-radius: 6px; padding: 24px; text-align: center;">
                    <p style="margin: 0; color: #667eea; font-size: 12px; font-weight: 500; letter-spacing: 2px; text-transform: uppercase;">Your OTP Code</p>
                    <p style="margin: 12px 0 0 0; color: #667eea; font-size: 36px; font-weight: 700; letter-spacing: 8px;">{{OTP_CODE}}</p>
                  </td>
                </tr>
              </table>

       
              <!-- Security Notice -->
              <p style="margin: 0 0 16px 0; color: #666666; font-size: 13px; line-height: 1.6;">
                <strong>Security Tip:</strong> Never share this code with anyone. We will never ask you for this code via email or phone.
              </p>

              <!-- Footer CTA -->
              <p style="margin: 24px 0 0 0; color: #999999; font-size: 12px; line-height: 1.5;">
                If you didn't request this code, you can safely ignore this email.
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f9f9f9; padding: 24px 30px; border-top: 1px solid #eeeeee; text-align: center;">
              <p style="margin: 0; color: #999999; font-size: 12px; line-height: 1.5;">
                © 2025 Your Girls Accessories Hub. All rights reserved.
              </p>
              <p style="margin: 8px 0 0 0; color: #bbbbbb; font-size: 11px;">
                If you have any questions, contact us at support@example.com
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
