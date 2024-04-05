import { Button } from "@mui/material";
import styles from "./DataAggregator.module.css";

const DataAggregator = () => {
  return (
    <section className={styles.dataAggregator}>
      <div className={styles.logicConnector}>
        <h1 className={styles.chooseYourSimpleContainer}>
          <span>{`Choose Your Simple, `}</span>
          <span className={styles.transparentPricing}>Transparent Pricing</span>
        </h1>
      </div>
      <div className={styles.inputSplitter}>
        <div className={styles.testimonials}>
          <div className={styles.contactUs}>
            <div className={styles.contactUsInner}>
              <div className={styles.frameParent}>
                <div className={styles.errorHandlerWrapper}>
                  <div className={styles.errorHandler}>
                    <div className={styles.dataMapper}>
                      <div className={styles.graphInput}>1</div>
                    </div>
                    <h3 className={styles.month}>Month</h3>
                  </div>
                </div>
                <div className={styles.parent}>
                  <h1 className={styles.h1}>₹</h1>
                  <div className={styles.div}>199.00</div>
                  <div className={styles.month1}>/month</div>
                </div>
              </div>
            </div>
            <div className={styles.benefitWrapper}>
              <div className={styles.benefit}>
                <div className={styles.suitableForCompanies}>
                  Suitable for companies with 5-10 openings
                </div>
                <div className={styles.frameGroup}>
                  <div className={styles.iconsParent}>
                    <img
                      className={styles.icons}
                      loading="lazy"
                      alt=""
                      src="/icons.svg"
                    />
                    <div className={styles.interviewReadyCandidates}>
                      10 interview-ready candidates
                    </div>
                  </div>
                  <div className={styles.iconsGroup}>
                    <img className={styles.icons1} alt="" src="/icons.svg" />
                    <div className={styles.unlimitedJobPostings}>
                      Unlimited job postings
                    </div>
                  </div>
                  <div className={styles.iconsContainer}>
                    <img className={styles.icons2} alt="" src="/icons.svg" />
                    <div className={styles.receivePreVettedProfiles}>
                      Receive pre-vetted profiles within 48 hours
                    </div>
                  </div>
                  <div className={styles.frameDiv}>
                    <img className={styles.icons3} alt="" src="/icons-3.svg" />
                    <div className={styles.dedicatedAccountManager}>
                      Dedicated account manager
                    </div>
                  </div>
                  <div className={styles.iconsParent1}>
                    <img className={styles.icons4} alt="" src="/icons-3.svg" />
                    <div className={styles.assistanceWithInterview}>
                      Assistance with interview scheduling
                    </div>
                  </div>
                  <div className={styles.iconsParent2}>
                    <img className={styles.icons5} alt="" src="/icons-3.svg" />
                    <div className={styles.customReports}>Custom reports</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.simpleButtonWrapper}>
              <div className={styles.simpleButton}>
                <div className={styles.getStarted}>Get Started</div>
                <div className={styles.arrow}>
                  <img className={styles.vectorIcon} alt="" src="/vector.svg" />
                  <img
                    className={styles.vectorIcon1}
                    alt=""
                    src="/vector-1.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.frameParent1}>
              <div className={styles.frameWrapper}>
                <div className={styles.frameParent2}>
                  <div className={styles.frameParent3}>
                    <div className={styles.wrapper}>
                      <div className={styles.div1}>3</div>
                    </div>
                    <h3 className={styles.months}>Months</h3>
                  </div>
                  <Button
                    className={styles.frameChild}
                    disableElevation={true}
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      color: "#1f1f1f",
                      fontSize: "14",
                      background: "#ffb649",
                      borderRadius: "0px 0px 0px 5px",
                      "&:hover": { background: "#ffb649" },
                      width: 132,
                      height: 36,
                    }}
                  >
                    Most Popular
                  </Button>
                </div>
              </div>
              <div className={styles.dataValidator}>
                <h1 className={styles.h11}>₹</h1>
                <div className={styles.div2}>149.00</div>
                <div className={styles.month2}>/month</div>
              </div>
            </div>
            <div className={styles.frameWrapper1}>
              <div className={styles.suitableForCompaniesWith5Parent}>
                <div className={styles.suitableForCompanies1}>
                  Suitable for companies with 5-10 openings
                </div>
                <div className={styles.frameParent4}>
                  <div className={styles.iconsParent3}>
                    <img className={styles.icons6} alt="" src="/icons.svg" />
                    <div className={styles.interviewReadyCandidates1}>
                      10 interview-ready candidates
                    </div>
                  </div>
                  <div className={styles.iconsParent4}>
                    <img className={styles.icons7} alt="" src="/icons.svg" />
                    <div className={styles.unlimitedJobPostings1}>
                      Unlimited job postings
                    </div>
                  </div>
                  <div className={styles.iconsParent5}>
                    <img className={styles.icons8} alt="" src="/icons.svg" />
                    <div className={styles.receivePreVettedProfiles1}>
                      Receive pre-vetted profiles within 48 hours
                    </div>
                  </div>
                  <div className={styles.iconsParent6}>
                    <img className={styles.icons9} alt="" src="/icons-3.svg" />
                    <div className={styles.dedicatedAccountManager1}>
                      Dedicated account manager
                    </div>
                  </div>
                  <div className={styles.iconsParent7}>
                    <img className={styles.icons10} alt="" src="/icons-3.svg" />
                    <div className={styles.assistanceWithInterview1}>
                      Assistance with interview scheduling
                    </div>
                  </div>
                  <div className={styles.iconsParent8}>
                    <img className={styles.icons11} alt="" src="/icons-3.svg" />
                    <div className={styles.customReports1}>Custom reports</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.simpleButton1}>
              <div className={styles.getStarted1}>Get Started</div>
              <div className={styles.arrow1}>
                <img className={styles.vectorIcon2} alt="" src="/vector.svg" />
                <img
                  className={styles.vectorIcon3}
                  alt=""
                  src="/vector-1.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.frameParent5}>
            <div className={styles.frameWrapper2}>
              <div className={styles.frameParent6}>
                <div className={styles.frameWrapper3}>
                  <div className={styles.frameParent7}>
                    <div className={styles.container}>
                      <div className={styles.div3}>6</div>
                    </div>
                    <div className={styles.months1}>Months</div>
                  </div>
                </div>
                <div className={styles.group}>
                  <div className={styles.div4}>₹</div>
                  <div className={styles.div5}>169.00</div>
                  <div className={styles.month3}>/month</div>
                </div>
              </div>
            </div>
            <div className={styles.frameWrapper4}>
              <div className={styles.suitableForCompaniesWith5Group}>
                <div className={styles.suitableForCompanies2}>
                  Suitable for companies with 5-10 openings
                </div>
                <div className={styles.frameParent8}>
                  <div className={styles.iconsParent9}>
                    <img className={styles.icons12} alt="" src="/icons.svg" />
                    <div className={styles.interviewReadyCandidates2}>
                      10 interview-ready candidates
                    </div>
                  </div>
                  <div className={styles.iconsParent10}>
                    <img className={styles.icons13} alt="" src="/icons.svg" />
                    <div className={styles.unlimitedJobPostings2}>
                      Unlimited job postings
                    </div>
                  </div>
                  <div className={styles.iconsParent11}>
                    <img className={styles.icons14} alt="" src="/icons.svg" />
                    <div className={styles.receivePreVettedProfiles2}>
                      Receive pre-vetted profiles within 48 hours
                    </div>
                  </div>
                  <div className={styles.iconsParent12}>
                    <img className={styles.icons15} alt="" src="/icons-3.svg" />
                    <div className={styles.dedicatedAccountManager2}>
                      Dedicated account manager
                    </div>
                  </div>
                  <div className={styles.iconsParent13}>
                    <img className={styles.icons16} alt="" src="/icons-3.svg" />
                    <div className={styles.assistanceWithInterview2}>
                      Assistance with interview scheduling
                    </div>
                  </div>
                  <div className={styles.iconsParent14}>
                    <img className={styles.icons17} alt="" src="/icons-3.svg" />
                    <div className={styles.customReports2}>Custom reports</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.simpleButtonContainer}>
              <div className={styles.simpleButton2}>
                <div className={styles.getStarted2}>Get Started</div>
                <div className={styles.arrow2}>
                  <img
                    className={styles.vectorIcon4}
                    alt=""
                    src="/vector.svg"
                  />
                  <img
                    className={styles.vectorIcon5}
                    alt=""
                    src="/vector-1.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.graphExplorer}>
          <div className={styles.inputFilter}>
            <h2 className={styles.step3}>Step-3</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataAggregator;
