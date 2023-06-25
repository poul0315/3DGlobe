import React, { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";

import EarthDayMap from "../../earth-image/8k_earth_daymap.jpg";
import EarthNormalMap from "../../earth-image/8k_earth_normal_map.jpg"; // base image
import EarthSpecularMap from "../../earth-image/8k_earth_specular_map.jpg";
import EarthCloudsMap from "../../earth-image/8k_earth_clouds.jpg";
// import EarthNightMap from "../../earth-image/8k_earth_nightmap.jpg";
import { TextureLoader } from "three";

export function Earth(props) {
    const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(TextureLoader,
         [
            EarthDayMap, 
            EarthNormalMap,
            EarthSpecularMap,
            EarthCloudsMap,
        ]);

        const earthRef = useRef();
        const cloudsRef = useRef();

        useFrame(({ clock }) => {
            const elapsedTime = clock.getElapsedTime();
            earthRef.current.rotation.y = elapsedTime / 6;
            cloudsRef.current.rotation.y = elapsedTime / 6;
        });

    return (
        <>
            {/* <ambientLight intensity={1} /> */}
            <pointLight color="#f6f3ea" position={[2, 0, 5]} intensity={1.2} />
            <Stars 
                radius={300}   // size of stars
                depth={60}     // distance of stars
                count={20000}  // number of stars
                factor={7}     // group of stars
                saturation={0} 
                fade={true} 
            />
            <mesh ref={cloudsRef} position={[0, 0, 1.0]}>
                <sphereGeometry args={[1.505, 40, 40]} />
                <meshPhongMaterial 
                    map={cloudsMap} 
                    opacity={0.4} 
                    depthWrite={true} 
                    transparent={true}  
                    side={THREE.DoubleSide}
                />
            </mesh>
            <mesh ref={earthRef} position={[0, 0, 1.0]} >
                <sphereGeometry args={[1.5, 40, 40]} />
                <meshPhongMaterial specularMap={specularMap} />
                <meshStandardMaterial 
                    map={colorMap} 
                    normalMap={normalMap} 
                    metalness={0.4} 
                    roughtness={0.7} />
                <OrbitControls 
                    enableZoom={true} 
                    enablePan={true} 
                    enableRotate={true} 
                    zoomSpeed={0.6} 
                    panSpeed={0.5} 
                    rotateSpeed={0.4} 
                />
            </mesh>
        </>
    )
}