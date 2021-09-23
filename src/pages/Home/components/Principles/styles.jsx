import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: auto;
    background: #BBD4F5;
    padding: 8rem 16rem;

    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;

    @media only screen and (max-width: 1280px) {
        padding: 8rem;
    }

    @media only screen and (max-width: 640px) {
        padding: 4rem 2rem;
    }
`;

export const Wrapper = styled.div`
    width: 100%;
    height: auto;

    display: flex;
    justify-content: space-evenly;
    align-items: center;
    align-content: center;

    @media only screen and (max-width: 1024px) {
        flex-direction: column;
        justify-content: center;
    }
`;

export const Card = styled.div`
    width: 40%;
    padding: 4rem 2rem;
    background: var(--muted-white);
    border-radius: 20px;
    box-shadow: var(--normal-drop-shadow);
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;

    @media only screen and (max-width: 1024px) {
        width: 100%;
        margin: 2rem 0;
    }

    @media only screen and (max-width: 640px) {
        padding: 2rem 1rem;
    }
`;

export const Title = styled.h2`
    color: var(--paslit-blue);
    margin-bottom: 1.5rem;
`;

export const Description = styled.p`
    text-align: center;
    color: var(--paslit-blue);
`;