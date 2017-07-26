import React from 'react';
import  GoogleLogin  from 'react-google-login';

class Google extends React.Component{

    constructor (props) {
        super(props);
    }

    responseGoogle (googleUser) {
        console.log(googleUser);
        //anything else you want to do(save to localStorage)...
    }

    render () {
        return (
            <div>
                <GoogleLogin
                    clientId="838976054256-mmc4cgm3eaoa0jrat1ph928lekpjiqvg.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                />,
            </div>
        );
    }

}

export default Google;