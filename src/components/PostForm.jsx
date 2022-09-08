import React, {useState, useRef} from 'react'
import MyButton from './UI/button/MyButton'
import MyInput from './UI/input/Input'

const PostForm = ({create}) => {

  const titleInputRef = useRef();
  const bodyInputRef = useRef();
  
  const [post, setPost] = useState({
    title:'',
    body:'',
  })

  const addNewPost = (el) => {
    el.preventDefault();
    bodyInputRef.current.style.borderColor = 'teal';
    titleInputRef.current.style.borderColor = 'teal';
    if(bodyInputRef.current.value !== '' && titleInputRef.current.value !== '' )
    {
      const newPost = {
        ...post, id: Date.now()
      }
      create(newPost)
      setPost({title: '', body: ''})
    }
    else{
      bodyInputRef.current.style.borderColor = 'red';
      titleInputRef.current.style.borderColor = 'red';
    }
  }

  return(
    <form>
        <MyInput ref={titleInputRef} value={post.title} onChange={el => setPost({...post, title: el.target.value})} type="text" placeholder='Назва поста' />
        <MyInput ref={bodyInputRef} value={post.body} onChange={el => setPost({...post, body: el.target.value})} type="text" placeholder='Опис поста' />
        <MyButton onClick={addNewPost}>Створити пост</MyButton>
      </form>
  )
}

export default PostForm