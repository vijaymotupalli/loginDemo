var axios = require('axios');

axios.defaults.baseURL = 'http://54.254.175.129:9000';
axios.defaults.headers.common['accesstoken'] = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MDE5NDg1ODAwNTYsInVzZXIiOnsiX2lkIjoiNTk2ZjU5MjM0OWU4MmQxNzI0OGExMWRhIiwidXBkYXRlZEF0IjoiMjAxNy0wNy0yOFQyMTo1MjoxNy4xMTlaIiwiY3JlYXRlZEF0IjoiMjAxNy0wNy0xOVQxMzowNTozOS4wNjFaIiwiZW1haWwiOiJhZG1pbkBzcHVydHJlZXRlY2guaW4iLCJyb2xlcyI6W3siX2lkIjoiNTk1MjQ4ZTk4YTgzMTcxZmIwOGFhMWNlIiwicm9sZSI6IlNVUEVSX0FETUlOIiwiZGlzcGxheV9uYW1lIjoiU3VwZXIgQWRtaW4iLCJwcml2aWxlZ2VzIjpbIk9SR19BREQiLCJBUFBfQUREIiwiQURNSU5fQUREIl19LHsiX2lkIjoiNTk1MjQ5MzMwMzdkMDYxNTU0ZDIwYTgyIiwicm9sZSI6IkFETUlOIiwiZGlzcGxheV9uYW1lIjoiQWRtaW4iLCJwcml2aWxlZ2VzIjpbIk9SR19BREQiLCJBUFBfQUREIiwiQURNSU5fQUREIl19XSwibmFtZSI6InNwdXJUcmVlIiwibGFzdExvZ2luIjoiMjAxNy0wNy0yOFQyMTo1MjoxNy4xMTlaIiwiaXNBY3RpdmUiOnRydWV9fQ.PyzBJdEzFO0FsroYsdCDszLx5vRMyuwys5qaiLf-rMA";
axios.defaults.headers.post['Content-Type'] = 'application/json';

import {SET_LOGIN_PENDING,SET_LOGIN_SUCCESS,SET_LOGIN_ERROR} from './types'


export function setName(name) {
    return {
        type: "SET_NAME",
        payload: name
    };
}
function setLoginPending(isLoginPending) {
    return {
        type: SET_LOGIN_PENDING,
        isLoginPending
    };
}

export function setLoginSuccess(isLoginSuccess) {
    return {
        type: SET_LOGIN_SUCCESS,
        isLoginSuccess
    };
}

function setLoginError(loginError) {
    return {
        type: SET_LOGIN_ERROR,
        loginError
    }
}
export function login(email, password) {
     return  dispatch => {
        dispatch(setLoginPending(true));
        dispatch(setLoginSuccess(false));
        dispatch(setLoginError(null));

         axios.post('/login', {
             email: email,
             password: password
         })
             .then(function (response) {
                 console.log("-----response from-----",response);
                 dispatch(setLoginPending(false));
                 localStorage.setItem("accesstoken",response.data.accesstoken);
                 dispatch(setLoginSuccess(true));
             })
             .catch(function (error) {
                 console.log("----iam in error----",error)
                 dispatch(setLoginPending(false));
                 if(error)dispatch(setLoginError("Invalid Credentials"));
             });
    }
}
export function getUsers() {
    return  dispatch => {
        axios.get('/api/users/20/460')
            .then(function(response) {
                dispatch(setUsersData(response.data.users))
            });
    }
}
export function getUserUploadedItems(userId) {

    var userItemsUrl = "api/users/likeditems/"+userId
    console.log("-----userid----",userItemsUrl)
    return  dispatch => {
        axios.get(userItemsUrl)
            .then(function(response) {
                console.log("-----got data----",response.data)
                dispatch(setUserUploadedItems(response.data))
            });
    }
}
export function setUserUploadedItems(userUploadedItems) {

    return {
        type: "SET_USER_UPLOADED_ITEMS",
        payload:userUploadedItems
    }
}
export function setUsersData(usersData) {

    return {
        type: "SET_USERS_DATA",
        payload:usersData
    }
}
export function selectedUserData(selectedUserData) {

    return {
        type: "SELECTED_USER_DATA",
        payload:selectedUserData
    }
}

export function googleLogin(email) {

    return  dispatch => {
        dispatch(setLoginPending(true));
        dispatch(setLoginSuccess(false));
        dispatch(setLoginError(null));

        callLoginApi(email, "admin", error => {
            dispatch(setLoginPending(false));
            if (!error) {
                localStorage.setItem("userToken",email);
                dispatch(setLoginSuccess(true));
            } else {
                dispatch(setLoginError(error));
            }
        });
    }
}
