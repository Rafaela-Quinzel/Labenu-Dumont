import { useState, useEffect } from 'react'
import axios from 'axios'


export const useRequestData = (url, initialState) => {
    const [data, setData] = useState(initialState);

    const axiosConfig = {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    }

    useEffect(() => {
        axios.get(url, axiosConfig).then(response => {
            setData(response.data);
        }).catch(error => {
            console.log(error.message);
        })    
    }, [url]);

    return data;   
}; 