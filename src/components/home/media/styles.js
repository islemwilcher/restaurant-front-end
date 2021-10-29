import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    container: {
        backgroundColor: 'rgb(8, 1, 1)',
        display: 'flex',
        justifyContent: 'space-evenly'
        
    },
    grid: {
        padding: '30px',
        width: '40%',
        color: 'white',
    },
    socialmedia: {
        margin: 'auto',
    },
    food: {
        margin: 'auto 60px',
        fontSize: '120px',
        color: 'orange',
    },
    
[theme.breakpoints.down('sm')]: {

},
}));