import React from 'react'
import logo from "../../images/codeabc.png"
import { Container } from '../../Styles/Common.styled'
import { Navigation } from '../../Styles/Navbar.styled'

export default function Navbar() {
    return (
        <Container>
            <Navigation>

                <div>
                    <img src={logo} alt="code abc" />
                </div>
                <ul>
                    <li>Home</li>
                    <li>About-us</li>
                    <li>Teams</li>
                </ul>
            </Navigation>
        </Container>
    )
}
