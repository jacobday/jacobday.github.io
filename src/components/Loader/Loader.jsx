import { Html, useProgress } from "@react-three/drei";
import styles from "./Loader.module.scss";

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html>
      <div className={styles.container}>
        <div className={styles.spinner}></div>
        <div className={styles.progress}>{progress.toFixed(2)}%</div>
      </div>
    </Html>
  );
};

export default Loader;
