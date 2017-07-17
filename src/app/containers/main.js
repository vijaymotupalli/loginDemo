import React from "react";
import { setLoginSuccess } from "../actions/index";
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import Menu from './menu'
import Timetracker from './calendar'
import  User  from "./user";
import {Title} from "../components/title";
import { BrowserRouter,Route ,Redirect} from 'react-router-dom'
import './styles.css'

class Main extends React.Component {
    constructor(props) {
        super(props);
        if(localStorage.getItem("userToken")){
            this.props.setLoginSuccess(true);
        }
    }
    render(){
        let {isLoginPending, isLoginSuccess, loginError,match} = this.props;
        return (
            <div>
                { !isLoginSuccess && <Redirect to={{pathname: '/'}}/>}
                <div className="vertical-menu-div">
                    <Route  component={Menu} />
                </div>
                <div className="menu-conetent-container">
                    <Route exact  path={match.url+'/user'} component={User} />
                    <Route exact  path={match.url} component={Title} />
                    <Route exact  path={match.url+'/timetracker'} component={Timetracker} />
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