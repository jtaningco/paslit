import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: auto;
    padding: 7.5rem 2rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
`;

// export const Title = styled.h1`
//     color: var(--paslit-blue);
//     margin-bottom: 2.5rem;
//     text-align: center;
// `;

export const Images = styled.div`
    width: 100%;
    height: auto;

    display: grid;
    justify-content: center;
    justify-items: stretch;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;

    @media only screen and (max-width: 1024px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media only screen and (max-width: 640px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

export const Wrapper = styled.div`
    width: auto;
    height: 100%;
    transition: all 0.3s ease-in-out;
    margin: 1rem;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    align-content: center;

    @media only screen and (max-width: 640px) {
        margin: 3rem 1.5rem;
    }
`;

export const ImageWrap = styled.div`
    width: 25%;
    height: 120px;
    margin-bottom: 2rem;
    overflow: hidden;

    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;

    transition: transform 0.3s ease-in-out;

    &:hover {
        transform: translateY(-5%);
    }

    @media only screen and (max-width: 1024px) {
        margin-bottom: 1rem;
        width: 50%;
    }

    @media only screen and (max-width: 640px) {
        width: 100%;
    }
`;

export const Image = styled.img`
    width: auto;
    height: 160px;
    margin-bottom: 2rem;
    transition: transform 0.3s ease-in-out;

    &.ccv {
        width: 160px;
        margin-bottom: 3rem;
    }

    &:hover {
        transform: translateY(-5%);
    }

    @media only screen and (max-width: 1024px) {
        margin-bottom: 1rem;

        &.ccv {
            margin-bottom: 2rem;
        }
    }

    @media only screen and (max-width: 640px) {
        width: 100%;
        height: auto;
    }
`;

export const Name = styled.p`
    font-family: var(--spartan-font);
    font-weight: 700;
    text-align: center;
    color: var(--paslit-blue);
    transition: color 0.3s ease-in-out;

    &:hover {
        color: var(--accent-blue);
    }
`;