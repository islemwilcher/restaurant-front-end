import { Grid, Typography } from "@material-ui/core"
import SocialMedia from "../../socialmedia/SocialMedia"
import {MdOutlineEmojiFoodBeverage, MdFastfood} from 'react-icons/md'
import {IoFastFoodOutline} from 'react-icons/io5'

import useStyles from './styles'

const Media = () => {
    const classes = useStyles()
    return (
        <div className={classes.container}>
        <Grid className={classes.grid}>
            <Typography variant='h4' gutterBottom >
                Fresh Food and Cafe
            </Typography>
            <Typography variant='body1' gutterBottom >
                Our cafe is a family-owned restaurant that has been proudly served around 2010s located on the corner of Broadway and West 112th street in New York
            </Typography>
            <SocialMedia />
            
        </Grid>
            <div className={classes.socialmedia}>
                <a href='#' target='_blank' rel="noreferrer"><IoFastFoodOutline className={classes.food} /></a>
                <a href='#' target='_blank' rel="noreferrer"><MdFastfood className={classes.food}  /></a>
                <a href='#' target='_blank' rel="noreferrer"><MdOutlineEmojiFoodBeverage className={classes.food} /></a>
            </div>
        </div>
    )
}

export default Media
