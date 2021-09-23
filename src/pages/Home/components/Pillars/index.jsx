// DEPENDENCIES
import React from "react";
import PropTypes from "prop-types";

// COMPONENTS
import {
    Container,
    Wrapper,
    Title,
    PillarWrapper,
    PillarIcon,
    PillarTitle,
    PillarDescription
} from "./styles"

// ASSETS
import adya from "./assets/adya.png";
import aruga from "./assets/aruga.png";
import agapay from "./assets/agapay.png";

const pillarsData = [
    {
        name: "Adya",
        description: "ANOCs must be protected from all forms of abuse.",
        icon: adya
    },
    {
        name: "Aruga",
        description: "State resources are properly utilized so all ANOCs receive the care they deserve.",
        icon: aruga
    },
    {
        name: "Agapay",
        description: "Safety nets are set in place for ANOCs to live a normal and empowered way of life.",
        icon: agapay
    },

]

const Pillar = ({ icon, name, description }) => (
    <PillarWrapper>
        <PillarIcon src={icon} />
        <PillarTitle>{name}</PillarTitle>
        <PillarDescription>{description}</PillarDescription>
    </PillarWrapper>
)

const Pillars = () => (
    <Container>
        <Title>Our Three Pillars</Title>
        <Wrapper>
            {pillarsData.map((pillar) => (
                <Pillar 
                    icon={pillar.icon}
                    name={pillar.name}
                    description={pillar.description}
                />
            ))}
        </Wrapper>
    </Container>
)

Pillar.defaultProps = {
    icon: adya,
    name: 'Adya',
    description: 'ANOCs must be protected fromall forms of abuse.'
}

Pillar.propTypes = {
    icon: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}

export default Pillars;