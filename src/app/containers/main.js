import React from "react";
import { setLoginSuccess } from "../actions/index";
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import Menu from './menu'
import  User  from "./user";
import {Title} from "../components/title";
import { BrowserRouter,Route ,Redirect} from 'react-router-dom'

class Main extends React.Component {
    constructor(props) {
        super(props);
        if(localStorage.getItem("userToken")){
            this.props.setLoginSuccess(true);
        }
    }
    render(){
        let {isLoginPending, isLoginSuccess, loginError} = this.props;
        return (
            <div>
                { !isLoginSuccess && <Redirect to={{pathname: '/login'}}/>}
                <div className="vertical-menu-div">
                    <Menu/>
                </div>
                <div className="menu-conetent-container">
                    <Route   path="/user" component={User} />
                    <Route exact path="/" component={Title} />
                </div>
            </div>

        );
    }
};

const mapStateToProps = (state) => {
    return {
        isLoginPending: state.Login.isLoginPending,
        isLoginSuccess: state.Login.isLoginSuccess,
        loginError: state.Login.loginError
    };
};


 const mapDispatchToProps = (dispatch)=> {

     return {
         setLoginSuccess: (status) => dispatch(setLoginSuccess(status))
     };

}

export default connect(mapStateToProps,mapDispatchToProps)(Main);