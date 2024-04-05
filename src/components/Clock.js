import Component from "./Component";
import styles from "./Clock.module.css";

const Clock = () => {
  return (
    <section className={styles.clock}>
      <div className={styles.processor}>
        <div className={styles.dataConnector}>
          <div className={styles.successStoriesWrapper}>
            <h1 className={styles.successStories}>
              <span>{`Success `}</span>
              <span className={styles.stories}>Stories</span>
            </h1>
          </div>
          <div className={styles.component11Parent}>
            <Component unsplashMpdLxiIg0P0="/unsplashmpdlxiig0p0@2x.png" />
            <Component unsplashMpdLxiIg0P0="/unsplashmpdlxiig0p0-1@2x.png" />
            <Component unsplashMpdLxiIg0P0="/unsplashmpdlxiig0p0-2@2x.png" />
          </div>
        </div>
        <div className={styles.processorInner}>
          <div className={styles.frameParent}>
            <div className={styles.frameChild} />
            <div className={styles.frameItem} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clock;
