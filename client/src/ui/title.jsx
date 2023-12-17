import { BiCameraMovie } from "react-icons/bi";
const title = ({size}) => {
  return (
    <div className={`${size}`}>
        <span className='text-primary1 font-bold'>S</span>creen
        <BiCameraMovie className="text-primary2 inline-block mb-1"/>
        <span className='text-primary2 italic underline'>M</span>ate
    </div>
  )
}

export default title