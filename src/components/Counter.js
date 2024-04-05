import styles from "./Counter.module.css";

const Counter = () => {
  return (
    <section className={styles.counter}>
      <div className={styles.latch}>
        <div className={styles.flipFlop}>
          <h1 className={styles.howReworkAiContainer}>
            <span>{`How Rework AI has been a good `}</span>
            <span className={styles.hiringPlatformFor}>
              Hiring platform for Companies
            </span>
          </h1>
        </div>
        <div className={styles.randomAccessMemory}>
          <div className={styles.readOnlyMemory}>
            <div className={styles.writeOnceMemory}>
              <div className={styles.readWriteMemory}>
                <b className={styles.rAM}>80%</b>
              </div>
              <div className={styles.reductionInYour}>
                Reduction in your recruitment TAT with the access to a wider
                talent pool on the platform
              </div>
            </div>
            <div className={styles.writeOnceMemory1} />
            <div className={styles.writeOnceMemory2}>
              <div className={styles.wrapper}>
                <b className={styles.b}>50%</b>
              </div>
              <div className={styles.streamlineYourBudgeting}>
                Streamline your budgeting and save money while finding the top
                candidates
              </div>
            </div>
            <div className={styles.writeOnceMemory3} />
          </div>
        </div>
        <div className={styles.cache}>
          <div className={styles.bufferPool}>
            <div className={styles.inputPort}>
              <b className={styles.k}>10k</b>
            </div>
            <div className={styles.certifiedSourcingPartners}>
              Certified sourcing partners’ expertise
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter;
