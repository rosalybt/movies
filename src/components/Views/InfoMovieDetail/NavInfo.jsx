import styled from 'styled-components';
import { NavLink } from 'react-router-dom'
import { List, Nav } from '../../Commons'



const NavBar = styled(Nav)`
padding: 0 ${({ theme }) => theme.padding.large};
margin-bottom: ${({ theme }) => theme.margin.medium} 0;

`;

const ListOfItems = styled(List)`
justify-content: space-around;
@media screen and (max-width: 768px) {
   flex-wrap:wrap;
   margin: ${({ theme }) => theme.margin.medium};
  }
`;

const Item = styled.li`
padding: ${({ theme }) => theme.padding.medium};
font-size: x-large;

&:hover{border-bottom: ${({ theme }) => theme.colors.highlighter} }
`

const Link = styled(NavLink)`
    &.active{ border-bottom: ${({ theme }) => theme.colors.highlighter};
}

`

const NavBarInfo = ({ movieID }) => {
    return (
        <NavBar>
            <ListOfItems>
                <Link to={`/movie/${movieID}/info`} activeClassName='active'>
                    < Item >
                        INFO
                    </Item >
                </Link >

                <Link to={`/movie/${movieID}/cast`} activeClassName='active'>
                    <Item>
                        REPARTO
                    </Item>
                </Link>

                <Link to={`/movie/${movieID}/trailer`} activeClassName='active'>
                    <Item>
                        TRAILER
                    </Item>
                </Link>

                <Link to={`/movie/${movieID}/similars`} activeClassName='active'>
                    <Item >
                        SIMILARES
                    </Item>
                </Link>
            </ListOfItems >
        </NavBar >
    )
}

export default NavBarInfo