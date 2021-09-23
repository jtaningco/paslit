// DEPENDENCIES
import React, { useState } from "react";

// COMPONENTS
import {
    Nav,
    NavLogo,
    Logo,
    NavLink,
    NavMenu,
    ButtonLink,
    MobileItem
} from "./styles";
import Button from "../Button/Button";
import Hamburger from 'hamburger-react'

// STYLES AND ASSETS
import logo from "./assets/logo-colored.png";

const Navbar = () => {
    const [isOpen, setOpen] = useState(false)

    return (
        <Nav>
            <NavLogo to="/">
                <Logo src={logo} />
            </NavLogo>
            <NavMenu className={isOpen ? "active" : ""}>
                <NavLink exact={true} activeClassName='is-active' to="/">
                    Home
                </NavLink>
                <NavLink activeClassName='is-active' to="/partners">
                    Partners
                </NavLink>
                <NavLink exact={true} activeClassName='is-active' to="/agenda">
                    Comprehensive Agenda
                </NavLink>
                <MobileItem className="button">
                    <ButtonLink href="mailto:paslitofficial@gmail.com">
                        <Button
                            variant="primary"
                            type="button"
                            label="Contact Us"
                        />
                    </ButtonLink>
                </MobileItem>
            </NavMenu>
            <ButtonLink href="mailto:paslitofficial@gmail.com">
                <Button
                    variant="primary"
                    type="button"
                    label="Contact Us"
                    className="navButton"
                />
            </ButtonLink>
            <MobileItem>
                <Hamburger toggled={isOpen} toggle={setOpen} className="navBurger" />
            </MobileItem>
        </Nav>
    )
}

export default Navbar;