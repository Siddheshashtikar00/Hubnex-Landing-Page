import styles from "./Component2.module.css";

const Component2 = ({ xNORProcessor }) => {
  return (
    <div className={styles.component16}>
      <div className={styles.reworkHasBeen}>
        “Rework has been a great way to make the hiring process easier and
        faster. We've been able to save money and time, and the recruiters have
        been able to find the best employers leads. Highly recommend! “
      </div>
      <div className={styles.nOTProcessor}>
        <img
          className={styles.xNORProcessor}
          loading="lazy"
          alt=""
          src={xNORProcessor}
        />
        <div className={styles.container}>
          <h3 className={styles.theresaWebb}>Theresa Webb</h3>
          <div className={styles.hrManagerAmazon}>HR Manager, Amazon</div>
        </div>
      </div>
    </div>
  );
};

export default Component2;
