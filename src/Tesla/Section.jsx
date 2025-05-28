

function Section(props) {
  return (
   <>
   <div className="section"  style={{backgroundImage:`url(${props.bgimage})`}}>
 <div className='top'>
     <h1>{props. heading}</h1>
      <p>{props.paragraph}</p>
    </div>
    <div className='bottom'>
        { props.buttonright?( <button >{props.buttonright}</button>):""

        } <button >{props.buttonleft}</button>
        
    {props. Dropdownarrow? <img src={props.Dropdownarrow} alt="" className="downarrow"/>:""}
    </div>
   </div>
   
   </>
  )
}

export default Section