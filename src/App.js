import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch ,Link} from 'react-router-dom';
import Main from "./Main"


const App = () => {
    return (
      
            <Router>
             
            <div  className="container h-100 d-flex justify-content-center">

            <button >
              <Link to="/about">About</Link>
            </button>
            
            <button>
              <Link to="/todo">Home</Link>
            </button>
            <button>
              <Link to="/email">Email</Link>
            </button>
            </div>
                  
                  <Switch>
                   
                  <Route  path='/email'>
                  <Main />
                 </Route >
                 
                  </Switch>
            
           
            </Router>
    
          
    );
  };
  
  export default App;