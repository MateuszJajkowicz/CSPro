import { useParams } from 'react-router-dom';
import { useGetNadesByMapNadeTypeAndPosition } from '../hooks/useGetNades';

const NadesByPositionScreen = () => {
    const { map, nadeType, endPosition } = useParams()

    const { data } = useGetNadesByMapNadeTypeAndPosition(map, nadeType, endPosition);

    data && console.log(data)

    return (
        <div>NadesByPositionScreen</div>
    )
}

export default NadesByPositionScreen