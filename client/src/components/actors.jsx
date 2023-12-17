

const actors = ({ name, image, role, popularity }) => {
    return (
        <a
        href={`https://image.tmdb.org/t/p/original/${image}`}
        className="flex flex-col h-60 justify-end items-start rounded-lg m-2 p-4 shrink-0 hover:scale-110 duration-200 group hover:bg-opacity-20 relative overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center transition duration-300 group-hover:brightness-75"
          style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${image})` }}
        />
        <div className="relative top-2">
          <span className="font-bold">{name}</span>
          <hr />
          <div className="text-sm">{role}</div>
          <span className="text-sm">{popularity}</span>
        </div>
      </a>
      
    )
}

export default actors