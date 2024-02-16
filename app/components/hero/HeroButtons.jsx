
const Buttons = () => {
  return (
    <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded bg-[#3698f9] shadow px-12 py-3 text-md font-medium text-white  hover:bg-[#007dfc] hover:shadow-md focus:outline-none focus:ring active:bg-[#007dfc] sm:w-auto "
              href="/get-started"
            >
              Get Started
            </a>

            <a
              className="block w-full rounded px-12 py-3 text-md font-medium text-[#3698f9] shadow hover:text-[#007dfc] hover:shadow-md focus:outline-none focus:ring active:text-red-500 sm:w-auto"
              href="/about"
            >
              Learn More
            </a>
          </div>
  )
}

export default Buttons