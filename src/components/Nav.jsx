import styled from 'styled-components';
import Logo from '../logo.png'
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
padding: 20px;
box-sizing: border-box;
display:flex;
align-items: center;
height: 100%;

&:hover{
    background-color: red
}
`

const LinkNuevo = styled(NavLink)`
text-decoration: none;
margin: 0;
color: white;

&.active{
    background-color:red
}

`

const Image = styled.img`
width:90px ;
`;




const Nav = () => {

    return (
        <NavBar>

            <Image src={Logo} alt="logo" />

            <List>
                <LinkNuevo to="/" activeClassName='active'>
                    <Item>
                        Home
                        </Item>
                </LinkNuevo>

                <LinkNuevo to="/new-movies" activeClassName='active'>
                    <Item>
                        Ultimos Lanzamientos
                    </Item>
                </LinkNuevo>

                <LinkNuevo to="/populars" activeClassName='active'>
                    <Item>
                        Populares
                    </Item>
                </LinkNuevo>

                <LinkNuevo to="/search" activeClassName='active'>
                    <Item >
                        Buscar
                    </Item>
                </LinkNuevo>
            </List>

        </NavBar >
    )
}

export default Nav