import styled from "styled-components"



export const Flex = styled.div`
  display: flex;
  flex-direction: ${props => props.flexDirection};
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems || "flex-start"};
  flex-wrap: ${props => props.flexWrap}
`
export const Nav = styled.nav`
display: flex;
justify-content: center;
`
export const List = styled.ul`
list-style-type: none;
display:flex;
justify-content: center;
`
export const ListItem = styled.li`
display:flex;
justify-content: Center;
align-items: center;
  width: 100%;
`