
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Ul = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
    margin-left: auto;
    background-color: white;
    
    li {
        padding: 0 25px;
        font-size: 20px;
        font-weight: 400;
        color : black;
    }
    li:hover{
        color: rgb(136, 165, 219);
        border-bottom: 1px solid rgb(136, 165, 219);
    }

    @media (max-width: 768px) {
        flex-flow: column nowrap;
        z-index: 19;
        position: fixed;
        transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
        top:0;
        right:0;
        height:100vh;
        width:100%;
        padding-top: 2.5rem;
        color:black;
        justify-content: space-evenly;     
        transition: 0.4s ease-in-out;

        li:hover{
            margin: 0 90px 5px 90px;
            color: rgb(136, 165, 219);
            border-bottom: 2px solid rgb(136, 165, 219);
        }
        
    }
`;
    
const RightNav = ({ open, setOpen }) => {
    const navStyle = {
        color: 'black',
        textDecoration: 'none'
    };
    
    return (
        <Ul open = {open}>
            <Link style={navStyle} to="/" onClick = {() => setOpen(!open)}>
                <li>Home</li>
            </Link>
            <Link style={navStyle} to="/about" onClick = {() => setOpen(!open)}><li>About</li></Link>
            <Link style={navStyle} to="/popular" onClick = {() => setOpen(!open)}><li>Popular</li></Link>
            <Link style={navStyle} to="/reviews" onClick = {() => setOpen(!open)}><li>Reviews</li></Link>
            <Link style={navStyle} to="/contacts" onClick = {() => setOpen(!open)}><li>Contacts</li></Link>
        </Ul>
    )
}

export default RightNav
