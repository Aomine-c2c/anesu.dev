# Email JS Setup Guide

## Quick Setup (5 minutes)

### 1. Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email

### 2. Set Up Email Service

1. Go to "Email Services" in dashboard
2. Click "Add New Service"
3. Select your email provider (Gmail recommended)
4. Follow the prompts to connect your email
5. **Copy the Service ID** (looks like `service_xxxxxxx`)

### 3. Create Email Template

1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template:

```
Subject: Portfolio Contact from {{from_name}}

You have a new message from your portfolio!

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
Sent from anesu.dev
```

4. **Copy the Template ID** (looks like `template_xxxxxxx`)

### 4. Get Public Key

1. Go to "Account" → "General"
2. Find "Public Key" section
3. **Copy your Public Key**

### 5. Add to Vercel Environment Variables

Go to your Vercel dashboard → Project Settings → Environment Variables and add:

- `NEXT_PUBLIC_EMAILJS_SERVICE_ID` = your_service_id
- `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` = your_template_id
- `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` = your_public_key

### 6. For Local Development

Create `.env.local` in your project root:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

**Note**: Don't commit `.env.local` to Git!

### 7. Test

1. Run `npm run dev`
2. Go to contact page
3. Fill out form and submit
4. Check your email inbox!

## Free Plan Limits

- 200 emails/month
- Perfect for portfolio contact forms
- No credit card required

## Troubleshooting

**Form not sending?**

- Check browser console for errors
- Verify environment variables are set
- Make sure you're using `NEXT_PUBLIC_` prefix
- Restart dev server after adding env vars

**Not receiving emails?**

- Check spam folder
- Verify email service is connected in EmailJS dashboard
- Test with EmailJS dashboard test feature first

## Done! 🎉

Your contact form is now functional. Visitors can reach you directly through your portfolio!
