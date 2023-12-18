
import react from "react"
import logo from "../assets/logo.png";

const All=["team","Stream","Memories"];
    
    const Navbar = () => {
      return (
       <>
       <div className='flex justify-around items-center bg-slate-500 flex-wrap '>
        <img src={logo} alt="" />
        {/* <h2 className=' text-white text-xl  '></h2> */}
        <div className='flex gap-[5rem] text-white text-xl '>
          {All.map((items)=>{
           return <a href="">{items}</a>

})}



        {/* <button className='text-white text-xl bg-orange-600 p-2 px-3 rounded-xl'>Contact</button> */}
        </div>
    </div></>
      )
    }
    
    export default Navbar