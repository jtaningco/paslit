import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;

    background-blend-mode: overlay;
    background-attachment: fixed;
    background-size: cover;
    background-position: bottom;
    background-repeat: no-repeat;

    padding: 0 12rem;

    @media only screen and (max-width: 1024px) {
        padding: 0 8rem;
    }

    @media only screen and (max-width: 768px) {
        padding: 0 4rem;
    }

    @media only screen and (max-width: 640px) {
        padding: 0 1rem;
    }
`;

export const Wrapper = styled.div`
    width: 75%;
    height: auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;

    @media only screen and (max-width: 1440px) {
        width: 100%;
    }
`;

export const Title = styled.h1`
    color: var(--paslit-blue);
`;

export const Description = styled.p`
    width: 75%;
    color: var(--paslit-blue);
    padding: 2rem 0 4rem 0;

    @media only screen and (max-width: 1024px) {
        width: 100%;
        padding: 1.5rem 0 3rem 0;
    }
`;