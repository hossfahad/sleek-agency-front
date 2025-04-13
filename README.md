# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/f9fc79d8-d61d-4a27-ba16-39dfc25c6c09

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/f9fc79d8-d61d-4a27-ba16-39dfc25c6c09) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/f9fc79d8-d61d-4a27-ba16-39dfc25c6c09) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes it is!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)

## Contact Form Setup

The contact form uses [FormSubmit.co](https://formsubmit.co/) to receive emails from the website. FormSubmit is a simple form endpoint service that forwards form submissions to your email address without requiring any backend code.

The form is already configured to send submissions to inquire@enhancedpoints.com.

Key features enabled:
- Custom subject line for incoming emails
- Disabled reCAPTCHA for smoother user experience
- Direct forwarding to inquire@enhancedpoints.com

When the site goes live, you'll receive a confirmation email from FormSubmit the first time someone submits the form. You'll need to confirm your email address to start receiving submissions.

## Building for Production

To build the site for production:

```bash
npm run build
```

## Deployment

The site can be deployed to any static site hosting service, like Netlify, Vercel, GitHub Pages, etc.
