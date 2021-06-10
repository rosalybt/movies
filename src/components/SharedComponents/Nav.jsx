import styled from 'styled-components';
import Logo from '../../utils/logo.png'
import { NavLink } from 'react-router-dom'
import { List, ListItem } from '../Commons'


const NavBar = styled.nav`
background-color:  ${props => props.theme.colors.primary};
color:${props => props.theme.colors.text};
display: flex;
flex-direction: row;
justify-content: flex-start;
`;

const NavList = styled(List)`
display: flex;
justify-content: space-around;
margin:0;
`

const Item = styled(ListItem)`
padding: ${({ theme }) => theme.padding.medium};
color: ${({ theme }) => theme.colors.textDark};
display:flex;
align-items: center;
height: 100%;
`
const Link = styled(NavLink)`
padding: 0 ${({ theme }) => theme.padding.large} ;
color: ${props => props.theme.colors.text};

&.active{
    background-color:${({ theme }) => theme.colors.secondary}};
`
const Image = styled.img`
width: 90px;
`;




const Nav = () => {

    return (
        <NavBar>
            <NavList>
                <Link exact to="/" activeClassName='selected'>
                    <Image src={Logo} alt="logo" />
                </Link>

                <Link exact to="/" activeClassName='active'>
                    <Item>
                        Home
                    </Item>
                </Link>

                <Link to="/new-movies/page/1" activeClassName='active'>
                    <Item>
                        Ultimos Lanzamientos
                    </Item>
                </Link>

                <Link to="/populars/page/1" activeClassName='active'>
                    <Item>
                        Populares
                    </Item>
                </Link>

                <Link to="/search/page/1" activeClassName='active'>
                    <Item >
                        Buscar
                    </Item>
                </Link>
            </NavList>

        </NavBar >
    )
}

export default Nav