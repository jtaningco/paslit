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
    background-position: center;
    background-repeat: no-repeat;

    padding: 0 10rem;

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
    color: var(--paslit-blue);
    padding: 1rem 0 2.5rem 0;
`;