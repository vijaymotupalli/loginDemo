import React from "react";
import {connect} from "react-redux";
import './styles.css';
import {getUsers} from "../actions/index";

class UserDetails extends React.Component {
    constructor(props) {
        super(props);

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
                            <div  className="col-md-4">
                                <div  className="panel panel-default productWidget">
                                    <div  className="panel-heading">
                                        <div  className="row">
                                            <div  className="col-md-9">
                                                <p >Uploaded Products  <strong >0</strong></p>
                                            </div>
                                            <div  className="col-md-3 text-right">
                                                <a  href="javascript:;">View All</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div  className="panel-body">
                                        <div  className="row">
                      <p  className="text-center"> No items found</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div  className="col-md-4">
                                <div  className="panel panel-default productWidget">
                                    <div  className="panel-heading">
                                        <div  className="row">
                                            <div  className="col-md-9">
                                                <p >Liked Products  <strong >0</strong></p>
                                            </div>
                                            <div  className="col-md-3 text-right">
                                                <a  href="javascript:;">View All</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div  className="panel-body">
                                        <div  className="row">
                       <p  className="text-center"> No items found</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div  className="col-md-4">
                                <div  className="panel panel-default productWidget">
                                    <div  className="panel-heading">
                                        <div  className="row">
                                            <div  className="col-md-9">
                                                <p >Favourite Products  <strong >20</strong></p>
                                            </div>
                                            <div  className="col-md-3 text-right">
                                                <a  href="javascript:;">View All</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div  className="panel-body">
                                        <div  className="row">
                                            <div  className="col-md-4">
                                                <div  className="productList">
                                                    <figure >
                                                        <img  src="../../assets/images/prod1.png" />
                                                    </figure>
                                                    <figcaption >
                                                        <p >Zara <span > M</span></p>
                                                        <p >Long Dress</p>
                                                    </figcaption>
                                                </div>
                                            </div>
                                            <div  className="col-md-4">
                                                <div  className="productList">
                                                    <figure >
                                                        <img  src="../../assets/images/prod2.png" />
                                                    </figure>
                                                    <figcaption >
                                                        <p >Gili</p>
                                                        <p >Silver Ring</p>
                                                    </figcaption>
                                                </div>
                                            </div>
                                            <div  className="col-md-4">
                                                <div  className="productList">
                                                    <figure >
                                                        <img  src="../../assets/images/prod3.png" />
                                                    </figure>
                                                    <figcaption >
                                                        <p >Versace</p>
                                                        <p >Hand Bag</p>
                                                    </figcaption>
                                                </div>
                                            </div>
                                        </div>
                                        <div  className="row">
                                            <div  className="col-md-4">
                                                <div  className="productList">
                                                    <figure >
                                                        <img  src="../../assets/images/prod4.png" />
                                                    </figure>
                                                    <figcaption >
                                                        <p >KOOVS <span > S </span></p>
                                                        <p >Long Dress</p>
                                                    </figcaption>
                                                </div>
                                            </div>
                                            <div  className="col-md-4">
                                                <div  className="productList">
                                                    <figure >
                                                        <img  src="../../assets/images/prod5.png" />
                                                    </figure>
                                                    <figcaption >
                                                        <p >Versace</p>
                                                        <p >Hand bag</p>
                                                    </figcaption>
                                                </div>
                                            </div>
                                            <div  className="col-md-4">
                                                <div  className="productList">
                                                    <figure >
                                                        <img  src="../../assets/images/prod6.png" />
                                                    </figure>
                                                    <figcaption >
                                                        <p >Fusion <span > M</span></p>
                                                        <p >Long Dress</p>
                                                    </figcaption>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUsers: () => dispatch(getUsers())
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);