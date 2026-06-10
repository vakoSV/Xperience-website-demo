import React from "react";

// Inline filled SVG icons matching the Xperience design handoff.
export function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M13.5 22v-8h2.7l.4-3.2h-3.1V8.7c0-.9.3-1.6 1.6-1.6h1.7V4.2c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.4H7.4V14h2.7v8h3.4z" />
    </svg>
  );
}

export function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M4.98 3.5A2.49 2.49 0 0 0 2.5 6c0 1.38 1.1 2.5 2.45 2.5h.03A2.49 2.49 0 0 0 7.46 6a2.49 2.49 0 0 0-2.48-2.5zM2.9 10h4.2v11.5H2.9V10zm6.6 0h4v1.6h.06c.56-1 1.93-2.1 3.97-2.1 4.25 0 5.03 2.7 5.03 6.2v5.8h-4.2v-5.1c0-1.2 0-2.8-1.78-2.8-1.78 0-2.05 1.3-2.05 2.7v5.2H9.5V10z" />
    </svg>
  );
}

export function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M12 4.3c2.5 0 2.8 0 3.8.06 2.4.1 3.5 1.2 3.6 3.6.05 1 .06 1.3.06 3.8s0 2.8-.06 3.8c-.1 2.4-1.2 3.5-3.6 3.6-1 .05-1.3.06-3.8.06s-2.8 0-3.8-.06c-2.4-.1-3.5-1.2-3.6-3.6-.05-1-.06-1.3-.06-3.8s0-2.8.06-3.8c.1-2.4 1.2-3.5 3.6-3.6 1-.05 1.3-.06 3.8-.06zM12 2.5c-2.6 0-2.9 0-3.9.06-3.3.15-5 1.9-5.2 5.2-.05 1-.06 1.3-.06 3.9s0 2.9.06 3.9c.15 3.3 1.9 5 5.2 5.2 1 .05 1.3.06 3.9.06s2.9 0 3.9-.06c3.3-.15 5-1.9 5.2-5.2.05-1 .06-1.3.06-3.9s0-2.9-.06-3.9c-.15-3.3-1.9-5-5.2-5.2-1-.05-1.3-.06-3.9-.06zm0 4.6a4.9 4.9 0 1 0 0 9.8 4.9 4.9 0 0 0 0-9.8zm0 8a3.1 3.1 0 1 1 0-6.2 3.1 3.1 0 0 1 0 6.2zm5.1-8.3a1.14 1.14 0 1 0 0-2.3 1.14 1.14 0 0 0 0 2.3z" />
    </svg>
  );
}

export function YoutubeIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M21.6 7.2a2.5 2.5 0 0 0-1.76-1.77C18.25 5 12 5 12 5s-6.25 0-7.84.43A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.76 1.77C5.75 19 12 19 12 19s6.25 0 7.84-.43a2.5 2.5 0 0 0 1.76-1.77A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8zM10 15.2V8.8L15.5 12 10 15.2z" />
    </svg>
  );
}

export function ChatBubbleIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M12 3C6.9 3 3 6.5 3 11c0 2.3 1 4.3 2.7 5.8-.1 1-.5 2.4-1.6 3.5 0 0 2.6-.2 4.6-1.6 1 .3 2.1.4 3.3.4 5.1 0 9-3.6 9-8.1S17.1 3 12 3z" />
    </svg>
  );
}

export const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com", Icon: FacebookIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com", Icon: LinkedinIcon },
  { label: "Instagram", href: "https://www.instagram.com", Icon: InstagramIcon },
  { label: "YouTube", href: "https://www.youtube.com", Icon: YoutubeIcon },
];
