import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export const useGet = (mapName: string) => {
    return useQuery({
        queryKey: ['maps', mapName],
        queryFn: async () => {
            const { data } = await axios.get(`/api/nadesPositions/${mapName}`);
            return data as any;
        }
    })
}