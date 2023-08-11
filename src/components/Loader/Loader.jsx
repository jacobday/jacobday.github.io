import { Html, useProgress } from "@react-three/drei";
import styles from "./Loader.module.scss";

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html>
      {/* <span className="canvas-load"></span> */}
      <p className={styles.progress}>{progress.toFixed(2)}%</p>
    </Html>
  );
};

export default Loader;
