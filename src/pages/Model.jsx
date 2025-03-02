import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const Model = () => {
  const { scene } = useGLTF("/models/linkedin.gltf");
  return <primitive object={scene} scale={1.5} />;
};

const Scene = () => {
  const controlsRef = useRef();
  const [constraints, setConstraints] = useState({ left: 0, right: 0, top: 0, bottom: 0 });

  // Update constraints based on viewport size
  useEffect(() => {
    const updateConstraints = () => {
      setConstraints({
        left: -window.innerWidth / 2,
        right: window.innerWidth / 2,
        top: -window.innerHeight / 2,
        bottom: window.innerHeight / 2,
      });
    };

    updateConstraints(); // Set initial constraints
    window.addEventListener("resize", updateConstraints);
    
    return () => window.removeEventListener("resize", updateConstraints);
  }, []);

  // Disable zoom functionality after controls are initialized
  useEffect(() => {
    if (controlsRef.current) {
      controlsRef.current.enableZoom = false;
    }
  }, []);

  return (
    <motion.div
      drag
      dragConstraints={constraints} // Set dynamic full-screen constraints
      dragElastic={0.2} // Bounce effect when hitting the edges
      style={{ width: "100vw", height: "100vh", position: "absolute" }}
    >
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight />
        <OrbitControls ref={controlsRef} enableZoom={false} enablePan={true} enableRotate={true} />
        <Model />
      </Canvas>
    </motion.div>
  );
};

export default Scene;
