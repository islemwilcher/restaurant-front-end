
import Logo from './logo.jpg';
import styled from 'styled-components';
import Burger from './Burger'

import { Paper } from '@material-ui/core'

const Nav = styled.nav`
    width:100%;
    padding: 0 40px;
    align-items: center;
    text-align:center;
    display: flex;
    justify-content: space-between;
    height:12vh;

    .logo {
        width: 60px;
    }
`

const Navbar = () => {
    return (
        <Nav>
            <div className="logo">
                <img src={Logo} alt="logo" width="60px" height="60px" />
            </div>
            <Burger /> 
                      
        </Nav>
    )
}

export default Navbar
