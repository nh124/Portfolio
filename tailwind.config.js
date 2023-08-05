/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
      mono: [
        "ui-monospace",
        "SFMono-Regular",
        "Menlo",
        "Monaco",
        "Consolas",
        "Liberation Mono",
        "Courier New",
        "monospace",
      ],
    },
    extend: {
      animation: {
        typing: "typing 2s steps(14), blink 0.1s infinite",
        spinning: "spin 5s linear infinite",
      },
      keyframes: {
        typing: {
          from: { width: "0" },
          to: { width: "14ch" },
        },
        blink: {
          from: { borderColor: "transparent" },
          to: { borderColor: "white" },
        },
        spinning: {
          from: { transform: "rotate( 0deg)" },
          to: { transform: "rotate( 360deg)" },
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
