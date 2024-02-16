
const ProgressBar = ({progress}) => {
  return (
    <div className="bg-gray-300 w-full lg:w-2/3 mx-auto h-4 mt-4 rounded-full">
      <div 
        className="py-0.2 h-4 bg-blue-400 rounded-full text-white text-[10px]"
        style={{width: `${progress}%`}}       
      >
        {`${Number(progress).toFixed(0)}%`}
      </div>     
    </div>
  )
}

export default ProgressBar