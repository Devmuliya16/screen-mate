
const button = ({text,type="primary1",active=true}) => {
  let style1 = "text-white bg-primary1 hover:bg-primary1/80 shadow-lg shadow-primary1/50 font-medium rounded-lg text-sm px-4 py-2 text-center active:scale-90 duration-500 "
  let style2 = "text-white bg-primary2 hover:bg-primary2/80 shadow-lg shadow-primary2/50 font-medium rounded-lg text-sm px-4 py-2 text-center active:scale-90 duration-500 "
  let style = (type==="primary1") ? style1 : style2
  return (
    <button active={active} className={style} >{text}</button>
  )
}

export default button