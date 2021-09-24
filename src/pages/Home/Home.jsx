// DEPENDENCIES
import * as React from "react";

// COMPONENTS
// import Layout from "../../components/Layout";
import Hero from "../../components/Hero";
import About from "./components/About";
import Principles from "./components/Principles";
import Pillars from "./components/Pillars";

// ASSETS
import hero from "./assets/hero.png";

const Home = () => (
    <>
        <Hero 
            backgroundImage={hero}
            title="Para sa Bawat Paslit"
            description="Join us in this advocacy of protecting ANOCS"
            button="Read our Comprehensive Agenda"
            buttonLink="/agenda"
        />
        <About 
            title="About Paslit"
            description="Paslit is a Filipino youth-led policy advocacy organization for abandoned, neglected, and orphaned children (ANOCs). Established in August 2020, it is composed of more than one hundred students and young professionals from various fields and different parts of the country, working together to contribute to building a better future for more than 1.8 million Filipino children who are without sufficient parental care."
        />
        <Principles
            vision="We envision a country where all Filipino kids are protected, cared for, and given paths to normal and empowered lives."
            mission="We in Paslit work for policy change for abandoned, neglected, and orphaned children in the Philippines."
        />
        <Pillars />
    </>
)

export default Home;