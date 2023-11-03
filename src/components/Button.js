import React from 'react';
import { StyledButton } from '../styles/Elements.styles';

const Button = ({children, isActive, onClick}) => {
    return(
        // StyledButton is a styled component
        <StyledButton className={`${isActive ? 'active' : 'inactive'}`} onClick={onClick}>{children}</StyledButton>
    )
}
export default Button;