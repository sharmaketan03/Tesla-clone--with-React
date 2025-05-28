import { useState } from "react"
import LOGO from "../assets/images/logo.svg"
import { ImCross } from "react-icons/im";
function Header() {
  const [value,setvalue]=useState(false)
  const [animation,setanimation]=useState("")

  function click(e){
    e.preventDefault()

    if(value==true){
       setanimation("slide-out")
      setTimeout(()=>{
            setvalue(false)
      },300)
      
    }else{
      setanimation("slide-in")
      setvalue(true)
      // setanimation("menu-slide-in")
    }
  }

  return (
    <>
   <nav>
      <img src={LOGO} alt="" />

      <ul >
        <li><a href="#">Model 3</a></li>
        <li><a href="#">Model S</a></li>
        <li><a href="#">Model X</a></li>
        <li><a href="#">Model Y</a></li>
        <li><a href="#">Solar Roof</a></li>
        <li><a href="#">Solar Panels</a></li>
        <li><a href="#">Solar Roof</a></li>
      </ul>

      <ul >
        <li><a href="#">Shop</a></li>
        <li><a href="#">Account</a></li>
        <li><a href="#" onClick={click} className="menu">Menu</a></li>
      </ul>
      
    </nav>
   {value && ( <div id="MenuBar"  className={animation} >
       {/* <button>&times;</button> */}
       <ul className={`rightbox ${animation}` }  >
      <ImCross className="icons " onClick={click} id="crossicons"/>
     

        <li><a href="#">Model 3</a></li>
        <li><a href="#">Model S</a></li>
        <li><a href="#">Model X</a></li>
        <li><a href="#">Model Y</a></li>
        <li><a href="#">Solar Roof</a></li>
        <li><a href="#">Solar Panels</a></li>
        <li><a href="#">Solar Roof</a></li>
        <li><a href="#">Exisiting Iventory</a></li>
        <li><a href="#">Used Inventory</a></li>
        <li><a href="#">Trade In</a></li>
        <li><a href="#">Test Drive</a></li>
        <li><a href="#">Power Wall</a></li>
        <li><a href="#">Commercial Energy</a></li>
      </ul>
     </div>
    )}
    </>

    
    
  )
}

export default Header