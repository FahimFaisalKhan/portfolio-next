// CSS IMPORTS

import "/styles/global.scss";
// import "/styles/_variables.scss";
// import "/styles/_site_variables.scss";
// import "/styles/mixins.sass";
// import "/styles/home.scss";
import "styles/all_modules.scss";
import { Arizonia, Ubuntu_Mono, Chakra_Petch } from "next/font/google";
import Navbar from "./components/shared/Navbar/Navbar";

// FONTS

const ubuntuMono = Ubuntu_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-ubuntom",
  weight: ["400", "700"],
});
const arizonia = Arizonia({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-arizonia",
  weight: ["400"],
});
const chakraPetch = Chakra_Petch({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-chakrap",
  weight: ["600", "700"],
});

//META
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

//COMPONENT
export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="system"
      className={` ${chakraPetch.variable} ${arizonia.variable} ${ubuntuMono.variable}`}
    >
      <body>
        <Navbar />
        <main style={{ background: "#0000FF", height: "100vh" }}>
          {" "}
          {children}
        </main>
      </body>
    </html>
  );
}
