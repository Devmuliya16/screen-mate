import { Link } from 'react-router-dom'
import Button from '../ui/button'

const card = ({ props }) => {
    
    return (
        <div className="max-w-sm bg-plate flex flex-row items-start rounded-lg shadow border-gray-700 m-2">

            <img className="rounded-t-lg  h-48 w-96" src={"https://image.tmdb.org/t/p/original/"+props.image} alt={props.title} />
            

            <div className="p-2">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-white">{props.title}</h5>
                <p className="mb-3 font-normal text-sm text-gray-400">{props.overview.substr(0,100)+"..."}</p>

                <Link to={"/detail/"+props.id}>
                    <Button text={"Details"} />
                </Link>
            </div>
        </div>

    )
}

export default card