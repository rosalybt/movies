import React from 'react';
import styled from 'styled-components'

// STYLES
const Button = styled.button`
  text-decoration: none;
    padding: ${props => props.padding};
    cursor: pointer;
    font-weight: lighter;
    font-size: ${props => props.size};
    color: ${props => props.color || props.theme.colors.text};
    background-color: ${props => props.bgcolor || props.theme.colors.secondary};
    border:  none;
    border-radius: ${props => props.radius};
    
    &:hover{
    color: ${props => props.bgcolor};
    background-color: ${props => props.color};
  }
`


// COMPONENT
const ButtonSimple = ({ color, size, radius, content, icon, bgcolor, padding }) => {

  return (

    <Button
      color={color}
      size={size}
      radius={radius}
      bgcolor={bgcolor}
      padding={padding}

    >
      { icon}
      { content}
    </Button >

  );
}

export default ButtonSimple
