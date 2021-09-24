import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: auto;
    padding: 8rem 12rem;

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
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    align-content: center;

    @media only screen and (min-width: 1920px) {
        justify-content: space-evenly
    }

    @media only screen and (max-width: 1024px) {
        flex-direction: column;
        flex-wrap: nowrap;
    }
`;

export const Image = styled.img`
    margin: 1rem 0;
    width: 45%;
    height: auto;

    @media only screen and (max-width: 1024px) {
        width: 100%;
    }
`;