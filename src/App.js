import { Switch, BrowserRouter as Router } from 'react-router-dom'
import { Paper } from '@material-ui/core'

import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
function App() {
  return (
    <><Router>
      <Paper>
        <Navbar />
      </Paper>
      <Home />
      <Switch>

      </Switch>
      </Router>
    </>
  );
}

export default App;
