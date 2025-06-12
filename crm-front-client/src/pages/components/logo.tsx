import pic1 from '../../assets/pic1.svg'
import logo from '../../assets/logo.svg'



export default function Logo(){
    return (
        <div style={{ backgroundColor: '#3F8CFF' }} className='max-h-screen w-1/2 flex flex-col gap-[50px]'>
            <div className='flex gap-7'>
                <img src={logo }/>
                <h1 className='text-[30px] font-bold text-white'>Woorkroom</h1>
            </div>
            <div>2</div>
            <img src={pic1} alt="Pic1" />         
        </div>
    )
}