import logo from '../../../assets/logo.svg'
import SvgPic1 from '../../../assets/sign-in-pic'



export default function Logo(){
    return (
        <div className='bg-[#3F8CFF] max-h-screen w-1/2 flex flex-col justify-evenly gap-[50px] rounded-l-2xl shadow-lg px-10 py-10  '>

            <div className='flex gap-7'>
                <img src={logo }/>
                <h1 className='text-[25px] font-bold text-white'>Woorkroom</h1>
            </div>
            <p className='text-[30px] font-bold text-white'>Your place to work <br />Plan. Create. Control.
            </p>
            <SvgPic1 />    

        </div>
    )
}