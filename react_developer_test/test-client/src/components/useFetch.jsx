import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                console.log(data)
                setData(data);
            }
            catch (error) {
                setError(error);
            };
        })();
    }, [url]);
    return [data, error]
}
// useFetch.js
// import { useState, useEffect } from "react";
// import axios from "axios";

// // custom hook for performing GET request
// const useFetch = (url, initialValue) => {
//     const [data, setData] = useState(initialValue);
//     const [loading, setLoading] = useState(true);
//     useEffect(() => {
//         const fetchData = async function () {
//             try {
//                 setLoading(true);
//                 const response = await axios.get(url);
//                 if (response.status === 200) {
//                     setData(response.data);
//                 }
//             } catch (error) {
//                 throw error;
//             } finally {
//                 setLoading(false);
//             }
//         };
//         fetchData();
//     }, [url]);
//     return { data, loading };
// };
export default useFetch;