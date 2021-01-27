import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.button`
    border-radius: ${({ theme }) => theme.borderRadius};
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
    width: 100%;
    line-height: 2;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: ${({ theme }) => theme.colors.contrastText}; 
    background-color: ${({ theme }) => theme.colors.primary};
    border: 0px ${({ theme }) => theme.colors.primary} solid ;  
    padding: 5px;  
    text-transform: uppercase;
    outline: 0;
    transition: .3s;
    cursor: pointer;
    
    &:hover,
    &:focus {
        opacity: .5;
    }
    &:disabled {
    background-color: ${({ theme }) => theme.colors.primary};
    cursor: not-allowed;
  }
`;

Button.propTypes = {
  type: PropTypes.oneOf(['submit', 'type', 'button']).isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;
