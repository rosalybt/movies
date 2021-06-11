import styled from 'styled-components'

const FooterBar = styled.footer`
background-color: ${({ theme }) => theme.colors.primary};
color: ${({ theme }) => theme.colors.textDark};
padding: ${({ theme }) => theme.padding.large};
text-align: center;
`


const Footer = () => {
    return (
        <FooterBar>
            <p>🎥 Movie App, hecha con muuuucha pasion 💗</p>
        </FooterBar>
    )
}

export default Footer