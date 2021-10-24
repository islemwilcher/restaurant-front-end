
import { Container, Typography } from "@material-ui/core"
import DishesComponent from "./dishescomponent/DishesComponent"

import useStyles from './styles'

const Dishes = () => {

    const classes = useStyles()

    let reverse = false

    return (
        <Container className={classes.container}>
            <Typography className={classes.typo} variant='h3'> 5 Healthy Smoothie dishes</Typography>
            <DishesComponent reverse={reverse} />
            <DishesComponent reverse={!reverse} />
            <DishesComponent reverse={reverse} />
            <DishesComponent reverse={!reverse} />
            <DishesComponent reverse={reverse} />
        </Container>
    )
}

export default Dishes
