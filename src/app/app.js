import  React from "react";
import  User  from "./containers/user";
import  Main  from "./containers/main";
import  Login  from "./containers/login";
import  newLogin  from "./containers/newlogin";
import {Title} from "./components/title";
import { BrowserRouter,Route ,Redirect} from 'react-router-dom'
class App extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div >
                <Route exact path="/" component={newLogin} />
                <Route  path="/app" component={Main} />
            </div>
        );
    }
}

export default App;
