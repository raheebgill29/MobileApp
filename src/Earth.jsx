import { useTexture } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import Moon from "./Moon"
const Earth = () => {
    const earthRef=useRef()
    const [earthTexture,earthNormalMap,earthSpecularMap,earthDisplacement] = useTexture(['assets/earth.jpg','assets/2k_earth_normal_map.jpg','assets/2k_earth_specular_map.jpg','assets/earthDisplacementMap.jpg'])
    useFrame(() => {
        earthRef.current.rotation.y +=0.001    
    }

    )
    return(
        <group>
    <mesh ref={earthRef}>
        // Radius , x-axis , y-axis
        <sphereGeometry args={[1,32,32]}/>
        {/* <meshStandardMaterial 
        map={earthTexture}
        normalMap={earthNormalMap}/> */}
         <meshPhongMaterial 
        map={earthTexture}
        normalMap={earthNormalMap}
        specularMap={earthSpecularMap}
        shininess={10}
        displacementMap={earthDisplacement}
        displacementScale={0.01}
        />
    </mesh>
    <Moon/>
    </group>
    )
}

export default Earth