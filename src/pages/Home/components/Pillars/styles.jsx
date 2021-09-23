import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: auto;
    background: #FFF3E3;
    padding: 8rem 16rem;

    display: flex;
    flex-direction: column;
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



export const Title = styled.h1`
    color: var(--paslit-blue);
    margin-bottom: 4rem;
`;

export const PillarWrapper = styled.div`
    width: 25%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;

    @media only screen and (max-width: 1024px) {
        margin: 2rem 0;
        width: 75%;
    }

    @media only screen and (max-width: 640px) {
        width: 100%;
    }
`;

export const PillarIcon = styled.img`
    width: 80px;
    height: 80px;
`;

export const PillarTitle = styled.h2`
    color: var(--paslit-blue); 
    margin: 2rem 0 1rem 0;
`;

export const PillarDescription = styled.p`
    text-align: center;
    color: var(--paslit-blue);
`;