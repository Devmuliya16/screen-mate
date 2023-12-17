const input = ({type , placeholder , value="", func=()=>{}}) => {
  let style = "border text-lg rounded-lg focus:ring-primary2 block w-full p-1 px-2  bg-gray-700 border-gray-600 placeholder-gray-400 text-white outline-none"

  return (
    <input type={type} placeholder={placeholder} className={style} value={value} onChange={func}/>
  )
}

export default input