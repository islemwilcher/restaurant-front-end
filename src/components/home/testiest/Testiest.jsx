import { Paper, Typography } from "@material-ui/core";
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
            <Paper className="paragpaper">
            <Typography className="linkparag" variant='h6'>
                make it something to look forward to with stacks of pancakes, healthy smoothiebols or perfect pached eggs.
            </Typography>
            </Paper>
            <Link style={navStyle} className="linkp" to ='#'>
                <Paper>
                    <h4>See More</h4>
                    <BsArrowRight className="arrow" />
                </Paper>
            </Link>
        </div>
    )
}

export default Testiest