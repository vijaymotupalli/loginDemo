import React from "react";
import {connect} from "react-redux";
import './styles.css';
import { getUsers } from "../actions/index";

class User extends React.Component {
    constructor(props){
        super(props);
        this.props.getUsers();
    }
   render(){
       console.log("'------array of users----",this.props.users)
       var temp = this.props.users ? this.props.users :[]
       var listUsers = temp.map(function(user) {
           return (
               <tr>
                   <td><img src={user.profile.picture}/></td>
                   <td>{user.profile.name}</td>
                   <td>{user.profile.email}</td>
                   <td>{user.profile.location ? user.profile.location : ""}</td>
                   <td>{user.createdAt}</td>
               </tr>
           );
       });
       return (
           <div>
               <div>
                   <h3 className="title">Users List</h3>
                   <div className="gridTable" >
                   <table    className="table table-striped table-bordered" cellSpacing="0" width="100%">
                       <thead>
                       <tr>
                           <th>image</th>
                           <th>Name</th>
                           <th>Email</th>
                           <th>City</th>
                           <th>Member Since</th>
                       </tr>
                       </thead>
                       <tbody>
                       {listUsers}
                       </tbody>
                   </table>
               </div>
           </div>
           </div>
       );
   }
}


const mapStateToProps = (state) => {
    console.log("----state----",state)
    return {
        users: state.User.users,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUsers: () => dispatch(getUsers())
    };
}


export default connect(mapStateToProps,mapDispatchToProps)(User);