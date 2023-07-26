import { useParams } from 'react-router-dom';
import { useGetNadesPositionsByMapAndNadeType } from '../hooks/useGetNades';
import classes from './styles/NadesMapScreen.module.css';
import { CSSProperties, useRef, useState } from 'react';
import SmokeIcon from '../components/SmokeIcon';
import { Link } from 'react-router-dom';
import { NadePosition } from '../models/nadePosition.model';

const NadesMapScreen = () => {
  const { map } = useParams();
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [nadeType, setNadeType] = useState('smoke');

  const { data } = useGetNadesPositionsByMapAndNadeType(map, nadeType);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  {
    /* code used for adding new positions */
  }
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    // const rect = imageContainerRef.current?.getBoundingClientRect();
    // if (rect) {
    //   const clickedX = (event.clientX - rect.left - 20).toFixed(0) + 'px';
    //   const clickedY = (event.clientY - rect.top - 20).toFixed(0) + 'px';
    //   console.log('Clicked at: ', { top: clickedY, left: clickedX });
    // }
  };

  const renderDivs = () => {
    return data?.map((item: NadePosition, index: number) => {
      let { count, x, y } = item;
      let maxWidth = 40;
      if (window.innerWidth < 400) {
        x =
          x > 0
            ? x * ((window.innerWidth - 32) / 1000) * 2
            : x * ((window.innerWidth - 32) / 1000) * 2.1;
        y =
          y > 0
            ? y * ((window.innerWidth - 32) / 1000) * 2
            : y * ((window.innerWidth - 32) / 1000) * 2.15;
        maxWidth -= 10;
      } else if (window.innerWidth < 574) {
        x =
          x > 0
            ? x * ((window.innerWidth - 32) / 1000) * 2.15
            : x * ((window.innerWidth - 32) / 1000) * 2.05;
        y =
          y > 0
            ? y * ((window.innerWidth - 32) / 1000) * 2.15
            : y * ((window.innerWidth - 32) / 1000) * 2.05;
        maxWidth -= 10;
      } else if (window.innerWidth < 768) {
        x = x * 0.92;
        y = y * 0.92;
        maxWidth -= 5;
      }
      const divStyle: CSSProperties = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: `translate(${x}%, ${y}%)`,
        width: '100%',
        maxWidth: `${maxWidth}px`,
        height: 'auto',
        opacity: '70%',
        cursor: 'pointer',
      };

      return (
        <Link
          to={`/nades/${map}/${nadeType}/${item.endPosition}`}
          key={index}
          className='svgContainer'
          style={divStyle}
        >
          <SmokeIcon dynamicNumber={count} />
        </Link>
      );
    });
  };

  return (
    <div className={classes.container}>
      <div
        className={`${classes.sidebar} ${isSidebarOpen ? classes.open : ''}`}
      >
        Sidebar
      </div>
      <div className={classes.mainContent}>
        <button className={classes.openBtn} onClick={toggleSidebar}>
          Open
        </button>
        <div
          className={classes.imageContainer}
          ref={imageContainerRef}
          onClick={handleClick}
        >
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
