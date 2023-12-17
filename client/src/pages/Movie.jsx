import { useLayoutEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../components/card';

const Movie = () => {
    const { name } = useParams();
    const [result,setResult] = useState([]);

    const getRecommandations = async (name)=>{
        const response = await fetch(`http://127.0.0.1:5000/api/recommand?name=${name}&length=20`,{
            method:"GET",
            headers:{
                'Content-Type': 'application/json',
            }
        });
        const data = await response.json();
        setResult(data);
    }

    useLayoutEffect(()=>{
        getRecommandations(name);
    },[])
    
  return (
    <div className="text-white flex flex-row flex-wrap items-center justify-center p-4">
        {
            result.map((movie,ind)=>{
                return <div key={ind}>
                    {
                        <Card props={movie}/>
                    }
                </div>
            })
        }
    </div>
  )
}

export default Movie