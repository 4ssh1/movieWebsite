import {Link} from 'react-router-dom'

const links = ["Home", "Contact us", "Terms of Service", "Live", "FAQ", "Premium", "About us", "Recent Release","Most Watched"]

function Footer() {
  return (
    <div className="relative sm:h-[40vh] h-[20vh] bg-[url('/collage.jpg')]">
        <div className="absolute bg-slate-800 -z-10  w-full h-full"></div>
        <div className='backdrop-blur-[4px] h-full flex flex-col justify-center items-center sm:gap-2 gap-1'>
            {[0,3,6,9].map((no)=>(
            <div key={no} className="text-white
               sm:leading-10 leading-7 roboto  tracking-wider sm:space-x-10 space-x-4">
                {links.slice(no, no + 3).map((link)=>(
                    <Link to={'/'} key={link} className=' bg-slate-800 cursor-pointer sm:px-4 px-2.5 
                    py-2 rounded-full hover:opacity-60 ease-in sm:text-xs text-[7px]'
                    >{link}</Link>
                ))}
            </div>
               ))}
        </div>
    </div>
  )
}

// [&>div>p]: a select format in tailwind

export default Footer
