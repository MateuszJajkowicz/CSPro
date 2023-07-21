import { Link } from 'react-router-dom';

const MapTile = ({ name }: { name: string }) => {
  return (
    <>
      <Link to={`/nades/${name}`}>
        <figure>
          <img
            src={`/images/thumbnails/${name}.jpg`}
            alt={`${name}`}
            className='tile-img'
          />
          <figcaption>{name[0].toUpperCase() + name.slice(1)}</figcaption>
        </figure>
      </Link>
    </>
  );
};

export default MapTile;
