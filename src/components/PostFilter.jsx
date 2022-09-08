import React from 'react'
import MyInput from './UI/input/Input'
import MySelect from './UI/select/MySelect'

const PostFilter = ({filter, setFilter}) => {
  return(
    <div>
      <MyInput
        value={filter.query}
        onChange={e => setFilter({...filter, query: e.target.value})}
        placeholder='Пошук...'
      />
      <MySelect
      value={filter.sort}
      onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
      defaultValue='Сортування'
      options={[
        {value: 'title', name: 'За назвою'},
        {value: 'body', name: 'За описом'},
      ]}>

      </MySelect>
    </div>
  )
}

export default PostFilter