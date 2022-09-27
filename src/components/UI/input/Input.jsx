import React from 'react'
import styles from './Input.module.css'

const MyInput = React.forwardRef((props, ref) => {
  return(
    <input ref={ref} className={styles.myInput} {...props}>
      
    </input>
  )
})

export default MyInput;