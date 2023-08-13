import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { degToRad } from "three/src/math/MathUtils";
import SineWave from "./SineWave/SineWave";
import styles from "./RippleCanvas.module.scss";

const RippleCanvas = () => {
  return (
    <div className={styles.container}>
      <Canvas
        colorManagement={false}
        camera={{ position: [100, 10, 0], fov: 75 }}
      >
        <Suspense fallback={null}>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2 - degToRad(10)}
            minPolarAngle={Math.PI / 2 - degToRad(10)}
            autoRotate
            autoRotateSpeed={-0.1}
          />

          <SineWave
            axisParticleCount={65} // The number of particles across one axis
            particleDistance={2.9} // The distance between each particle
            frequency={0.002} // The frequency of the wave
            amplitude={3} // The amplitude (height) of the wave
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default RippleCanvas;
