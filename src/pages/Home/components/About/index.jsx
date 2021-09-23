// DEPENDENCIES
import React from "react";
import PropTypes from "prop-types";

// COMPONENTS
import {
    Container,
    Wrapper,
    Title,
    Description
} from "./styles"

const About = ({ title, description }) => (
    <Container>
        <Wrapper>
            <Title>{title}</Title>
            <Description>{description}</Description>
        </Wrapper>
    </Container>
)

About.defaultProps = {
    title: 'About Paslit',
    description: 'Paslit is a Filipino youth-led policy advocacy organization for abandoned, neglected, and orphaned children.'
}

About.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}

export default About;