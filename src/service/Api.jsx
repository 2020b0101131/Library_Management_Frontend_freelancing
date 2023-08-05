import axios from "axios";

const URL = process.env.REACT_APP_URL;
///////////////////////////////////////////////////////////////
export const addUser = async (data) => {
  try {
    
    return await axios.post(`${URL}/adduser`, data);
  } catch (error) {
    console.log("Error in addUser", error);
  }
};
////////////////////////////////////////////////////////////////
export const getUsers = async () => {
  try {
    return await axios.get(`${URL}/all`);
  } catch (error) {
    console.log("Error while getUser", error);
  }
};
////////////////////////////////////////////////////////////////
export const getUser = async (id) => {
  try {
    return await axios.get(`${URL}/${id}`);
  } catch (error) {
    console.log("error while getting a single user", error);
  }
};
////////////////////////////////////////////////////////////////
export const editUser = async (user, id) => {
  try {
    return await axios.put(`${URL}/${id}`, user);
  } catch (error) {
    console.log("Error during editUser api", error);
  }
};
////////////////////////////////////////////////////////////////
export const deleteUser = async (id) => {
  try {
    return await axios.delete(`${URL}/${id}`);
  } catch (error) {
    console.log("Error while using deleteUser api", error);
  }
};
///////////////////////////////////////////////////////////////
export const registerUser=async(data)=>{
  try{
    return await axios.post(`${URL}/registeruser`,data);
  }catch(error){
    console.log("Error while registerUser",error);
  }
}
///////////////////////////////////////////////////////////////
export const loginUser=async(data)=>{
  try{
    return await axios.post(`${URL}/loginuser`,data);
  }catch(error){
    console.log("Error while loginUser",error);
  }
}
/////////////////////////////////////////////////////////////
export const userProfile=async()=>{
  try{
    return await axios.get(`${URL}/userprofile`)
  }catch(error){
    console.log("Error while getProfile",error);
  }
}
