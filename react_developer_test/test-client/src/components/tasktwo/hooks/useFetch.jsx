import { useEffect, useState } from "react";

const useFetch = (url, paramName) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                var param = new URL(url).searchParams.get(paramName);
                if (param !== "null") {
                    setLoading(true);
                    const response = await fetch(url);
                    console.log(response);
                    if (!response.ok) {
                        throw response;
                    }
                    const data = await response.json();
                    console.log(data)
                    setData(data);
                    setLoading(false);
                }
                else setData(null);
            }
            catch (error) {
                setError(error);
                console.log(error);
                setLoading(false);
            };
        })();
    }, [url]);
    return [data, error, loading]
}

export default useFetch;

