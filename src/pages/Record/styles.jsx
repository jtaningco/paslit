import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    height: auto;
    background: #EAF3FF;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
`;

export const Image = styled.div`
    width: 100%;
    height: 75vh;

    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;

    @media only screen and (max-width: 768px) {
        height: 50vh;
    }
`;

export const Content = styled.div`
    width: 100%;
    height: auto;
    padding: 4rem 8rem;
    margin-bottom: 4rem;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;

    @media only screen and (max-width: 1024px) {
        padding: 4rem;
    }

    @media only screen and (max-width: 768px) {
        padding: 4rem 2rem;
    }

    @media only screen and (max-width: 640px) {
        padding: 2rem 1rem;
    }
`;

export const Body = styled.p`
    font-family: var(--open-sans);
    font-weight: 400;
    color: var(--muted-dark);
`;

export const Buttons = styled.div`
    width: 100%;
    height: auto;
    margin-top: 4rem;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    align-content: center;

    @media only screen and (max-width: 1024px) {
        justify-content: center;
    }

    @media only screen and (max-width: 640px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const Link = styled.a`
    width: 200px;
    height: auto;
    text-decoration: none;

    &:nth-child(2n) {
        margin: 0 1rem;
    }

    @media only screen and (max-width: 640px) {
        &:nth-child(2n) {
            margin: 2rem;
        }
    }
`;