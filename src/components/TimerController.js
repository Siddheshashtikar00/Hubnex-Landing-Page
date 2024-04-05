import Component2 from "./Component2";
import Component1 from "./Component1";
import styles from "./TimerController.module.css";

const TimerController = () => {
  return (
    <section className={styles.timerController}>
      <div className={styles.variableHandler}>
        <div className={styles.weightCalculator}>
          <h1 className={styles.customerTestimonials}>
            <span>{`Customer `}</span>
            <span className={styles.testimonials}>Testimonials</span>
          </h1>
          <div className={styles.whatOthersHas}>
            What others has say About Us
          </div>
        </div>
        <div className={styles.aNDProcessor}>
          <div className={styles.oRProcessor}>
            <Component2 xNORProcessor="/ellipse-2@2x.png" />
            <Component1
              reworkHasBeenAGreatWayToM="“ Rework has been a great way to make the hiring process easier and faster. We've been able to save money and time, ““ Rework has been a great way to make the hiring process easier and faster.  Highly recommend! “"
              demultiplexer="/ellipse-1@2x.png"
              ronaldRichards="Ronald Richards"
              hRManagerGoogle="HR Manager, Google"
            />
          </div>
          <div className={styles.oRProcessor1}>
            <Component1
              reworkHasBeenAGreatWayToM="“Rework has been a great way to make the hiring process easier and faster. We've been able to save money and time, and the recruiters have been able to find the best employers leads. Highly recommend! ““ Rework has been a great way to make the hiring process easier and faster.  Highly recommend! “"
              demultiplexer="/ellipse-1-1@2x.png"
              ronaldRichards="Savannah Nguyen"
              hRManagerGoogle="HR Manager, Microsoft"
            />
            <Component1
              reworkHasBeenAGreatWayToM="“Rework has been a great way to make the hiring process easier and faster. We've been able to save money and time, and the recruiters have been able to find the best employers leads. Highly recommend! “"
              demultiplexer="/ellipse-1-2@2x.png"
              ronaldRichards="Ronald Richards"
              hRManagerGoogle="HR Manager, Google"
            />
          </div>
          <div className={styles.oRProcessor2}>
            <Component2 xNORProcessor="/ellipse-2-1@2x.png" />
            <Component1
              reworkHasBeenAGreatWayToM="“ Rework has been a great way to make the hiring process easier and faster. We've been able to save money and time, ““ Rework has been a great way to make the hiring process easier and faster.  Highly recommend! “"
              demultiplexer="/ellipse-1-3@2x.png"
              ronaldRichards="Ronald Richards"
              hRManagerGoogle="HR Manager, Google"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimerController;
