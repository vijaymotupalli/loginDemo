import React from "react";
import { login,setLoginSuccess } from "../actions/index";
import {connect} from "react-redux";
import { BrowserRouter,Route ,Redirect} from 'react-router-dom'

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email:"",
            password:""
        };
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(e) {
        e.preventDefault();
        const { email, password } = this.state;
        this.props.login(email, password);
        this.setState({
            email: '',
            password: ''
        });
    }
    render(){
        let {isLoginPending, isLoginSuccess, loginError} = this.props;
        return (
            <div>
                { isLoginSuccess && <Redirect to={{pathname: '/'}}/>}

                <form className="form-signin" onSubmit={this.onSubmit}>
                    <h2 className="form-signin-heading">Please sign in</h2>

                    <label htmlFor="inputEmail" className="sr-only">Email address</label>
                    <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus
                           onChange={e => this.setState({email: e.target.value})} value={this.state.email}
                    />
                    <label htmlFor="inputPassword" className="sr-only">Password</label>
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" required
                           onChange={e => this.setState({password: e.target.value})} value={this.state.password}
                    />
                    <div className="checkbox">
                        <label>
                            <input type="checkbox" value="remember-me" /> Remember me
                        </label>
                    </div>
                    <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                    <div>
                        { isLoginPending && <div>Please wait...</div>  }
                        { isLoginSuccess && <div>Success.</div> }
                        { loginError && <div>{loginError.message}</div> }
                    </div>
                </form>
            </div>

        )
    }
};

const mapStateToProps = (state) => {
    console.log("----props----",state)
    return {
        isLoginPending: state.Login.isLoginPending,
        isLoginSuccess: state.Login.isLoginSuccess,
        loginError: state.Login.loginError
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        setLoginSuccess: (status) => dispatch(setLoginSuccess(status)),
        login: (email, password) => dispatch(login(email, password))
    };
}



export default connect(mapStateToProps, mapDispatchToProps)(Login);
