import React from "react";
import { login,setLoginSuccess,googleLogin } from "../actions/index";
import {connect} from "react-redux";
import { BrowserRouter,Route ,Redirect} from 'react-router-dom'
import GoogleLogin from 'react-google-login';
import './styles.css';

class Login extends React.Component {
    constructor(props) {
        super(props);

        if(localStorage.getItem("userToken")){
            this.props.setLoginSuccess(true);
        }
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
    onResponseGoogle(response){
        console.log(response);
        if(response.profileObj.email)this.props.googleLogin(response.profileObj.email);

    }
    render(){
        let {isLoginPending, isLoginSuccess, loginError} = this.props;
        return (
            <div>
                { isLoginSuccess && <Redirect to={{pathname: '/app/user'}}/>}
                <div className="bgLogin">
                    <div className="logo">
                    </div>
                    <section className="login">
                        <h2>Login</h2>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group pr">
                                <input type="text" className="form-control" placeholder="Username" name="username"
                                       onChange={e => this.setState({email: e.target.value})} value={this.state.email}
                                       required/>
                                <i className="mdi mdi-account"></i>
                            </div>
                            <div className="form-group pr">
                                <input type="password" className="form-control" placeholder="Password" name="password"
                                       onChange={e => this.setState({password: e.target.value})}
                                       value={this.state.password} required/>
                                <i className="mdi mdi-lock"></i>
                            </div>
                            <div className="text-center">
                                <label className="errorcolor">
                                    { isLoginPending && <div>Please wait...</div>  }
                                    { isLoginSuccess && <div>Success.</div> }
                                    { loginError && <div>{loginError.message}</div> }
                                </label>
                            </div>
                            <div className="form-group text-center">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <GoogleLogin
                                         clientId="838976054256-mmc4cgm3eaoa0jrat1ph928lekpjiqvg.apps.googleusercontent.com"
                                         buttonText="Google Login"
                                         style={{
                                             fontSsize: 14,
                                             width: "100%",
                                             border: 0,
                                             borderRadius: 0,
                                             padding:[10,0],
                                             margin: [20, 0, 0, 0],
                                             background: "#fb1717",
                                             textTransform: "uppercase",
                                             color: "white"
                                         }}
                                         onSuccess={this.onResponseGoogle.bind(this)}
                                         onFailure={this.onResponseGoogle.bind(this)}
                            />
                            <div className="row">
                                <div className="col-md-6">
                                    <label><input type="checkbox" name="rememberMe" value="1"/>Remember Password</label>
                                </div>
                                <div className="col-md-6 text-right">
                                </div>
                            </div>
                        </form>
                    </section>
                </div>

            </div>

        )
    }
};

const mapStateToProps = (state) => {
    console.log("----state----",state)
    return {
        isLoginPending: state.Login.isLoginPending,
        isLoginSuccess: state.Login.isLoginSuccess,
        loginError: state.Login.loginError
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        setLoginSuccess: (status) => dispatch(setLoginSuccess(status)),
        login: (email, password) => dispatch(login(email, password)),
        googleLogin: (email) => dispatch(googleLogin(email)),
    };
}



export default connect(mapStateToProps, mapDispatchToProps)(Login);
