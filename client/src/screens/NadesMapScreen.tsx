import { useLocation } from 'react-router-dom';

const NadesMapScreen = () => {
  const location = useLocation();
  const map =
    location.pathname.split('nades/')[1].charAt(0).toUpperCase() +
    location.pathname.split('nades/')[1].slice(1);

  return (
    <div>
      <hgroup>
        <h1>Nades</h1>
        <h2>{map}</h2>
      </hgroup>
    </div>
  );
};

export default NadesMapScreen;
