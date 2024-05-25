import { useSearchParams } from "react-router-dom";

export const useQueryParams = (callback = null) => {
	const [searchParams] = useSearchParams();
	const params = Object.fromEntries([...searchParams]);
    if(typeof callback === "function"){
        return callback(params);
    }
	return params;
};
