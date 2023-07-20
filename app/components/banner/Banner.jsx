// a banner component that displays photos in a gird
import Image from 'next/image'

function Banner() {
    
  return (
    // <div className='w-full grid grid-cols-5 justify-items-center gap-1'>
    //     <div className=" transition bg-white hover:bg-slate-500 hover:opacity-0 hover:scale-110 duration-200 w-14 h-14">
    //         <Image src="/icons/logo.svg" width={150} height={150} className=" rounded-full"/>
    //     </div>
    // </div>
    <div className='w-full justify-center flex'>
        <img className=" object-fill h-auto w-full" src="https://cdn1.ntv.com.tr/gorsel/33zcTShTfkCxr22gDaMvbA.jpg?width=660&mode=both&scale=both"  />
    </div>
  )
}

export default Banner