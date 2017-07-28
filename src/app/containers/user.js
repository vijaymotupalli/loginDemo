import React from "react";
import {connect} from "react-redux";
import './styles.css';
import { getUsers,selectedUserData } from "../actions/index";
import {Route, Link, Switch} from 'react-router-dom';

class User extends React.Component {
    constructor(props){
        super(props);
        this.props.getUsers();
    }
    selectedUser(user){
        const {context,history} = this.props
        console.log("test",user)
        this.props.selectedUserData(user);
        history.push('userdetails')
        console.log(this.props)
    }
   render(){
       const {match} = this.props
       console.log("'------array of users----",this.props.users)
       var temp = this.props.users ? this.props.users :[]
       var listUsers = temp.map(function (user) {
           return (
               <tr key={user.createdAt} onClick={()=>this.selectedUser(user)}>
                   <td><img src={user.profile.picture}/></td>
                   <td>{user.profile.name}</td>
                   <td>{user.profile.email}</td>
                   <td>{user.profile.location ? user.profile.location : ""}</td>
                   <td>{user.createdAt}</td>
               </tr>

           );
       },this);
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
        getUsers: () => dispatch(getUsers()),
        selectedUserData: (data) => dispatch(selectedUserData(data)),
    };
}


export default connect(mapStateToProps,mapDispatchToProps)(User);