import { NavLink as Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

export const Nav = styled.nav`
    width: 100%;
    height: auto;
    padding: 1rem 2.5rem;
    background: var(--muted-white);
    
    position: fixed;
    top: 0;
    left: 0;
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    
    box-shadow: var(--nav-drop-shadow);
    z-index: 50;
`;

export const NavLogo = styled(Link)`
    cursor: pointer;
    height: auto;
`;

export const Logo = styled.img`
    width: auto;
    height: 64px;
`;

export const NavLink = styled(Link)`
    cursor: pointer;
    display: flex;
    color: #242058;
    align-items: center;
    text-decoration: none;
    padding: 0 2rem;
    height: 100%;
    transition: all 0.3s ease-in-out;

    &:active, &.is-active {
        color: var(--paslit-pink);
    }

    &:hover {
        color: var(--paslit-pink);
    }

    @media screen and (max-width: 768px) {
        padding: 1rem 0;
        margin: 1rem 0;
    }
`;

const enter = keyframes`
    0% {
        opacity: 0;
        transform: translateY(-50%);
    } 100% {
        opacity: 1;
        transform: translateY(0);
    }
`;

export const NavMenu = styled.div`
    margin-left: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;

    @media screen and (max-width: 768px) {
        width: 100%;
        height: auto;
        padding: 4rem 1rem;
        margin-left: 0;
        background: var(--muted-white);
        z-index: -1;

        position: fixed;
        top: 80px;
        left: 0;
        animation: ${enter} 0.3s linear;

        display: none;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        align-content: center;

        &.active {
            display: flex;
        }
    }
`;

export const ButtonLink = styled.a`
    width: auto;
    height: auto;
    text-decoration: none;
`;

export const MobileItem = styled.div`
    width: auto;
    height: auto;    

    display: none;
    justify-content: center;
    align-items: center;
    align-content: center;

    &.button {
        margin: 1rem 0;
    }

    @media only screen and (max-width: 768px) {
        display: flex;
    }
`;