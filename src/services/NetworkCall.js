import axios from "axios";

const baseUrl = process.env.REACT_APP_baseUrl;

// const getHeader = () => {
//     const authToken = localStorage.getItem("authToken");
//     const headers = {
//         Authorization: "Bearer " + authToken, //the token is a variable which holds the token
//     };

//     return headers;
// };

const postRequest = async (path, data) => {
    let res = {
        success: false,
        message: "Something went wrong, please try again later",
    };
    try {
        const response = await axios({
            method: "POST",
            url: `${baseUrl}${path}`,
            data,
            // headers: getHeader(),
        });
        res = response.data;
    } catch (err) {
        res.message = err.response?.data.message || err.message;
        return res;
    }
    return res;
};



//common login api for admin and super visor
export const submitContactUsForm = async (data) => {
    const path = "/contact/submitContactForm";
    return await postRequest(path, data);
};

















