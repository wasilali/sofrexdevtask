import type { Config } from "tailwindcss";
import  flowbite from "flowbite-react/tailwind";
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "form-pattern": "url('/form_bg.png')",
        "signup-pattern": "url('/signup_bg.png')",
        "blue-mini": "url('/bg_blue_min.png')",
        "brokage_icons": "url('/brokage_icons.png')",
        "brokage_icons_mobile": "url('/brokage_icons_mobile.png')",
        "track_icons": "url('/tract_your_icons.png')",
        "track_your_icons_mobile": "url('/track_your_icons_mobile.png')",
        
        "guardian_icons":"url('/guardian_icons.png')",
        "invest_report_icons": "url('/invest_report_icons.png')",
        "security_icons":"url('/security_icons.png')",
        "contact_icons":"url('/contact_icons.png')",
        


        
      },
      colors: {
        ocean:"#127398",
        bluishCyan: "#00ABE1",
        darkskyblue: "#3994E9",
        parisgreen: "#31CE5D",
        Orangeyyellow: "#FBBC12",
        greylight: "#F5FAFF",
        softpurple: "#9F73C2",
        pacificblue: "#009BCC",
        sunglow:"#FFC730"
      }
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
};
export default config;
