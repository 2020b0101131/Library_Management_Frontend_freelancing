import axios from "axios";

const URL = process.env.REACT_APP_URL;
// <======================Candidate CRUD API======================>
export const addUser = async (data) => {
  try {
    // console.log("api service::",data);
    return await axios.post(`${URL}/candidates/add`, data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.log("Error in addUser", error);
  }
};
export const getStatusMenu = async () => {
  try {
    return await axios.get(`${URL}/statuses`);
  } catch (error) {
    console.log("Error in getStatusMenu", error);
  }
};
////////////////////////////////////////////////////////////////
export const getUsers = async () => {
  try {
    return await axios.get(`${URL}/candidates/all`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.log("Error while getUser", error);
  }
};
////////////////////////////////////////////////////////////////
export const getUser = async (id) => {
  console.log("getUser", id);
  try {
    return await axios.get(`${URL}/candidates/${id}`,{
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    });//Getting single candidate for showing data to user on edit
  } catch (error) {
    console.log("error while getting a single user", error);
  }
};
////////////////////////////////////////////////////////////////
export const editUser = async (user, id) => {
  try {
    return await axios.put(`${URL}/candidates/edit/${id}`, user, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.log("Error during editUser api", error);
  }
};
////////////////////////////////////////////////////////////////
export const deleteUser = async (id) => {
  try {
    return await axios.delete(`${URL}/candidates/delete/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.log("Error while using deleteUser api", error);
  }
};

// <======================Register/Login API======================>

export const registerUser = async (data) => {
  console.log("Testing Test")
  try {
   
    return await axios.post(`${URL}/users/register`, data);
  } catch (error) {
    console.log("Error while registerUser", error);
  }
};
///////////////////////////////////////////////////////////////
export const loginUser = async (data) => {
  try {
    return await axios.post(`${URL}/users/login`, data);
  } catch (error) {
    console.log("Error while loginUser", error);
  }
};

/////////////////////////////////////////////////////////////
export const userProfile = async () => {
  try {
    return await axios.get(`${URL}/userprofile`);
  } catch (error) {
    console.log("Error while getProfile", error);
  }
};

// <======================Question API======================>
export const addQuestion = async (data) => {
  try {
    return await axios.post(`${URL}/questions/add`, data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.log("Error while add question", error);
  }
};
///////////////////////////////////////////////
export const display = async (pageId) => {
  try {
    return await axios.get(`${URL}/questions/${pageId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.log("Error while get Question", error);
  }
};
////////////////////////////////////////////////////////////////
export const deleteQuestion = async (id) => {
  try {
    return await axios.delete(`${URL}/questions/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.log("Error while using delete Question api", error);
  }
};
// <======================Candidate Profile API======================>
  export const addProfile = async (data) => {
    try {
      return await axios.patch(`${URL}/dashboard/add-profile`, data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          // "Content-Type": "multipart/form-data",
        },
      });
    } catch (error) {
      console.log("Error while adding profile info", error);
    }
  };
  ///////////////////////////////////////////////
  export const displayProfile = async (pageId) => {
    try {
      return await axios.get(`${URL}/dashboard/profile`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.log("Error while get Profile info", error);
    }
  };
