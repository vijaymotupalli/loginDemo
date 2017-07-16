import React from "react"
import {Route, Link ,Switch} from 'react-router-dom';

import './styles.css';

class Menu extends React.Component{
    onSubmit(e){
      localStorage.clear()
    }
    render(){
        return (
                <div className="vertical-menu" style={{position:"relative",width:"100%"}}>
                    <Link to="/" >Home</Link>
                    <Link to="/user" >User</Link>
                    <Link to="/signout" onClick={this.onSubmit}>Signout</Link>
                </div>

        )
    }

}
export default Menu