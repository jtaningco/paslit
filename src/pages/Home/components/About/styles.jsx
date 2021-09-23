import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: auto;
    background: #FFF1F4;
    padding: 8rem 16rem;

    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;

    @media only screen and (max-width: 1024px) {
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
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
`;

export const Title = styled.h1`
    color: var(--paslit-blue);
    margin-bottom: 1.5rem;
`;

export const Description = styled.p`
    text-align: center;
    color: var(--paslit-blue);
`;