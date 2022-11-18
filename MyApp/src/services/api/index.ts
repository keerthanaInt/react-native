const BASE_URL = 'url';
import axios from 'axios';

export const GETAPI = async (endPoint: string) => {
    let url = BASE_URL + endPoint;

    let response = await axios.get(url);
    const { data, status, statusText } = response;
    return { data, status, statusText };
};


export const POSTAPI = async (endPoint: string, postData = {}) => {
    let url = BASE_URL + endPoint;

    let response = await axios.post(url, postData);
   
    const { data, status, statusText } = response;
    return { data, status, statusText };
};



export const PUTAPI = async (endPoint: string, postData = {}) => {
    let url = BASE_URL + endPoint;

    let response = await axios.put(url, postData);

    const { data, status, statusText } = response;
    return { data, status, statusText };
};


export const PATCHAPI = async (endPoint: string, postData = {}, token = null) => {
    let url = BASE_URL + endPoint;
    let headersObj = {}
    if (token) {
        headersObj = {
            'Authorization': `Bearer ${token}`
        }
    }
    let response = await axios.patch(url, postData, { headers: headersObj });
    const { data, status, statusText } = response;
    return { data, status, statusText };
}

export const DELETEAPI = async (endPoint: string, token = null) => {
    let url = BASE_URL + endPoint;
    let headersObj = {}
    if (token) {
        headersObj = {
            'Authorization': `Bearer ${token}`
        }
    }
    let response = await axios.delete(url, { headers: headersObj });
    const { data, status, statusText } = response;
    return { data, status, statusText };
}