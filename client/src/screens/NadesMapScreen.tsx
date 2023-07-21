import { useParams } from 'react-router-dom';
import { useGetNades } from '../hooks/useGetNades';
import classes from './styles/NadesMapScreen.module.css';
import { CSSProperties, useRef, useState } from 'react';
import SmokeIcon from '../components/SmokeIcon';

const NadesMapScreen = () => {
  const { map } = useParams()
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [nadeType, setNadeType] = useState('smoke');

  const { data } = useGetNades(map, nadeType);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  {/* code used for adding new positions */ }
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const handleClick = (event: any) => {
    // const rect = imageContainerRef.current?.getBoundingClientRect();
    // if (rect) {
    //   const clickedX = (event.clientX - rect.left - 20).toFixed(0) + 'px';
    //   const clickedY = (event.clientY - rect.top - 20).toFixed(0) + 'px';

    //   console.log('Clicked at: ', { top: clickedY, left: clickedX });
    // }
  };

  const renderDivs = () => {
    return data.map((item: any, index: any) => {
      let { count, x, y } = item;
      if (window.innerWidth < 992) x >= 0 ? x -= 10 : x += 10;
      const divStyle: CSSProperties = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: `translate(${x}%, ${y}%)`,
        width: '100%',
        maxWidth: '40px',
        height: 'auto',
        opacity: '70%'
      };

      return (
        <div key={index} className="svgContainer" style={divStyle}>
          <SmokeIcon dynamicNumber={count} />
        </div>
      );
    });
  };

  return (
    <div className={classes.container}>
      <div className={`${classes.sidebar} ${isSidebarOpen ? classes.open : ''}`}>Sidebar
      </div>
      <div className={classes.mainContent}>
        <button className={classes.openBtn} onClick={toggleSidebar}>Open</button>
        <div className={classes.imageContainer} ref={imageContainerRef}
          onClick={handleClick}>
          <img
            src={`/images/mapsOverlays/${map}.jpg`}
            alt={map}
            className={classes.image}
          />
          <div className={classes.overlay}>
            {data && renderDivs()}
            {/* code used for adding new positions */}
            {/* <div className={classes.svgContainer}>
              <SmokeIcon dynamicNumber={12} />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NadesMapScreen;
