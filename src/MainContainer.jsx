import { OrbitControls, useHelper } from "@react-three/drei"
import AnimatedStars from "./AnimatedStars"
import Earth from "./Earth"
import { useRef } from "react"
import * as THREE from "three"
const MainContainer = () => {
    const directionalLightRef=useRef()
    const directionalLightRef2=useRef()
    useHelper(directionalLightRef,THREE.DirectionalLightHelper,1,"hotpink")
    useHelper(directionalLightRef2,THREE.DirectionalLightHelper,1,"hotpink")
    
    return (
    <> 
        <color attach='background' args={['black']}/>
        <OrbitControls/>
        <AnimatedStars/>
        <directionalLight ref={directionalLightRef} position={[0,0,10]}/>
        <directionalLight ref={directionalLightRef2} position={[0,0,-10]}/>

        <Earth/>
    </>
    )
}

export default MainContainer