import { useEffect } from "react";

import AOS from "aos";
import "../assets/css/aos.css";

import Header from "./Header";
import Portfolio from "./Portfolio";
import Skill from "./Skill";
import Visual from "./Visual";
import Contact from "./Contact";
import Footer from "./Footer";
import Main from "./Main";


export default function Home() {

    useEffect(() => {
        AOS.init({
            duration: 1500
        });
    }, []);

    return (
        <div className="App">

            <Header />

            <Main>
                <Visual />
                <Skill />
                <Portfolio />
                <Contact />
            </Main>

            <Footer />

        </div>
    )

}

