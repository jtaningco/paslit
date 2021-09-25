import * as React from "react";
import {
    Container,
    Logo,
    Wrapper,
    Menu,
    Title,
    Section,
    Email,
    Links,
    Url,
    Icon
} from "./styles";

import logo from "./assets/logo.png";
import facebook from "./assets/facebook.png";
import twitter from "./assets/twitter.png";
import instagram from "./assets/instagram.png";

const Footer = () => (
    <Container>
        <Logo src={logo} />
        <Wrapper>
            <Menu>
                <Title>Partners</Title>
                <Section to="/partners#cci">CCI Partners</Section>
            </Menu>
            <Menu>
                <Title>Agenda</Title>
                <Section to="/agenda#read">Read CA</Section>
                <Section to="/agenda#org">Org Partners</Section>
            </Menu>
            <Menu className="contact">
                <Title>Contact Us</Title>
                <Email href="mailto:paslitofficial@gmail.com">paslitofficial@gmail.com</Email>
                <Links>
                    <Url href="https://www.facebook.com/PaslitPH" target="_blank" rel="noreferrer"><Icon src={facebook} /></Url>
                    <Url href="https://twitter.com/PaslitPH" target="_blank" rel="noreferrer"><Icon src={twitter} /></Url>
                    <Url href="https://www.instagram.com/paslitofficial/" target="_blank" rel="noreferrer"><Icon src={instagram} /></Url>
                </Links>
            </Menu>
        </Wrapper>
    </Container>
)

export default Footer;