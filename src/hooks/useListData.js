import {useCallback, useState} from "react";
import {get} from "@/core/httpClient";

const useListData = (url) => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({});

    const getData = useCallback(async (url) => {
        setLoading(true);

        let params;
        console.log(`Request URL: ${url}, Params:${params}`);
        let result = await get(url);

        setData(result.data);
        setLoading(false);
    }, [url]);

    return {getData, loading, data};
}

export default useListData;