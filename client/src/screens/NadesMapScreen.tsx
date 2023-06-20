import { useLocation } from 'react-router-dom';
import { useGet } from '../hooks/useGet';

const NadesMapScreen = () => {
  const location = useLocation();
  const mapName =
    location.pathname.split('nades/')[1].charAt(0).toUpperCase() +
    location.pathname.split('nades/')[1].slice(1);
  
  const { data, isLoading } = useGet(mapName.toLowerCase());
  console.log(data);
  console.log(isLoading);

  return (
    <div>
      <hgroup>
        <h1>Nades</h1>
        <h2>{mapName}</h2>
      </hgroup>
    </div>
  );
};

export default NadesMapScreen;
