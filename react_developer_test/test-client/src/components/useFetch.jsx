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

export default useFetch;