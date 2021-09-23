// DEPENDENCIES
import React from "react";
import PropTypes from "prop-types";

// COMPONENTS
import {
    Container,
    Wrapper,
    Card,
    Title,
    Description
} from "./styles"

const Quote = ({ title, description }) => (
    <Card>
        <Title>{ title }</Title>
        <Description>{ description }</Description>
    </Card>
)

const Principles = ({ vision, mission }) => (
    <Container>
        <Wrapper>
            <Quote 
                title="Vision"
                description={vision}
            />
            <Quote 
                title="Mission"
                description={mission}
            />
        </Wrapper>
    </Container>
)

Principles.defaultProps = {
    vision: 'Paslit Vision',
    mission: 'Paslit Mission'
}

Principles.propTypes = {
    vision: PropTypes.string.isRequired,
    mission: PropTypes.string.isRequired,
}

export default Principles;