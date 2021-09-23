import React from "react";
import PropTypes from "prop-types";

import {
    Container,
    Wrapper,
    Title,
    Link,
    ImageWrapper,
    Image
} from "./styles"

const CoSignatories = ({ partners }) => (
    <Container>
        <Title id="co-signatories">Co-Signatories</Title>
        <Wrapper>
            {
                partners.map((partner) => (
                    <Link href={partner.link} target="_blank" rel="noreferrer">
                        <ImageWrapper>
                            <Image src={partner.image} />
                        </ImageWrapper>
                    </Link>
                ))
            }
        </Wrapper>
    </Container>
)

CoSignatories.defaultProps = {
    partners: []
}

CoSignatories.propTypes = {
    partners: PropTypes.object.isRequired
}

export default CoSignatories