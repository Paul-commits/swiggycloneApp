import { useState, useEffect } from 'react';
import { UseFetch, UseFetchResponse } from '../Types/Interface';

const useFetch = <T extends unknown>({ url }: UseFetch) => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let isMounted = true;

        const fetchData = async () => {
            setLoading(true);
            try {
                const resp = await fetch(url);
                const result = await resp.json();
                if (isMounted) {
                    setData(result);
                }
            } catch (err) {
                if (isMounted) {
                    console.error(err);
                    setError(err instanceof Error ? err.message : 'An unknown error occurred');
                }
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        };

        fetchData();

        return () => {
            isMounted = false;
        };
    }, [url]);

    return { data, loading, error };
};

export default useFetch;
