import React from "react";
import {connect} from "react-redux";

class User extends React.Component {
   render(){
       return (
           <div>
                       <h1>Second Container is Connected Here </h1>
                       <h4>The User Page Is Below: </h4>
                       <p>User Name: {this.props.user.name}</p>
           </div>
       );
   }
}


const mapStateToProps = (state) => {
    return {
        user: state.User
    };
};

export default connect(mapStateToProps)(User);