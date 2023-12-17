
const crew = ({name,job,image}) => {
console.log(name,job,image)
  return (
   
    <a href={`https://image.tmdb.org/t/p/original/${image}`} className=" flex-col flex sm:flex-row items-center m-1 bg-black/50 hover:bg-gray-800/25 rounded-lg p-1">
      <span className="w-20 h-20  overflow-hidden  items-center flex ">
      <img src={`https://image.tmdb.org/t/p/original/${image}`}  alt={name}/>
      </span>
      <div className="font-bold text-white text-sm p-2">
        {name} <hr/>
      <div className="font-light text-sm text-gray-50">
        {job}
      </div>
      </div>

    </a>

  )
}
// 

export default crew