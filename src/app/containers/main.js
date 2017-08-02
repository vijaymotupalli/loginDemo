import React from "react";
import { setLoginSuccess } from "../actions/index";
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import Menu from './menu'
import newMenu from './newMenu'
import Timetracker from './calendar'
import Newlogin from './newlogin'
import Google from './google.js'
import  User  from "./user";
import  UserDetails  from "./userDetails";
import {Title} from "../components/title";
import {Select} from "../components/addhours";
import { BrowserRouter,Route ,Redirect} from 'react-router-dom'
import './styles.css'

class Main extends React.Component {
    constructor(props) {
        super(props);
        if(localStorage.getItem("accesstoken")){
            this.props.setLoginSuccess(true);
        }
    }
    render(){
        let {isLoginPending, isLoginSuccess, loginError,match} = this.props;
        return (
            <div>
                { !isLoginSuccess && <Redirect to={{pathname: '/'}}/>}
                <div >
                    <Route  component={newMenu} />
                </div>
                <div  id="toggleMenu">
                    <Route exact  path={match.url+'/user'} component={User} />
                    <Route   path={match.url+'/timetracker'} component={Timetracker} />
                    <Route   path={match.url+'/addtime'} component={Select} />
                    <Route exact  path= {match.url+'/userdetails' } component={UserDetails} />
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