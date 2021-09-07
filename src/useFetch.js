import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCtrl = new AbortController();
        setTimeout(() => {
            fetch(url, { signal: abortCtrl.signal })
                .then(response => {
                    // console.log(response);
                    if (!response.ok) {
                        throw Error('could not fetch the data for resources!');
                    }
                    return response.json()
                })
                .then(data => {
                    // console.log(data);
                    setData(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch(err => {
                    if (err.name === 'AbortError') {
                        console.log('fetch aborted');
                    } else {
                        setIsPending(false);
                        setError(err.message);
                    }
                })
        }, 2000);
        // return () => console.log('cleanup');
        return () => abortCtrl.abort();
    }, [url]);
    return { data, isPending, error }
}

export default useFetch;