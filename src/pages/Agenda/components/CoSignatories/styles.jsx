import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: auto;
    padding: 8rem 16rem;

    display: flex;
    flex-direction: column;
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

    display: grid;
    justify-items: center;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;

    @media only screen and (max-width: 640px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

export const Title = styled.h1`
    color: var(--paslit-blue);
    margin-bottom: 2.5rem;
    text-align: center;
`;

export const Link = styled.a`
    width: auto;
    height: auto;
    text-decoration: none;
`;

export const ImageWrapper = styled.div`
    margin: 2rem 0;
    width: 160px;
    height: 160px;
    overflow: hidden;

    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
`;

export const Image = styled.img`
    width: 120px;
    height: auto;
    transition: all 0.3s ease-in-out;

    &:hover {
        transform: scale(1.05);
    }
`;