import { useQuery } from "@tanstack/react-query"
import { useAxios } from "../useAxios/useAxios"



interface queryPropType{
    url:string,
    queryKey:string
}

export const useQueryHandeler = (props:queryPropType) => {
    const { url , queryKey } = props
    const axios = useAxios()
    return useQuery({
        queryKey:[queryKey],
        queryFn:()=> axios({ url , method:"GET" })
    })
}