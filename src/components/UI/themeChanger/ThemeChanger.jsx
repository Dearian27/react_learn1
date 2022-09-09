import React from 'react'
import Mybutton from '../button/MyButton'
import styles from './ThemeChanger.module.css'

const ThemeChanger = ({light, dark}) => {
  return(
    <div className={styles.themeChanger}>
      <Mybutton onClick={light}>Light</Mybutton>  
      <Mybutton onClick={dark}>Dark</Mybutton>  
    </div> 
  ) 
}

export default ThemeChanger

