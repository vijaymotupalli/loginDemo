import React from "react";
import {connect} from "react-redux";
import './styles.css';
import {getUsers,getUserUploadedItems} from "../actions/index";
import {Products} from "../components/products"

class UserDetails extends React.Component {
    constructor(props) {
        super(props);
        this.props.getUserUploadedItems(props.selectedUser._id);
        console.log("-----props in userdetails-----",props)
    }
    render() {
        return (
            <div className="container-fluid">
                <h3  className="title">User Details</h3>
                <div  className="row">
                    <div  className="col-md-12">
               <div  className="cardWidget">
                        <div  className="cardTop">
                            <div  className="row">
                                <div  className="col-md-4">
                                    <label >C 5000</label>
                                </div>
                                <div  className="col-md-4 text-center">
                                    <figure >
                                        <img  src={this.props.selectedUser.profile.picture} />
                                    </figure>
                                    <figcaption >{this.props.selectedUser.profile.name} </figcaption>
                                </div>
                                <div  className="col-md-4 text-right">
                                    <button  className="btn blackButton">Edit</button>
                                    <button  className="btn blackButton">Delete User</button>
                                </div>
                            </div>
                        </div>
                        <div  className="cardBottom">
                            <div  className="row">
                                <div  className="col-md-4">
                                    <p ><strong >Email</strong> <span >{this.props.selectedUser.profile.email}</span></p>
                 <p ><strong >City </strong> <span >{this.props.selectedUser.profile.location}</span></p>
                                </div>
                                <div  className="col-md-4 text-center">
                                    <p ><strong >Date of Joining</strong> <span >{this.props.selectedUser.createdAt}</span></p>
                                    <p ><strong >Active </strong> <span >Yes </span></p>
                                </div>
                                <div  className="col-md-4 text-right">
                                </div>
                            </div>
                        </div>
                    </div>
                        <div  className="row">
                            {this.props.userItems.likedItems && <Products items={this.props.userItems} title="Uploaded Items"/> }
                        </div>
                    </div>
                </div>

            </div>

        )
    }
}


const mapStateToProps = (state) => {
    console.log("----userdetails state----", state)
    return {
        selectedUser: state.User.selectedUser,
        userItems:state.User.userUploadedItems
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUsers: () => dispatch(getUsers()),
        getUserUploadedItems:(userId)=> dispatch(getUserUploadedItems(userId))
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);