import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    min-height: 100vh;
    height: auto;
    padding: 4rem;
    background: #EAF3FF;

    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;

    @media only screen and (max-width: 768px) {
        min-height: 75vh;
        padding: 4rem 2rem;
    }

    @media only screen and (max-width: 640px) {
        padding: 2rem 1rem;
    }
`;

export const Wrapper = styled.div`
    width: 60%;
    height: auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;

    @media only screen and (max-width: 1280px) {
        width: 70%;
    }

    @media only screen and (max-width: 1024px) {
        width: 80%;
    }

    @media only screen and (max-width: 768px) {
        width: 100%;
    }
`;

export const Logo = styled.img`
    width: 50%;
    height: auto;

    &.ccv {
        width: 25%;
    }

    @media only screen and (max-width: 768px) {
        width: 75%;
    }

    @media only screen and (max-width: 640px) {
        &.ccv {
            width: 40%;
        }
    }
`;

export const Title = styled.h1`
    font-family: var(--spartan-font);
    font-weight: 700;
    color: var(--paslit-blue);
    text-transform: uppercase;
    text-align: center;
    margin: 2rem 0 1rem 0;
`;

export const Body = styled.p`
    font-family: var(--open-sans-font);
    font-weight: 700;
    color: var(--paslit-blue);
    text-align: center;
`;