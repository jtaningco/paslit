// DEPENDENCIES
import React from "react";
import PropTypes from "prop-types";

// COMPONENTS
import {
    Container,
    Wrapper,
    Image
} from "./styles"
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Images = ({ images }) => (
    <Container id="read">
        <Wrapper>
            {
                images && images
                ?
                    images.map((image) => (
                        <Image src={image} />
                    ))
                :
                    <Loader 
                        type="ThreeDots"
                        color="#EE446A"
                        height={80}
                        width={80}
                        timeout={4000}
                    />
            }
        </Wrapper>
    </Container>
)

Images.propTypes = {
    images: PropTypes.object.isRequired,
}

export default Images;
