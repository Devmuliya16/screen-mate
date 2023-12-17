import { useLayoutEffect , useState} from "react"
import { useParams } from "react-router-dom";
import Crew from '../components/crew'
import Actors from "../components/actors";

const Detail = () => {
  const { id } = useParams();
  const [details,setDetails] =   useState({});
  const getMovieDetails = async ()=>{
    const response = await fetch(`http://127.0.0.1:5000/api/details/${id}`,{
      method:'GET',
      credentials:'include',
      headers:{
        'Content-Type': 'application/json'
      }
    })
    
    setDetails(await response.json())
  }
  

  useLayoutEffect(()=>{
    getMovieDetails();
  },[])


  return (
    <>
    <div
    style={{
      backgroundImage:`url(https://image.tmdb.org/t/p/original/${details.image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center top',
    }} 
    className="w-full overflow-hidden flex flex-col items-center">
    
      <div className="flex flex-col md:flex-row items-center justify-evenly w-full flex-wrap h-full bg-black/60 text-white">
          <img src={`https://image.tmdb.org/t/p/original/${details.image}`} 
          className="h-80 w-48 rounded-lg drop-shadow-lg" 
          alt={details.title}/>
         
          <p className="md:w-2/6 overflow-auto overflow-x-hidden overflow-y-auto p-4">
          <div className="text-2xl font-bold">{details.title}</div>
          <div >{details.release || "-"}</div>
            {details.overview}
          </p>

          <div className="md:w-1/6 flex flex-col items-center md:items-start justify-around space-y-2">
            <span className="text-primary1">Popularity: {details.popularity}</span>
            
            <ol className="list-inside text-sm">
            <span className="text-lg text-primary2">Genres</span>
              {
                details.genres?.map((obj,ind)=>(
                  <li key={ind}>{obj}</li>
                ))
              }
            </ol>
            <div className="w-full flex flex-row items-center justify-center flex-wrap">
    {details.crew?.map((obj, ind) => (
      <Crew name={obj.name} job={obj.job} image={obj.profile_path} key={ind} />
    ))}
  </div>
          </div>

          


  {/* Cast Section */}
  <span className="text-3xl font-bold w-full text-primary2 text-center">Cast</span>
  <div className="w-full flex flex-row items-center overflow-hidden overflow-x-auto justify-start">
    {details.cast?.map((obj, ind) => (
      <Actors name={obj.name} popularity={obj.popularity} role={obj.character} image={obj.profile_path} key={ind} />
    ))}
  </div>

          
      </div>

    </div>

    </>
  )
}

export default Detail