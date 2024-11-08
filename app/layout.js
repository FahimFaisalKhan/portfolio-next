// CSS IMPORTS

import "/styles/global.scss"
// import "/styles/_variables.scss";
// import "/styles/_site_variables.scss";
// import "/styles/mixins.sass";
// import "/styles/home.scss";
import "/styles/all_modules.scss"
import {
    Arizonia,
    Ubuntu_Mono,
    Chakra_Petch,
    Montserrat,
} from "next/font/google"
import Navbar from "./components/shared/Navbar/Navbar"
import StoreProvider from "./store-provider"
import { getData } from "@/utils/server/getData"
import ReduxInitialData from "./wrapper-data"
import ScrollBar from "./components/shared/ScrollBar/ScrollBar"
import Wrapper from "./wrapper-main"
import Footer from "./components/shared/Footer/Footer"

// FONTS

const ubuntuMono = Ubuntu_Mono({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-ubuntom",
    weight: ["400", "700"],
})
const arizonia = Arizonia({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-arizonia",
    weight: ["400"],
})
const chakraPetch = Chakra_Petch({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-chakrap",
    weight: ["600", "700"],
})
const mons = Montserrat({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-mons",
    weight: ["600", "700"],
})

//META
export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
}

//COMPONENT
export default async function RootLayout({ children }) {
    return (
        <html
            lang="en"
            data-theme="system"
            className={` ${chakraPetch.variable} ${arizonia.variable} ${ubuntuMono.variable} ${mons.variable} $`}
        >
            <StoreProvider>
                <ReduxInitialData data={{ thiData: "come form getch" }} />
                <body
                    id="main-body"
                    className={`hide-scrollbar  relative  ${ubuntuMono.className}`}
                >
                    <ScrollBar />
                    <Navbar />

                    <Wrapper>
                        <main>
                            {children}
                            <Footer />
                        </main>
                    </Wrapper>
                </body>
            </StoreProvider>
        </html>
    )
}
