import styled from "styled-components"



export const Flex = styled.div`
  display: flex;
  flex-direction: ${props => props.flexDirection};
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems || "flex-start"};
  flex-wrap: ${props => props.flexWrap}
`

export const List = styled.ul`
  list-style: none;
`

export const ListItem = styled.li`
  width: 100%;
`