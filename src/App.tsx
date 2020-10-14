import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {SignIn} from "./pages/Signin";
import {Home} from "./pages/Home";

function App() {
  return (
    <div className="App">
        <Switch>
            <Route path="/signin" compopnent={SignIn}/>
            <Route path="/" compopnent={Home}/>
        </Switch>
    </div>
  );
}

export default App;
