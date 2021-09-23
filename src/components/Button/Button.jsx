import React from "react";
import PropTypes from "prop-types";
import { StyledButton } from "./styles";

// Types (style): primary, secondary, tertiary
// Label (label): Text inside the button
// Type (type): Button type (i.e. submit, button, etc.)
// On Click (onClick): JavaScript onClick function
// Classes (className): Classes for additional states

// Define the `primary`, `secondary`, and tertiary button types

const primary = {
    default: {
        color: "var(--muted-white)",
        background: "var(--paslit-pink)",
        border: "var(--paslit-pink)"
    },
    hover: {
        color: "var(--muted-white)",
        background: "var(--paslit-pink)",
        border: "var(--paslit-pink)",
        dropShadow: "var(--hover-drop-shadow)"
    }
}

const secondary = {
    default: {
        color: "var(--paslit-pink)",
        background: "transparent",
        border: "var(--paslit-pink)"
    },
    hover: {
        color: "var(--muted-white)",
        background: "var(--paslit-pink)",
        border: "var(--paslit-pink)",
        dropShadow: "var(--hover-drop-shadow)"
    }
}

const tertiary = {
    default: {
        color: "var(--paslit-pink)",
        background: "transparent",
        border: "transparent" 
    },
    hover: {
        color: "var(--paslit-blue)",
        background: "transparent",
        border: "transparent",
        dropShadow: "none", 
    },
}

const Button = ({
    style,
    label,
    type,
    onClick,
    className
}) => (
    <StyledButton 
        style={style === "secondary" ? secondary : style === "tertiary" ? tertiary : primary}
        type={type ? type : "button"}
        onClick={onClick}
        className={className}
    >
        {label}
    </StyledButton>
)

Button.defaultProps = {
    style: 'primary',
    label: 'Button',
    type: 'button',
    onClick: null,
    className: ''
}

Button.propTypes = {
    style: PropTypes.string,
    label: PropTypes.string.isRequired,
    type: PropTypes.string,
    onClick: PropTypes.func,
    className: PropTypes.string
}

export default Button;