import styled from 'styled-components'

const FooterBar = styled.footer`
background-color: black;
color: white;
padding:20px;
margin-top: 75px;
text-align: center;
`


const Footer = () => {
    return (
        <FooterBar>
            <p>🎥Movie App</p>
        </FooterBar>
    )
}

export default Footer