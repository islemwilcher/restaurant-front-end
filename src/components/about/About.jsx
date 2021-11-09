import { Container, Paper, Typography } from '@material-ui/core'
import React from 'react'

import useStyles from './styles'

const About = () => {
    const classes = useStyles()
    return (
        <Container>
            <Paper className={classes.paper}>
                <Typography className={classes.title} variant='h2'>About</Typography>
                <Typography className={classes.typo} variant='body1'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop</Typography>
                <Typography className={classes.typo} variant='h6'>- breakfast</Typography>
                <Typography className={classes.typo} variant='h6'>- lunch</Typography>
                <Typography className={classes.typo} variant='h6'>- diner</Typography>
            </Paper>
        </Container>
    )
}

export default About
