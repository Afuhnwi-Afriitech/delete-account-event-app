// app/delete-account/page.tsx
//
// Account deletion request page for AIO Events App.
// Satisfies Google Play's "account deletion" requirement by giving users
// a public URL that explains how to request deletion of their account
// and associated data.

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Delete Your Account | AIO Events App",
  description:
    "How to request deletion of your AIO Events App account and associated data.",
};

const CONTACT_EMAILS = ["aio@africaninsurance.net", "lisette@afrricaninsurance.net"];
const SUBJECT = encodeURIComponent("Account Deletion Request - AIO Events App");
const BODY = encodeURIComponent(
  "Hello AIO team,\n\nI would like to request deletion of my AIO Events App account and associated personal data.\n\nAccount email: \nFull name: \n\nThank you."
);

export default function DeleteAccountPage() {
  return (
    <main
      style={{
        maxWidth: 640,
        margin: "0 auto",
        padding: "48px 20px",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
        lineHeight: 1.6,
        color: "#1a1a1a",
      }}
    >
      <h1 style={{ fontSize: 28, marginBottom: 8 }}>Delete Your Account</h1>
      <p style={{ color: "#555", marginBottom: 32 }}>AIO Events App</p>

      <p>
        If you would like to delete your AIO Events App account and the
        personal data associated with it, please send a request from the
        email address linked to your account to one of the addresses below.
      </p>

      <div
        style={{
          background: "#f6f6f8",
          borderRadius: 8,
          padding: "20px 24px",
          margin: "24px 0",
        }}
      >
        <p style={{ margin: "0 0 8px", fontWeight: 600 }}>Contact us at:</p>
        {CONTACT_EMAILS.map((email) => (
          <p key={email} style={{ margin: "4px 0" }}>
            <a href={`mailto:${email}?subject=${SUBJECT}&body=${BODY}`}>
              {email}
            </a>
          </p>
        ))}
      </div>

      <h2 style={{ fontSize: 20, marginTop: 32 }}>What to include</h2>
      <ul>
        <li>The email address associated with your AIO Events App account</li>
        <li>Your full name</li>
        <li>A statement that you want your account and data deleted</li>
      </ul>

      <h2 style={{ fontSize: 20, marginTop: 32 }}>What gets deleted</h2>
      <p>
        Once we verify your request, we will delete your account,
        registration and event participation data, networking/chat history,
        and push notification tokens, except where we are required to retain
        certain information to comply with legal obligations, resolve
        disputes, or enforce our agreements.
      </p>

      <h2 style={{ fontSize: 20, marginTop: 32 }}>How long it takes</h2>
      <p>
        We aim to process deletion requests within 30 days of verifying
        your identity.
      </p>

      <p style={{ marginTop: 32, color: "#555", fontSize: 14 }}>
        For more information about how we handle your data, see our{" "}
        <a href="https://privacy-policy-steel-rho.vercel.app">
          Privacy Policy
        </a>
        .
      </p>
    </main>
  );
}