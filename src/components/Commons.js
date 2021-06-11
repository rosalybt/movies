import styled from "styled-components"


export const Flex = styled.div`
  display: flex;
  flex-direction: ${props => props.flexDirection};
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems || "flex-start"};
  flex-wrap: ${props => props.flexWrap};
  width:100%;
`

export const Button = styled.button`
text-decoration: none;
padding: 5px;
cursor: pointer;
font-weight: lighter;
border:  none;
`
export const Nav = styled.nav`
display: flex;
justify-content: center;
`
export const List = styled.ul`
list-style-type: none;
display:flex;
justify-content: center;
width: 100%;
`
export const ListItem = styled.li`
display:flex;
justify-content: Center;
align-items: center;
  width: 100%;
`