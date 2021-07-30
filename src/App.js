import "tailwindcss/tailwind.css"
import Screen1 from './views/Screen1'
import Screen2 from './views/Screen2'
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
      <Switch>
        <Route exact path='/' component={Screen1}/>
        <Route path='/detail' component={Screen2}/>
      </Switch>
     );
}

export default App;
