import React from "react";
import {connect} from "react-redux";

class User extends React.Component {
   render(){
       return (
           <div>
               <div className="row">
                   <div className="col-xs-12">
                       <h1>Second Container Which Connected To State</h1>
                       <h4>The User Page</h4>

                   </div>
               </div>
               <div className="row">
                   <div className="col-xs-12">
                       <p>User Name:{this.props.user.name} </p>
                   </div>
               </div>
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