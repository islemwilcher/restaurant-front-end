
import { Typography } from '@material-ui/core'
import './healthy.css'

const Healthy = () => {
    return (
        <div className='container'>
            <div className='title'>
                <Typography className='title-typo' variant='h3' >
                    20 Healthy<br />
                    Smoothie<br />
                    dishes we made
                </Typography>
            </div>
            <div className='pic'></div>
            <div className='about'>
                <Typography variant='body1' >
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                </Typography>
            </div>
        </div>
    )
}

export default Healthy
