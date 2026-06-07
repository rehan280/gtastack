/** @type {import('tailwindcss').Config} */
import forms from "@tailwindcss/forms";
import containerQueries from "@tailwindcss/container-queries";

export default {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ff00bd",
        secondary: "#00eefc",
        tertiary: "#8b00ff",
        background: "#0a0a0c",
        surface: "#121215",
        "surface-container": "#1a1a1f",
        "surface-container-high": "#23232a",
        "on-surface": "#f0f0f5",
        "on-surface-variant": "#a0a0b0",
        outline: "#333340",
        "secondary-container": "#00eefc",
        "surface-variant": "#333340",
        success: "#00ff88",
      },
      borderRadius: {
        DEFAULT: "0.125rem",
        lg: "0.25rem",
        xl: "0.5rem",
        full: "0.75rem",
      },
      spacing: {
        "margin-mobile": "16px",
        "stack-lg": "48px",
        gutter: "24px",
        base: "8px",
        "stack-sm": "12px",
        "stack-md": "24px",
        "container-max": "1280px",
      },
      maxWidth: {
        shell: "1440px",
      },
      fontFamily: {
        "data-label": ["JetBrains Mono", "monospace"],
        "headline-lg": ["Inter", "sans-serif"],
        "stat-value": ["Inter", "sans-serif"],
        "headline-lg-mobile": ["Inter", "sans-serif"],
        "display-2xl": ["Inter", "sans-serif"],
        "body-md": ["Hanken Grotesk", "sans-serif"],
      },
      fontSize: {
        "data-label": [
          "14px",
          { lineHeight: "1.4", letterSpacing: "0.05em", fontWeight: "500" },
        ],
        "headline-lg": [
          "40px",
          { lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "800" },
        ],
        "stat-value": ["24px", { lineHeight: "1.2", fontWeight: "700" }],
        "headline-lg-mobile": ["32px", { lineHeight: "1.2", fontWeight: "800" }],
        "display-2xl": [
          "72px",
          { lineHeight: "1.1", letterSpacing: "-0.04em", fontWeight: "900" },
        ],
        "body-md": ["16px", { lineHeight: "1.6", fontWeight: "400" }],
      },
      boxShadow: {
        "glow-primary": "0 0 30px rgba(255,0,189,0.2)",
        "glow-secondary": "0 0 30px rgba(0,238,252,0.2)",
      },
    },
  },
  plugins: [forms, containerQueries],
};
