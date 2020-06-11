import axios from "axios";
import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from "./userTypes";

export const fetchUsersRequest = () => {
      return {
            type: FETCH_USERS_REQUEST
      }
}

const fetchUsersSuccess = users => {
      return{
            type: FETCH_USERS_SUCCESS,
            payload: users
      }
}

const fetchUsersFailure = error => {
      return{
            type: FETCH_USERS_FAILURE,
            payload: error
      }
}


export const fetchUsers = () => {
      return function(dispatch) {
            //this sets loading to true!
            dispatch(fetchUsersRequest())
            axios.get("https://jsonplaceholder.typicode.com/users")
            .then( response =>{
                  // response.data is the array description
                  const users = response.data.map(user => user.id)
                  dispatch(fetchUsersSuccess(users))
                  console.log("hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii" + users )
            })
            .catch(error => {
                  // error message is the description
                  const errorMsg = error.message
                  dispatch(fetchUsersFailure(errorMsg))
            })
      }
      console.log("hoooooooooooooooooooooooi" +fetchUsers())
}
