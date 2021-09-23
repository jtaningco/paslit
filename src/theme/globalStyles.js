import { createGlobalStyle } from "styled-components";

import openSans from "../assets/fonts/OpenSans-Regular.ttf"
import openSansBold from "../assets/fonts/OpenSans-SemiBold.ttf"
import spartan from "../assets/fonts/Spartan-Bold.ttf"
import spartanExtra from "../assets/fonts/Spartan-ExtraBold.ttf"
import spartanBlack from "../assets/fonts/Spartan-Black.ttf"

const GlobalStyle = createGlobalStyle`
    // import Spartan Bold (700), Spartan Black (900), and Open Sans Regular (400) fonts here
    @font-face {
        font-family: 'Open Sans';
        src: url(${openSans}) format('truetype');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'Open Sans';
        src: url(${openSansBold}) format('truetype');
        font-weight: 600;
        font-style: normal;
    }

    @font-face {
        font-family: 'Spartan';
        src: url(${spartan}) format('truetype');
        font-weight: 700;
        font-style: normal;
    }

    @font-face {
        font-family: 'Spartan';
        src: url(${spartanExtra}) format('truetype');
        font-weight: 800;
        font-style: normal;
    }

    @font-face {
        font-family: 'Spartan';
        src: url(${spartanBlack}) format('truetype');
        font-weight: 900;
        font-style: normal;
    }

    // initial CSS styles
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html,
    body {
        scroll-behavior: smooth;
        overflow-x: hidden;
    }

    a {
        text-decoration: none;
    }

    // design system
    :root {
        --paslit-pink: #EE446A;
        --paslit-blue: #242058;
        --paslit-cream: #FDD28F;
        --accent-blue:  #3C64B1;
        --background: #F4F6FB;

        --muted-dark: #373F41;
        --muted-light: #737B7D;
        --muted-lighter: #E2E5E6;
        --muted-white: #F8F8F8;

        --hard-radius: 0px;
        --soft-radius: 10px;

        --normal-drop-shadow: 0px 0px 20px rgba(20, 20, 20, 0.1);
        --hover-drop-shadow: 0px 5px 20px rgba(20, 20, 20, 0.15);
        --nav-drop-shadow: 0px 4px 8px rgba(20, 20, 20, 0.1);
        --footer-drop-shadow: 0px -4px 8px rgba(20, 20, 20, 0.1);

        --spartan-font: "Spartan", sans-serif;
        --open-sans-font: "Open Sans", sans-serif;
        }

    .hero-title {
        font-family: var(--spartan-font);
        font-weight: 900;
        font-size: 4rem;
        line-height: 4.5rem;
        color: var(--paslit-blue);
        text-align: center;
    }

    .hero-subtitle {
        font-family: var(--open-sans-font);
        font-weight: 600;
        font-size: 1.5rem;
        line-height: 2rem;
        color: var(--paslit-blue);
        text-align: center;
    }

    h1, .header {
        font-family: var(--spartan-font);
        font-size: 2rem;
        line-height: 2.5rem;
        color: var(--muted-dark);
    }

    h2, .subheader {
        font-family: var(--spartan-font);
        font-size: 1.5rem;
        line-height: 2rem;
        color: var(--muted-dark);
    }

    h3, .body-big {
        font-family: var(--open-sans-font);
        font-size: 1.25rem;
        line-height: 1.75rem;
        color: var(--muted-dark);
    }

    p, .body { 
        font-family: var(--open-sans-font);
        font-size: 1rem;
        line-height: 1.5rem;
        color: var(--muted-dark);
    }

    .subtitle { 
        font-family: var(--open-sans-font);
        font-size: 0.85rem;
        line-height: 1.35rem;
        color: var(--muted-dark);
    }

    .caption {
        font-family: var(--open-sans-font);
        font-size: 0.75rem;
        line-height: 1.25rem;
        color: var(--muted-dark);
    }

    @media only screen and (max-width: 1024px) {
        .hero-title {
            color: var(--paslit-blue);
            font-size: 3rem;
            line-height: 3.5rem;
        }
    }

    @media only screen and (max-width: 640px) {
        .hero-title {
            color: var(--paslit-blue);
            font-size: 2rem;
            line-height: 2.5rem;
        }
    
        .hero-subtitle {
            color: var(--paslit-blue);
            font-size: 1rem;
            line-height: 1.5rem;
        }
    }

    .full__width {
        min-width: 200px;
        width: 100%;
    }
`;

export default GlobalStyle;