import React from 'react';


import styled from 'styled-components'



const Button = styled.button`
  text-decoration: none;
    padding: ${props => props.padding};
    cursor: pointer;
    font-weight: lighter;
    font-size: ${props => props.size};
    color: ${props => props.color};
    background-color: ${props => props.bgcolor || "transparent"};
    border:  none;
    border-radius: ${props => props.radius};
    
    &:hover{
    color: ${props => props.bgcolor};
    background-color: ${props => props.color};
  }
`
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
