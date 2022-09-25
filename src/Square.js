import React from 'react'
const Square = ({colorValue, hexColor, isDarkColor}) => {
  return (
    <section className='square' style={{backgroundColor:colorValue,
    color:isDarkColor?'#000':'#FFF'}}>
      <p>{colorValue?colorValue:'Enter color'}</p>
      <p>{hexColor?hexColor:null}</p>
    </section>
  )
}
Square.defaultProps = {
  colorValue:'Enter the color value'
}
export default Square

