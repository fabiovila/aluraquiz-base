import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const InputBase = styled.input`
    border-radius: ${({ theme }) => theme.borderRadius};
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
    width: 100%;
    line-height: 2;
    margin-bottom: 1em;
    border: 0px ${({ theme }) => theme.colors.primary} solid ;  
    padding: 5px;  
`;

export default function Input({ onChange, placeholder, ...props }) {
  return (
    <div>
      <InputBase
        placeholder={placeholder}
        onChange={onChange}
        {...props}
      />
    </div>
  );
}

Input.defaultProps = {
  value: '',
};

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
};
