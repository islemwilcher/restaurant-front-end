import { Typography } from "@material-ui/core";
import { BsArrowRight } from "react-icons/bs"
import { Link } from "react-router-dom"

import './header.css'

const Header = () => {
    const navStyle = {
        color: 'black',
        textDecoration: 'none'
    };
    return (
        <div className="header">
            <Typography className="typography" variant='h4' >Mexican food <br />
            Italian pizza, Hombourger<br />
            <Link style={navStyle} className="link" to ='#'>
                <h4>see all food dishes</h4>
            <BsArrowRight className="arrow" />
            </Link>
            </Typography>
        </div>
    )
}

export default Header