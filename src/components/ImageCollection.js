import DropdownMenu from "./DropdownMenu";
import styles from "./ImageCollection.module.css";

const ImageCollection = () => {
  return (
    <section className={styles.imageCollection}>
      <div className={styles.symbolLibraryParent}>
        <div className={styles.symbolLibrary}>
          <h1 className={styles.ourAmazingBenefitsContainer}>
            <span>{`Our Amazing Benefits `}</span>
            <span className={styles.helpfulForYour}>
              Helpful For Your Hiring
            </span>
          </h1>
        </div>
        <div className={styles.frameChild} />
        <div className={styles.buttonBank}>
          <DropdownMenu
            eosIconsai="/eosiconsai.svg"
            prop="60%"
            costReduce="Cost Reduce"
            zeroOverheadInTheHiringPr="Zero overhead in the hiring process - promise! Source top quality candidates for some of the best companies"
          />
          <DropdownMenu
            eosIconsai="/eosiconsai-1.svg"
            prop="50% Faster"
            costReduce="Recruitment by TAT"
            zeroOverheadInTheHiringPr="Zero overhead in the hiring process - promise! Source top quality candidates for some of the best companies"
            propLeft="428.2px"
            propTop="0px"
            propHeight="unset"
            propLineHeight="27px"
          />
          <div className={styles.canvasGrid}>
            <div className={styles.checkboxSetWrapper}>
              <div className={styles.checkboxSet}>
                <img className={styles.vectorIcon} alt="" src="/vector-7.svg" />
                <img
                  className={styles.flexContainerIcon}
                  alt=""
                  src="/vector-8.svg"
                />
              </div>
            </div>
            <div className={styles.columnLayout}>
              <h3 className={styles.highlyContextualizedIntervieContainer}>
                <p
                  className={styles.highlyContextualized}
                >{`Highly Contextualized `}</p>
                <p className={styles.interview}>Interview</p>
              </h3>
              <div className={styles.alModelsGenerate}>
                Al models generate highly contextualized interviews for the
                candidates based on your Company profile, Job description and
                Candidate's CV.
              </div>
            </div>
          </div>
          <div className={styles.plusSignParent}>
            <div className={styles.plusSign}>
              <div className={styles.minusSign}>
                <img className={styles.starIcon} alt="" src="/vector-9.svg" />
                <img
                  className={styles.circleIcon}
                  alt=""
                  src="/vector-10.svg"
                />
                <img
                  className={styles.squareIcon}
                  alt=""
                  src="/vector-11.svg"
                />
                <img
                  className={styles.triangleIcon}
                  alt=""
                  src="/vector-12.svg"
                />
              </div>
            </div>
            <div className={styles.automatedSchedulingParent}>
              <h3 className={styles.automatedScheduling}>
                <p className={styles.automated}>{`Automated `}</p>
                <p className={styles.scheduling}>Scheduling</p>
              </h3>
              <div
                className={styles.emailWhatsapp}
              >{`Email & WhatsApp based communication for interview scheduling with automated reminders.`}</div>
            </div>
          </div>
          <DropdownMenu
            eosIconsai="/eosiconsai-2.svg"
            prop="AI generated Interviews"
            costReduce="On what matters"
            zeroOverheadInTheHiringPr="0 manual interventions, completely seamless experience for the candidates."
            propLeft="428.2px"
            propTop="308px"
            propHeight="66px"
            propLineHeight="unset"
          />
          <DropdownMenu
            eosIconsai="/fluenttasksapp20regular.svg"
            prop="in-built"
            costReduce="ATS"
            zeroOverheadInTheHiringPr={`To manage all of your candidates & Credo verified CVs. Integrations with other ATS coming soon.`}
            propLeft="856.3px"
            propTop="308px"
            propHeight="66px"
            propLineHeight="unset"
          />
        </div>
      </div>
    </section>
  );
};

export default ImageCollection;
