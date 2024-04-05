import styles from "./FrameComponent.module.css";

const FrameComponent = () => {
  return (
    <section className={styles.heroWrapper}>
      <div className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.frameParent}>
            <div className={styles.frequentlyAskedQuestionsWrapper}>
              <h1 className={styles.frequentlyAskedQuestionsContainer}>
                <span>{`Frequently asked `}</span>
                <span className={styles.questions}>Questions</span>
              </h1>
            </div>
            <div className={styles.weHaveCompiled}>
              We have Compiled the most commonly asked question about our
              Platform for your information and to enhance your overall
              experience.
            </div>
          </div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.howCanIGetStartedWithRewParent}>
              <div className={styles.howCanI}>
                How can I Get started with Rework AI?
              </div>
              <div className={styles.typcnplusWrapper}>
                <img
                  className={styles.typcnplusIcon}
                  alt=""
                  src="/typcnplus.svg"
                />
              </div>
            </div>
            <div className={styles.loremIpsumDolor}>
              Lorem ipsum dolor sit amet consectetur. Porta velit ultricies
              feugiat tortor odio. Scelerisque habitant quam pharetra adipiscing
              id ipsum et lectus malesuada.
            </div>
          </div>
          <div className={styles.howCanIGetStartedWithRewGroup}>
            <div className={styles.howCanI1}>
              How can I Get started with Rework AI?
            </div>
            <img
              className={styles.typcnplusIcon1}
              alt=""
              src="/typcnplus.svg"
            />
          </div>
          <div className={styles.howCanIGetStartedWithRewContainer}>
            <div className={styles.howCanI2}>
              How can I Get started with Rework AI?
            </div>
            <img
              className={styles.typcnplusIcon2}
              alt=""
              src="/typcnplus.svg"
            />
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.howCanI3}>
              How can I Get started with Rework AI?
            </div>
            <img
              className={styles.typcnplusIcon3}
              alt=""
              src="/typcnplus.svg"
            />
          </div>
          <div className={styles.howCanIGetStartedWithRewParent1}>
            <div className={styles.howCanI4}>
              How can I Get started with Rework AI?
            </div>
            <img
              className={styles.typcnplusIcon4}
              alt=""
              src="/typcnplus.svg"
            />
          </div>
          <div className={styles.howCanIGetStartedWithRewParent2}>
            <div className={styles.howCanI5}>
              How can I Get started with Rework AI?
            </div>
            <img
              className={styles.typcnplusIcon5}
              alt=""
              src="/typcnplus.svg"
            />
          </div>
          <div className={styles.howCanIGetStartedWithRewParent3}>
            <div className={styles.howCanI6}>
              How can I Get started with Rework AI?
            </div>
            <img
              className={styles.typcnplusIcon6}
              alt=""
              src="/typcnplus.svg"
            />
          </div>
          <div className={styles.howCanIGetStartedWithRewParent4}>
            <div className={styles.howCanI7}>
              How can I Get started with Rework AI?
            </div>
            <img
              className={styles.typcnplusIcon7}
              alt=""
              src="/typcnplus.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
