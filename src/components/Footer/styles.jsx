import { HashLink as Link } from "react-router-hash-link";
import styled from "styled-components";

export const Container = styled.footer`
    width: 100%;
    height: auto;
    padding: 4rem;

    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    align-content: center;

    background: var(--muted-white);
    box-shadow: var(--footer-drop-shadow);

    @media only screen and (max-width: 1024px) {
        padding: 2rem;
    }

    @media only screen and (max-width: 640px) {
        justify-content: flex-start;
        padding: 2rem 1rem;
    }
`;

export const Logo = styled.img`
    width: 96px;
    height: auto;
`;

export const Wrapper = styled.div`
    width: auto;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    align-content: center;
`;

export const Menu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    align-content: center;
    padding: 0 4rem;

    @media only screen and (max-width: 768px) {
        padding: 0 1rem;
    }

    @media only screen and (max-width: 640px) {
        display: none;

        &.contact {
            display: flex;
            margin-left: 0.5rem;
        }
    }
`;

export const Title = styled.h3`
    font-family: var(--spartan-font);
    color: var(--paslit-blue);

    @media only screen and (max-width: 640px) {
        display: none;
    }
`;

export const Section = styled(Link)`
    font-family: var(--open-sans-font);
    font-size: 0.85rem;
    line-height: 1.35rem;
    padding: 0.375rem 0;
    color: var(--paslit-blue);
    transition: all 0.3s ease-in-out;

    :hover {
        color: var(--paslit-pink);
    }
`;

export const Email = styled.a`
    font-family: var(--open-sans-font);
    font-size: 0.85rem;
    line-height: 1.35rem;
    padding: 0.375rem 0;
    color: var(--paslit-blue);
    transition: all 0.3s ease-in-out;

    :hover {
        color: var(--paslit-pink);
    }
`;

export const Url = styled.a`
    padding: 0 0.5rem;

    :first-child {
        padding-left: 0;
    }

    :last-child {
        padding-right: 0;
    }

    @media only screen and (max-width: 640px) {
        padding: 0 0.25rem;
    }
`;

export const Links = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    padding: 0.5rem 0;

    @media only screen and (max-width: 640px) {
        padding: 0.25rem;
    }
`;

export const Icon = styled.img`
    width: 1.25rem;
    height: 1.25rem;
    transition: all 0.3s ease-in-out;

    &:hover {
        transform: scale(1.05);
    }
`;