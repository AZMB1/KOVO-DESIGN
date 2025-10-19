import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "var(--bg-primary)",
          secondary: "var(--bg-secondary)",
          surface: "var(--bg-surface)",
        },
        accent: {
          primary: "var(--accent-primary)",
          secondary: "var(--accent-secondary)",
          interactive: "var(--accent-interactive)",
        },
        text: {
          heading: "var(--text-heading)",
          body: "var(--text-body)",
          muted: "var(--text-muted)",
        },
        success: "var(--success)",
        warning: "var(--warning)",
        error: "var(--error)",
      },
      fontFamily: {
        heading: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      spacing: {
        "18": "4.5rem",
        "30": "7.5rem",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      transitionDuration: {
        fast: "150ms",
        medium: "300ms",
        slow: "500ms",
      },
    },
  },
  plugins: [],
}

export default config
