import { Paper } from "@material-ui/core";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom"

import './styles.css'

const Testiest = () => {
    const navStyle = {
        color: 'black',
        textDecoration: 'none'
    };
    return (
        <div className="testiest">
            <Link style={navStyle} className="link" to ='#'>
                <Paper className="linkp">
                    <h4>see all food dishes</h4>
                    <BsArrowRight className="arrow" />
                </Paper>
            </Link>
        </div>
    )
}

export default Testiest