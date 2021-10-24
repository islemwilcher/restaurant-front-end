
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import { Paper } from '@material-ui/core'

import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import Dishes from './components/home/healthydishes/Dishes';

function App() {
  return (
    <>
      <Router>
        <Paper>
          <Navbar />
        </Paper>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/healthydishes' exact component={Dishes} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
