import MapTile from './MapTile';

const MapPool = () => {
  return (
    <>
      <section>
        <h2>Active Duty Map Pool</h2>
        <div className='grid'>
          <MapTile name={'ancient'} />
          <MapTile name={'anubis'} />
          <MapTile name={'inferno'} />
          <MapTile name={'mirage'} />
          <MapTile name={'nuke'} />
          <MapTile name={'overpass'} />
          <MapTile name={'vertigo'} />
        </div>
      </section>
      <section>
        <h2>Reserve Map Pool</h2>
        <div className='grid'>
          <MapTile name={'cache'} />
          <MapTile name={'dust2'} />
          <MapTile name={'train'} />
        </div>
      </section>
    </>
  );
};

export default MapPool;
