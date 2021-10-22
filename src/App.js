import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import { Paper } from '@material-ui/core'
import Navbar from './components/navbar/Navbar';
function App() {
  return (
    <><Router>
      <Paper>
        <Navbar />
      </Paper>
      
      <Switch>

      </Switch>
      </Router>
    </>
  );
}

export default App;
