import axios from 'axios';

export const loginCall=async (userCredentials,dispatch)=>{
  const URI = process.env.REACT_APP_URI;
    dispatch({type:" LOGIN_START"});
    try{
  const res=await axios.post(`${URI}/auth/login`,userCredentials);
  dispatch({type:"LOGIN_SUCCESS",payload:res.data});
    }catch(err){
        dispatch({type:"LOGIN_FAILURE",payload:err});
    } 
}