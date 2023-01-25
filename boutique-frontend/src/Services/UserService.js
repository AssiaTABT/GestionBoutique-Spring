
import axios from 'axios';

const User_API_Base_URL = "http://localhost:8080/api/v1/Users"
class UserService{

   getUser(){
    return axios.get(User_API_Base_URL);
   } 

   CreateUser(user){
      return axios.post(User_API_Base_URL, user);
   }

   getUserById(userId){
      return axios.get(User_API_Base_URL + '/' + userId);
   }

   UpDateUser(user, userId){
      return axios.put(User_API_Base_URL + '/' + userId, user);
   }

   DeleteUser(userId){
      return axios.delete(User_API_Base_URL + '/' + userId);
   }
}

export default new UserService()