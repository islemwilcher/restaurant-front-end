import { Typography, Paper } from "@material-ui/core"
import { Link } from "react-router-dom"

import './styles.css'

const Reviews = () => {
    return (
        <>
        <div className='container'>
            <Paper className='pic'>
            </Paper>

            <Link className='title' to='#'>
            <Paper className='titlepaper'>
                <Typography className='title-typo' variant='h3' >
                    Reviews
                </Typography>
                <Typography className='title-typo' variant='body1' >
                    We bring the season's best mix of organic produce and hand-crafted farm products conveniently to your door by growing and partnering with local farms and artisans in your area.
                </Typography>
                <Typography className='title-typo' variant='h5' >
                    - jhon doe
                </Typography>
            </Paper>
            </Link>

            

        </div>
        
        </>
    )
}

export default Reviews
