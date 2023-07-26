import { Nade } from '../models/nade.model';
import classes from './NadeTile.module.css';

const NadeTile = ({ nade }: { nade: Nade }) => {
  console.log(nade);
  return (
    <article className={classes.article}>
      <header className={classes.header}>
        <hgroup className={classes.hgroup}>
          <h5>{nade.endPosition}</h5>
          <h6> from {nade.startPosition}</h6>
        </hgroup>
      </header>
      <img
        src={nade.imageLineupThumbUrl || nade.imageMain.url}
        alt={`${nade.endPosition} from ${nade.startPosition}`}
        className={classes.img}
      />
      <footer className={classes.footer}>Footer</footer>
    </article>
  );
};

export default NadeTile;
