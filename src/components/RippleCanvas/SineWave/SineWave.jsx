import React, { useCallback, useMemo } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { circleParticle } from "../../../assets/images/particles";

const SineWave = ({
  axisParticleCount,
  particleDistance,
  frequency,
  amplitude,
}) => {
  const bufferRef = React.useRef();
  const circleTexture = useLoader(THREE.TextureLoader, circleParticle);

  const gridOffset = axisParticleCount / 2; // The offset to center the grid
  let phaseShift = 0; // The amount to shift the phase of each particle

  // Get the y position of a particle at a given x and z position
  const graph = useCallback(
    (x, z) => {
      return Math.sin(frequency * (x ** 2 + z ** 2 + phaseShift)) * amplitude;
    },
    [phaseShift, frequency, amplitude],
  );

  // Plot the points on a square grid
  let positions = useMemo(() => {
    let positions = [];

    for (let x = 0; x < axisParticleCount; x++) {
      for (let z = 0; z < axisParticleCount; z++) {
        let xPosition = (x - gridOffset) * particleDistance;
        let zPosition = (z - gridOffset) * particleDistance;
        let yPosition = graph(xPosition, zPosition);

        positions.push(xPosition, yPosition, zPosition);
      }
    }

    return new Float32Array(positions);
  }, [axisParticleCount, particleDistance, gridOffset, graph]);

  // Update the y position of each particle
  useFrame(() => {
    phaseShift += 15;
    const positions = bufferRef.current.array;

    let i = 0;
    for (let x = 0; x < axisParticleCount; x++) {
      for (let z = 0; z < axisParticleCount; z++) {
        let xPosition = (x - gridOffset) * particleDistance;
        let zPosition = (z - gridOffset) * particleDistance;

        positions[i + 1] = graph(xPosition, zPosition);
        i += 3;
      }
    }

    bufferRef.current.needsUpdate = true;
  });

  return (
    <points>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          ref={bufferRef}
          attach="attributes-position"
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        attach="material"
        map={circleTexture}
        color={0x00aaff}
        size={0.6}
        sizeAttenuation
        transparent={false}
        alphaTest={0.5}
        opacity={0.55}
      ></pointsMaterial>
    </points>
  );
};

export default SineWave;
