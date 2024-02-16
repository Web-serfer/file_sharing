import Image from 'next/image'
import { SignIn } from "@clerk/nextjs";
import { ImDownload } from "react-icons/im";

export default function Page() {
  return(    

<section className="bg-white">
  <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
    <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
      <Image       
        src="/img/FileUp.jpg"
        width={500}
        height={100}
        className="absolute inset-0 h-full w-full object-cover opacity-80"
        alt="Night"
      />

      <div className="hidden lg:relative lg:block lg:p-12">
        <a className="block text-white" href="/">
          <span className="sr-only">Home</span>
          
        </a>

        <h2 className="mt-6 text-2xl font-bold text-blue-600 sm:text-3xl md:text-4xl">
        Welcome to Files Sharing App <span>
        <ImDownload 
            size={40}
            style={{ 
              display: 'inline-block', 
              marginLeft: '1rem',               
            }}
          />
          </span>
        </h2>

        <p className="mt-4 leading-relaxed text-blue/90">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
    </section>

    <main
      className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
    >
      <div className="max-w-xl lg:max-w-3xl">
      {/* left side */}
        <div className="relative -mt-16 block lg:hidden">
          <a
            className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white text-blue-600 sm:h-20 sm:w-20"
            href="/"
          >
            <span className="sr-only">Home</span>
            <ImDownload 
            size={40}
            style={{ 
              display: 'inline-block',                             
            }}
          />
          </a>

          <h1 className="mt-2 text-center text-2xl font-bold text-blue-600 sm:text-3xl md:text-4xl">
            Welcome to Files Sharing App 
          </h1>

          <p className="mt-2 mb-4 leading-relaxed text-center text-gray-500 ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        {/* right site */}
        <SignIn />
      </div>
    </main>
  </div>
</section>
  );
}