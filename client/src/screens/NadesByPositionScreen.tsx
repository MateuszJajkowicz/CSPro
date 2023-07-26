import { useParams } from 'react-router-dom';
import { useGetNadesByMapNadeTypeAndPosition } from '../hooks/useGetNades';
import { Nade } from '../models/nade.model';
import NadeTile from '../components/NadeTile';
import classes from './NadesByPositionScreen.module.css';

const NadesByPositionScreen = () => {
  const { map, nadeType, endPosition } = useParams();

  const { data } = useGetNadesByMapNadeTypeAndPosition(
    map,
    nadeType,
    endPosition
  );

  //   data && console.log(data);

  const renderDivs = () => {
    return data?.map((item: Nade, index: number) => {
      return <NadeTile nade={item} key={index}></NadeTile>;
    });
  };

  return <div className={`grid ${classes.grid}`}>{data && renderDivs()}</div>;
};

export default NadesByPositionScreen;
