import styled from 'styled-components'

const FooterBar = styled.footer`
background-color: ${({ theme }) => theme.colors.primary};
color: ${({ theme }) => theme.colors.text};
padding: 20px;
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