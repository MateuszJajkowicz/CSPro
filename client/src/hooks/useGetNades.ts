import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { NadePosition } from '../models/nadePosition.model';
import { Nade } from '../models/nade.model';

export const useGetNadesPositionsByMapAndNadeType = (mapName?: string, nadeType?: string) => {
    return useQuery({
        queryKey: ['maps', mapName, nadeType],
        queryFn: async () => {
            const { data } = await axios.get(`/api/nadesPositions/${mapName}/${nadeType}`);
            return data as NadePosition[];
        }
    })
}

export const useGetNadesByMapNadeTypeAndPosition = (mapName?: string, nadeType?: string, endPosition?: string) => {
    return useQuery({
        queryKey: ['maps', mapName, nadeType],
        queryFn: async () => {
            const { data } = await axios.get(`/api/nades/${mapName}/${nadeType}/${endPosition}`);
            return data as Nade[];
        }
    })
}