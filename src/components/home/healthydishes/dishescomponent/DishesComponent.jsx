
import { Grid, Typography, CardMedia } from "@material-ui/core"
import useStyles from './styles'

import Frut3 from '../../../../assets/frut3.jpg'

const DishesComponent = ({ reverse }) => {
    const classes = useStyles()
    return (
        <>
            <Grid className={reverse ? classes.grid : classes.gridR}>
                    <div className={classes.content}>
                        <Typography className={classes.title} variant="h3">fruits</Typography>
                        <Typography variant="body1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s</Typography>
                    </div>
                    
                    <Grid className={classes.pic}>
                            <CardMedia className={classes.media} image={Frut3} />
                    </Grid>
                </Grid>
        </>
    )
}

export default DishesComponent
