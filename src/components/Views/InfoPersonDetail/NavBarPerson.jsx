import styled from 'styled-components';
import { NavLink } from 'react-router-dom'
import { List, ListItem, Nav } from '../../Commons'


const NavBar = styled(Nav)`
background-color: ${({ theme }) => theme.colors.tertiary};
flex-direction: row;
justify-content: center;
width:100%;
padding: 0  ${({ theme }) => theme.padding.medium};
margin-bottom: ${({ theme }) => theme.margin.medium};;
`;

const StyledList = styled(List)`
width:50%;
flex-wrap: wrap;
`;

const Item = styled(ListItem)`
padding: 5px 20px;

align-items: center;
font-size: x-large;
`

const Link = styled(NavLink)`
&.active{
    border-bottom: ${({ theme }) => theme.colors.highlighter}; 
}

`

const NavBarInfo = ({ personID }) => {
    return (
        <NavBar>
            <StyledList>
                <Item>
                    <Link to={`/person/${personID}/info`} activeClassName='active'>
                        INFORMACION

                    </Link>
                </Item>

                <Item>
                    <Link to={`/person/${personID}/credits`} activeClassName='active'>

                        CREDITOS

                    </Link>
                </Item>

            </StyledList>
        </NavBar >
    )
}

export default NavBarInfo