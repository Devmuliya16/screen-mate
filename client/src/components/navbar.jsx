import Title from '../ui/title'
import Button from '../ui/button'
import Input from '../ui/input'
const navbar = () => {
  return (
    <div className='bg-plate text-white flex flex-row items-center p-4 justify-between'> 
        <Title size={'text-xl'}/>
        <div className='flex flex-row items-center space-x-2'>
          <div className='hidden sm:visible'>
            <Input type={"search"} placeholder={"search movie"}/>
            <Button text={"Search"} type='primary2'/>
          </div>
          
            <Button text={"Home"}/>
        </div>
     </div>
  )
}

export default navbar