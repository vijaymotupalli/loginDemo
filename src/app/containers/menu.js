import React from "react"
import {Route, Link ,Switch} from 'react-router-dom';
import './styles.css';

class Menu extends React.Component{
    constructor(props){
        super(props)
    }
    onSubmit(e){
      localStorage.clear()
        this.context.history.push("/");
    }
    render(){
        const {match} = this.props
        return (
                <div className="vertical-menu" style={{position:"relative",width:"100%"}}>
                    <Link to="/app" >Home</Link>
                    <Link to={match.url + '/user'} >User</Link>
                    <Link to={match.url + '/timetracker'} >Time Tracker</Link>
                    <Link to={match.url + '/signout'} onClick={this.onSubmit}>Signout</Link>
                </div>

        )
    }

}


export default Menu;