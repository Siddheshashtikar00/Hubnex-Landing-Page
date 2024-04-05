import styles from "./GeometryEngine.module.css";

const GeometryEngine = () => {
  return (
    <section className={styles.geometryEngine}>
      <div className={styles.cta}>
        <div className={styles.signalRouter}>
          <div className={styles.valueTransformer}>
            <div className={styles.discoverTheFutureContainer}>
              <span>
                <span>{`Discover the Future of `}</span>
                <span className={styles.talentAssessment}>
                  Talent Assessment!
                </span>
              </span>
            </div>
            <div className={styles.facingChallengesInContainer}>
              <p className={styles.facingChallengesIn}>
                Facing challenges in traditional hiring?
              </p>
              <p className={styles.uncoverTheCosts}>
                Uncover the costs, pitfalls, and the game-changing role of
                Generative AI in recruitment.
              </p>
            </div>
            <div className={styles.insideThisWhitepaperContainer}>
              <p className={styles.insideThisWhitepaper}>
                <b>🔍 Inside this Whitepaper:</b>
              </p>
              <ul className={styles.manualVsMachineBasedHirin}>
                <li className={styles.manualVsMachineBasedHirin1}>
                  <span
                    className={styles.manualVsMachineBased}
                  >{`Manual vs. Machine-based hiring: Costs & Challenges.`}</span>
                </li>
                <li className={styles.theTruthAboutInterviewAs}>
                  <span className={styles.theTruthAbout}>
                    The truth about "Interview as a Service."
                  </span>
                </li>
                <li>
                  <span className={styles.generativeAiThe}>
                    Generative AI: The simple explanation. Optimize Your Hiring
                    Process Today!
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.ctaButton}>
            <div className={styles.downloadNowFor}>
              Download Now for Smarter Recruitment
            </div>
          </div>
        </div>
        <div className={styles.wrapperStateHolder}>
          <img
            className={styles.stateHolderIcon}
            loading="lazy"
            alt=""
            src="/rectangle-39394@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

export default GeometryEngine;
