import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export const useGetNades = (mapName?: string, nadeName?: string) => {
    return useQuery({
        queryKey: ['maps', mapName, nadeName],
        queryFn: async () => {
            const { data } = await axios.get(`/api/nadesPositions/${mapName}/${nadeName}`);
            return data as any;
        }
    })
}