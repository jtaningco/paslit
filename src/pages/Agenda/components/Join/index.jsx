// DEPENDENCIES
import React from "react";
import PropTypes from "prop-types";
import {
    isMobile
} from "react-device-detect";

// COMPONENTS
import {
    Container,
    Wrapper,
    Title,
    Link
} from "./styles"
import Button from "../../../../components/Button"

const Join = ({ read, cosign }) => (
    <Container>
        <Wrapper>
            <Title>Join us in the advocacy of protecting ANOCs</Title>
            <Link href={read} target="_blank" rel="noreferrer">
                <Button style="primary" label={isMobile ? `Read the CA` : `Read the Comprehensive Agenda`} />
            </Link>
            <Link href={cosign} target="_blank" rel="noreferrer">
                <Button style="secondary" label={isMobile ? `Co-Sign the CA` : `Co-Sign the Comprehensive Agenda`} />
            </Link>
        </Wrapper>
    </Container>
)

Join.defaultProps = {
    read: '#',
    cosign: '#'
}

Join.propTypes = {
    read: PropTypes.string.isRequired,
    cosign: PropTypes.string.isRequired,
}

export default Join;