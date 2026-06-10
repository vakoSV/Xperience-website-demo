import React from "react";

/**
 * Renders a hero/page title with its last word in the brand coral→sky gradient
 * (styled by `.sp-hero h1 em`). Single-word titles render fully in the gradient.
 * Same words as the source string — only the highlight changes.
 */
export function HeroTitle({ text }: { text: string }) {
  const words = text.trim().split(/\s+/);
  const last = words.pop() ?? text;
  const pre = words.join(" ");
  return (
    <>
      {pre ? pre + " " : ""}
      <em>{last}</em>
    </>
  );
}
