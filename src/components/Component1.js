import styles from "./Component1.module.css";

const Component1 = ({
  reworkHasBeenAGreatWayToM,
  demultiplexer,
  ronaldRichards,
  hRManagerGoogle,
}) => {
  return (
    <div className={styles.component11}>
      <div className={styles.reworkHasBeen}>{reworkHasBeenAGreatWayToM}</div>
      <div className={styles.multiplexer}>
        <img
          className={styles.demultiplexerIcon}
          loading="lazy"
          alt=""
          src={demultiplexer}
        />
        <div className={styles.container}>
          <div className={styles.ronaldRichards}>{ronaldRichards}</div>
          <div className={styles.hrManagerGoogle}>{hRManagerGoogle}</div>
        </div>
      </div>
    </div>
  );
};

export default Component1;
