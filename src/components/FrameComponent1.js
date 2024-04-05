import Steps from "./Steps";
import styles from "./FrameComponent1.module.css";

const FrameComponent1 = () => {
  return (
    <section className={styles.pathWrapper}>
      <div className={styles.path}>
        <img className={styles.vectorIcon} alt="" src="/vector-13.svg" />
        <div className={styles.steps}>
          <div className={styles.howOurSystemOperatesWrapper}>
            <h1 className={styles.howOurSystemContainer}>
              <span>{`How Our System `}</span>
              <span className={styles.operates}>Operates</span>
            </h1>
          </div>
          <div className={styles.buttonParent}>
            <div className={styles.button}>
              <Steps
                uploadDocuments="Upload Documents"
                shortlistTheMostQualified="Shortlist the most qualified candidate and upload their details for the top companies"
                frame48095633="/frame-48095633.svg"
              />
              <div className={styles.steps1}>
                <h3 className={styles.signUp}>Sign Up</h3>
                <div className={styles.followTheLink}>
                  Follow the link below to sign up and get access of the current
                  job postings
                </div>
                <div className={styles.wrapperMingcuteuserAddLine}>
                  <img
                    className={styles.mingcuteuserAddLineIcon}
                    loading="lazy"
                    alt=""
                    src="/mingcuteuseraddline.svg"
                  />
                </div>
              </div>
              <Steps
                uploadDocuments="Get Rewards"
                shortlistTheMostQualified="As soon as the candidate gets selected you get your benefits"
                frame48095633="/frame-48095633-1.svg"
                propPadding="0px 0px var(--padding-41xl) var(--padding-11xl)"
                propMargin="0"
                propPadding1="0px var(--padding-mini)"
                propMinHeight="100px"
              />
            </div>
            <div className={styles.checkbox}>
              <div className={styles.simpleButton}>
                <div className={styles.getStarted}>Get Started</div>
                <div className={styles.arrow}>
                  <img
                    className={styles.vectorIcon1}
                    alt=""
                    src="/vector.svg"
                  />
                  <img
                    className={styles.vectorIcon2}
                    alt=""
                    src="/vector-1.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
