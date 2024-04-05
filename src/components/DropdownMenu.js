import { useMemo } from "react";
import styles from "./DropdownMenu.module.css";

const DropdownMenu = ({
  eosIconsai,
  prop,
  costReduce,
  zeroOverheadInTheHiringPr,
  propLeft,
  propTop,
  propHeight,
  propLineHeight,
}) => {
  const dropdownMenuStyle = useMemo(() => {
    return {
      left: propLeft,
      top: propTop,
    };
  }, [propLeft, propTop]);

  const costReduceStyle = useMemo(() => {
    return {
      height: propHeight,
      lineHeight: propLineHeight,
    };
  }, [propHeight, propLineHeight]);

  return (
    <div className={styles.dropdownMenu} style={dropdownMenuStyle}>
      <img className={styles.eosIconsai} alt="" src={eosIconsai} />
      <h3 className={styles.costReduce} style={costReduceStyle}>
        <p className={styles.p}>{prop}</p>
        <p className={styles.costReduce1}>{costReduce}</p>
      </h3>
      <div className={styles.zeroOverheadIn}>{zeroOverheadInTheHiringPr}</div>
    </div>
  );
};

export default DropdownMenu;
