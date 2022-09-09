import React from 'react'

const MySelect = ({options, defaultValue, value, onChange}) => {
  return(
    <select 
    value={value}
    onChange={event => onChange(event.target.value)} 
    style={{
    backgroundColor:'var(--background-color)',
    color: 'var(--text-color)',
    transition: 'color 500ms linear, background 200ms linear'}}>
      <option disabled value="" key="">{defaultValue}</option> 
      {options.map(option =>
        <option style={{backgroundColor:'var(--background-color)'}} key={option.value} value={option.value}>{option.name}</option>
      )}
    </select>
  )
}

export default MySelect