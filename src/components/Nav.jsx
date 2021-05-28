import styled from 'styled-components';
import Logo from '../logo.png'
import { NavLink } from 'react-router-dom'


const NavBar = styled.nav`
background-color:  ${props => props.theme.colors.primary};
color:${props => props.theme.colors.text};
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
`
const Link = styled(NavLink)`
text-decoration: none;
margin: 0;
color: ${props => props.theme.colors.text};

&.active{
    background-color:${props => props.theme.colors.secondary}}

`
const Image = styled.img`
width:90px ;
`;




const Nav = () => {

    return (
        <NavBar>

            <Image src={Logo} alt="logo" />

            <List>
                <Link exact to="/" activeClassName='active'>
                    <Item>
                        Home
                    </Item>
                </Link>

                <Link to="/new-movies" activeClassName='active'>
                    <Item>
                        Ultimos Lanzamientos
                    </Item>
                </Link>

                <Link to="/populars" activeClassName='active'>
                    <Item>
                        Populares
                    </Item>
                </Link>

                <Link to="/search" activeClassName='active'>
                    <Item >
                        Buscar
                    </Item>
                </Link>
            </List>

        </NavBar >
    )
}

export default Nav