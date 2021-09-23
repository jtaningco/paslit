// DEPENDENCIES
import React from "react";
import { Link } from "react-router-dom";

// COMPONENTS
import {
    Container,
    Wrapper,
    Title,
    Description,
} from "./styles"
import Button from "../Button"

const Hero = ({ backgroundImage, backgroundColor, title, description, button, buttonLink }) => (
    <Container style={ 
        backgroundImage && backgroundImage 
        ? 
            { backgroundImage: `linear-gradient(
                rgba(0, 0, 0, 0.1), 
                rgba(0, 0, 0, 0.1)
              ), url(${backgroundImage})` } 
        : 
            { backgroundColor: backgroundColor}
    }>
        <Wrapper>
            <Title className="hero-title">{title}</Title>
            <Description className="hero-subtitle">{description}</Description>
            {
                button && button
                ?
                    buttonLink && buttonLink
                    ?
                        <Link to={buttonLink}>
                            <Button label={button} />
                        </Link>
                    :
                        <Button label={button} />
                :
                    <></>
            }
        </Wrapper>
    </Container>
)

export default Hero;