import { useTexture } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
const Moon = () => {
    const moonRef=useRef()
    const [moonTexture] = useTexture(['assets/moon.jpg'])
    useFrame(({clock}) => {
        //Orbit location
        moonRef.current.position.x = Math.sin(clock.getElapsedTime()*0.2)*4
        moonRef.current.position.z = Math.cos(clock.getElapsedTime()*0.2)*4
        //Access the location
        moonRef.current.rotation.y +=0.003  
    }

    )
    return(
    <mesh ref={moonRef} position={[4,0,0]}>
        // Radius , x-axis , y-axis
        <sphereGeometry args={[0.5,32,32]}/>
        {/* <meshStandardMaterial 
        map={earthTexture}
        normalMap={earthNormalMap}/> */}
         <meshPhongMaterial 
        map={moonTexture}
       
        />
    </mesh>
    )
}

export default Moon