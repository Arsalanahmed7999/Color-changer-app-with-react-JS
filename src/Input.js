import React from 'react'
import colorNames from 'colornames';
const input = ({colorValue, setColorValue, setHexColor, isDarkColor, setIsDarkColor}) => {
  return (
    <form onSubmit={(e)=> e.preventDefault()}>
      {/* <label>Add the color name: </label> */}
      <input type="text" className='inputclass'
      autoFocus
      placeholder='Add the color name'
      value = {colorValue}
      onChange = {(e)=>{setColorValue(e.target.value);
      setHexColor(colorNames(e.target.value))}}    
      />
      <button
      type='button'
      onClick={()=>setIsDarkColor(!isDarkColor)}
      >Toggle text color</button>
    </form>
  )
}

export default input
