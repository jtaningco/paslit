// DEPENDENCIES
import * as React from "react";

// COMPONENTS
// import Layout from "../../components/Layout";
import Hero from "../../components/Hero";
import Images from "./components/Images";
import Join from "./components/Join";
import CoSignatories from "./components/CoSignatories";

// ASSETS
import one from "./assets/1.png"
import two from "./assets/2.png"
import three from "./assets/3.png"
import four from "./assets/4.png"
import five from "./assets/5.png"
import six from "./assets/6.png"
import tugon from "./assets/tugon.png"
import youthForSafety from "./assets/youth-for-safety.png"
import youthVoicesCount from "./assets/youth-voices-count.png"
import cptcsa from "./assets/cpt-csa.png"
import teamAguhon from "./assets/team-aguhon.png"
import kaagapay from "./assets/kaagapay.png"

const images = [
    one,
    two,
    three,
    four,
    five,
    six
]

const cosignatoriesData = [
    {
        name: "TUGON Ateneo",
        image: tugon,
        link: "https://www.facebook.com/TugonAteneo/"
    },
    {
        name: "Youth 4 Safety",
        image: youthForSafety,
        link: "https://www.facebook.com/youth4safetyPH/"
    },
    {
        name: "Youth Voices Count",
        image: youthVoicesCount,
        link: "https://www.facebook.com/youthvoicescount/"
    },
    {
        name: "CPT CSA",
        image: cptcsa,
        link: "https://www.facebook.com/CPTCSA.org"
    },
    {
        name: "Team Aguhon",
        image: teamAguhon,
        link: "https://www.facebook.com/TeamAguhon/"
    },
    {
        name: "Ka-agapay Foundation",
        image: kaagapay,
        link: "https://www.facebook.com/KaAgapayFoundationPH"
    },
]

const Agenda = () => (
    <>
        <Hero 
            backgroundColor="#FFE4C0"
            title="Comprehensive Agenda"
            description="Paslit's Comprehensive Agenda is a statement that contains a set of concrete and actionable policy proposals which aim to foster a brighter, safer, and more loving future for abandoned, neglected, and orphaned children (ANOCs)."
        />
        <Images images={images} />
        <Join read="https://drive.google.com/file/d/1cTTdXq5FlrCRjiIegPh2xCH0cqNmMRHx/view" cosign="https://bit.ly/PaslitCA" />
        <CoSignatories partners={cosignatoriesData} />
    </>
)

export default Agenda;