import { Button } from "@mui/material";
import InputBox from "../components/InputBox";
import FrameComponent2 from "../components/FrameComponent2";
import ImageCollection from "../components/ImageCollection";
import FrameComponent1 from "../components/FrameComponent1";
import DataAggregator from "../components/DataAggregator";
import GeometryEngine from "../components/GeometryEngine";
import TimerController from "../components/TimerController";
import Counter from "../components/Counter";
import Clock from "../components/Clock";
import FrameComponent from "../components/FrameComponent";
import styles from "./ForEmployers.module.css";

const ForEmployers = () => {
  return (
    <div className={styles.forEmployers}>
      <section className={styles.logicGate}>
        <InputBox />
        <FrameComponent2 />
      </section>
      <ImageCollection />
      <FrameComponent1 />
      <DataAggregator />
      <div className={styles.dataProcessor}>
        <div className={styles.simpleButton}>
          <div className={styles.bookADemo}>Book a Demo</div>
          <div className={styles.arrow}>
            <img className={styles.vectorIcon} alt="" src="/vector.svg" />
            <img className={styles.vectorIcon1} alt="" src="/vector-1.svg" />
          </div>
        </div>
      </div>
      <GeometryEngine />
      <TimerController />
      <Counter />
      <Clock />
      <FrameComponent />
      <section className={styles.forEmployersInner}>
        <div className={styles.frameParent}>
          <div className={styles.optimizeYourHiringStrategyParent}>
            <h1 className={styles.optimizeYourHiring}>
              Optimize Your Hiring Strategy with Rework's Exclusive Hiring Audit
            </h1>
            <div className={styles.discoverTheStrengths}>
              Discover the strengths and opportunities in your current hiring
              process. Our comprehensive Hiring Audit evaluates your strategy,
              identifies areas for improvement, and tailors a roadmap for
              success. Elevate your recruitment game with data-driven insights –
              because the right talent deserves the right approach.
            </div>
          </div>
          <Button
            className={styles.ctaButton}
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fffbfb",
              fontSize: "24",
              background: "#5c27c0",
              borderRadius: "20px",
              "&:hover": { background: "#5c27c0" },
              width: 476,
              height: 70,
            }}
          >
            Request Your Free Hiring Audit
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ForEmployers;
