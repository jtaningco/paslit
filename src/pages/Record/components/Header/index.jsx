// DEPENDENCIES
import React from "react";
import PropTypes from "prop-types";

// COMPONENTS
import {
    Container,
    Wrapper,
    Logo,
    Title,
    Body
} from "./styles";

const Header = ({ logo, name, description }) => (
    <Container>
        <Wrapper>
            <Logo src={logo} alt={name} className={name === "Chosen Children Village" ? "ccv" : ""} />
            <Title>{name}</Title>
            <Body>{description}</Body>
        </Wrapper>
    </Container>
)

Header.defaultProps = {
    logo: "Logo Image",
    name: "Partner Name",
    description: "Partner Description"
}

Header.propTypes = {
    logo: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

export default Header;