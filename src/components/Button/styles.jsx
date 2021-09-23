import styled from "styled-components";

export const StyledButton = styled.button.attrs(props => ({
    color: props.style.default.color || "var(--muted-white)",
    background: props.style.default.background || "var(--accent-blue)",
    borderColor: props.style.default.border || "transparent",
    hoverColor: props.style.hover.color || "var(--muted-white)",
    hoverBackground: props.style.hover.background || "var(--accent-blue)",
    hoverBorderColor: props.style.hover.border || "transparent",
    hoverDropShadow: props.style.hover.dropShadow || "none"
}))`
    width: auto;
    height: auto;
    padding: 0.5rem 1.5rem;

    background: ${props => props.background};
    border: 1px solid ${props => props.borderColor};
    border-radius: var(--soft-radius);
    
    color: ${props => props.color};
    font-family: var(--open-sans-font);
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.5rem;

    transition: all 0.3s ease-in-out;
    cursor: pointer;

    :hover, :focus {
        color: ${props => props.hoverColor};
        background: ${props => props.hoverBackground};
        border: 1px solid ${props => props.hoverBorderColor};
        box-shadow: ${props => props.hoverDropShadow};
    }

    @media only screen and (max-width: 768px) {
        &.navButton {
            display: none;
        }
    }
`;