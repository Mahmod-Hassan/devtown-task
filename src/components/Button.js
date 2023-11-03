import React from 'react';
import { StyledButton } from '../styles/Elements.styles';

const Button = ({children, isActive, onClick}) => {
    return(
        <StyledButton className={`${isActive ? 'active' : 'inactive'}`} onClick={onClick}>{children}</StyledButton>
    )
}
export default Button;