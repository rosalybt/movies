import styled from 'styled-components';
import { NavLink } from 'react-router-dom'


const NavBar = styled.nav`
background-color: black;
color:white;
display: flex;
flex-direction: row;
justify-content: flex-start;
padding: 0 30px 0 30px;
`;

const List = styled.ul`
list-style-type: none;
display: flex;
justify-content: space-around;
margin:0;
`;

const Item = styled.li`
padding: 10px;
box-sizing: border-box;
display:flex;
align-items: center;
height: 100%;

&:hover{
    /* text-decoration: underline;
    border-bottom:1px solid black;
    padding-bottom:2px; */
    border-bottom: 2px solid red; 
 /* padding-bottom: 5px; */
}
`

const LinkNuevo = styled(NavLink)`
text-decoration: none;
margin: 0;
color: white;

&.active{
    /* border-bottom: 2px solid red; */
    border-bottom: 2px solid red; 
/* padding-bottom: 5px; */
}

`



const NavBarInfo = () => {
    return (
        <NavBar>
            <List>
                <LinkNuevo exact to="/info" activeClassName='active'>
                    <Item>
                        INFO
                    </Item>
                </LinkNuevo>

                <LinkNuevo to="/cast" activeClassName='active'>
                    <Item>
                        REPARTO
                    </Item>
                </LinkNuevo>

                <LinkNuevo to="/trailer" activeClassName='active'>
                    <Item>
                        TRAILER
                    </Item>
                </LinkNuevo>

                <LinkNuevo to="/similars" activeClassName='active'>
                    <Item >
                        SIMILARES
                    </Item>
                </LinkNuevo>
            </List>

        </NavBar >
    )
}

export default NavBarInfo