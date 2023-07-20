// a banner component that displays photos in a gird
import Image from 'next/image'

function Banner() {
    
  return (
    // <div className='w-full grid grid-cols-5 justify-items-center gap-1'>
    //     <div className=" transition bg-white hover:bg-slate-500 hover:opacity-0 hover:scale-110 duration-200 w-14 h-14">
    //         <Image src="/icons/logo.svg" width={150} height={150} className=" rounded-full"/>
    //     </div>
    // </div>
    <div className=' w-full justify-center flex'>
        <Image src="/icons/logo.svg" width={700} height={700} />
    </div>
  )
}

export default Banner