# Google Sheets Integration Setup Guide

Follow these steps to connect your contact forms to a Google Sheet and enable automated email replies.

## 1. Create a Google Sheet
- Create a new Google Sheet.
- Rename the first tab to `Form Submissions`.
- In **Row 1**, add the following headers:
  - `Date`
  - `Name`
  - `Email`
  - `Phone`
  - `Message`
  - `Type`

## 2. Setup Google Apps Script
- In your Google Sheet, go to **Extensions** > **Apps Script**.
- Delete any existing code and paste the following script:

```javascript
/**
 * Google Apps Script for Infra Nest IT Form Submissions
 * Saves data to sheet and sends an auto-reply email.
 */

function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Form Submissions");
  var data = JSON.parse(e.postData.contents);
  
  // 1. Save data to the sheet
  sheet.appendRow([
    new Date(),
    data.name || data.user_name || "",
    data.email || data.user_email || "",
    data.phone || data.contact_number || "",
    data.message || "",
    data.form_type || "Contact"
  ]);
  
  // 2. Send Auto-Reply Email
  var userEmail = data.email || data.user_email;
  var userName = data.name || data.user_name || "there";
  
  if (userEmail) {
    sendAutoReply(userEmail, userName);
  }
  
  return ContentService.createTextOutput("Success").setMimeType(ContentService.MimeType.TEXT);
}

function sendAutoReply(email, name) {
  var subject = "Thank you for contacting Infra Nest IT";
  var htmlBody = `
    <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
      <h2 style="color: #0ea5e9;">Hello ${name},</h2>
      <p>Thank you for reaching out to <strong>Infra Nest IT</strong>. We have received your message and our team is already reviewing your request.</p>
      <p>One of our infrastructure experts will get back to you within <strong>24 hours</strong> to discuss how we can assist you with your project.</p>
      <br>
      <p>Best regards,</p>
      <p><strong>The Infra Nest IT Team</strong><br>
      <a href="mailto:contact.infranestit@gmail.com">contact.infranestit@gmail.com</a></p>
      <hr style="border: none; border-top: 1px solid #eee;">
      <p style="font-size: 0.8em; color: #888;">This is an automated response. Please do not reply directly to this email unless specifically requested.</p>
    </div>
  `;
  
  MailApp.sendEmail({
    to: email,
    subject: subject,
    htmlBody: htmlBody
  });
}
```

## 3. Deploy as a Web App
- Click **Deploy** > **New Deployment**.
- Select type: **Web App**.
- Description: `Infra Nest IT Backend`.
- Execute as: **Me**.
- Who has access: **Anyone**.
- Click **Deploy** and authorize the script.
- **Copy the Web App URL.**

## 4. Add Environment Variable
- In Replit, go to the **Secrets** tab (or `.env` file).
- Add a new secret:
  - Key: `VITE_GOOGLE_SCRIPT_URL`
  - Value: `[PASTE_THE_URL_YOU_COPIED_HERE]`
