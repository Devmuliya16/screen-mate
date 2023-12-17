import { useState } from 'react';
import BackgroundImage from '../assets/back.jpg'
import Input from '../ui/input';
import { Link } from 'react-router-dom';



const Home = () => {
    const [text,setText] = useState("");
    const [result,setResult] = useState([]);
    const search = async (e)=>{
        setText(e.target.value)
        const response = await fetch(`http://127.0.0.1:5000/api/search/${e.target.value}`,{
            method:"GET",
            credentials: 'include', 
            headers: {
              'Content-Type': 'application/json',
            },
        })
        const data = await response.json()
        setResult(Object.entries(data))
        
    
    }

  return (
    <div className="h-screen w-full text-white flex flex-col items-center " style={{
        backgroundImage:`url(${BackgroundImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover'
    }}>
    <div className='mt-32 px-8'>
    <div className='text-3xl'>Welcome to <span className='text-primary2 '>ScreenMate,</span></div>
    <p>your go-to for personalized movie recommendations! <br/>
    Explore our diverse library, discover hidden gems, and say goodbye to endless scrolling.</p>
    <Input placeholder={"Search"} type={"search"} value={text} func={search}/>
    
    {result.length!==0 && <div className='bg-plate text-white flex items-start flex-col min-h-fit max-h-[300px] w-full overflow-y-scroll overflow-hidden' >
        {
           result.map((obj,ind)=>{
            return <Link 
            to={"/movie/"+obj[1]} key={ind} 
            className='hover:bg-slate-700 w-full p-2'>
            {obj[1]}
            </Link>
        
        })
        }
    </div>}

    </div>
    </div>
  )
}

export default Home