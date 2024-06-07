import { useTexture } from "@react-three/drei"
const Earth = () => {
    const [earthTexture] = useTexture(['public/assets/earth.jpg'])
    return(
    <mesh>
        // Radius , x-axis , y-axis
        <sphereGeometry args={[1,32,32]}/>
        <meshStandardMaterial map={earthTexture}/>
    </mesh>
    )
}

export default Earth