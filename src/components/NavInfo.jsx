import styled from 'styled-components';
import { NavLink } from 'react-router-dom'


const NavBar = styled.nav`
background-color: black;
color:white;
display: flex;
flex-direction: row;
justify-content: center;
padding: 0 30px 0 30px;
`;

const List = styled.ul`
list-style-type: none;
display: flex;
justify-content: space-around;
margin:0;
`;

const Item = styled.li`
padding: 5px 20px;
box-sizing: border-box;
display:flex;
align-items: center;
font-size: x-large;
height: 100%;

&:hover{
    border-bottom: 3px solid red; 
}
`

const Link = styled(NavLink)`
text-decoration: none;
margin: 0;
color: white;

&.active{
    border-bottom: 3px solid red; 
}

`



const NavBarInfo = () => {
    return (
        <NavBar>
            <List>
                <Link exact to="/info" activeClassName='active'>
                    <Item>
                        INFO
                    </Item>
                </Link>

                <Link to="/cast" activeClassName='active'>
                    <Item>
                        REPARTO
                    </Item>
                </Link>

                <Link to="/trailer" activeClassName='active'>
                    <Item>
                        TRAILER
                    </Item>
                </Link>

                <Link to="/similars" activeClassName='active'>
                    <Item >
                        SIMILARES
                    </Item>
                </Link>
            </List>

        </NavBar >
    )
}

export default NavBarInfo