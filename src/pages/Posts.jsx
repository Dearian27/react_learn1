import React, {useState, useMemo, useEffect} from 'react';
import PostList from './components/Postlist';
import './styles/App.css'
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';
import MyModal from './components/MyModal/MyModal';
import MyButton from './components/UI/button/MyButton';
import { usePosts } from './hooks/usePosts';
import Pagination from './components/UI/pagination/Pagination';

import PostService from './API/postService';
import Loader from './components/UI/loader/Loader';
import { useFetching } from './hooks/useFetching';
import { getPageCount, getPagesArray } from './utils/pages';


const Posts = () => {

  
  const [posts, setPosts] = useState([
    // {id: 1, title: 'JavaScript', body: 'normal, extention: .js'},
    // {id: 2, title: 'Python', body: 'easy, extention: .py'},
    // {id: 3, title: 'C#', body: 'hard, extention: .cs'}
  ]);
  
  const [filter, setFilter] = useState({sort:'', query:''})
  const [modal, setModal] = useState(false)
  const sortedAndSeachedPosts = usePosts(posts, filter.sort, filter.query)
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)

  let pagesArray = getPagesArray(totalPages)

  const [fetchPosts, isPostsLoading, postError] = useFetching( async (limit, page) => {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data)
    const totalCount = response.headers['x-total-count']

    setTotalPages(getPageCount(totalCount, limit))
  })

  useEffect(() => {
    fetchPosts(limit, page)
  }, []);

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }  

  //Get post from children component
  const removePost = (post) => {
    setPosts(posts.filter(el => el.id !== post.id))
  }
  const removeAllPosts = () => {
    setPosts([])
  }

  const changePage = (page) => {
    setPage(page)
    fetchPosts(limit, page)
  } 

 return (
    <div className="App">
      <MyButton onClick={fetchPosts}>Згенерувати пости</MyButton>
      <MyButton onClick={removeAllPosts}>Видалити все</MyButton>
      <MyButton style={{marginTop: 30}} onClick={() => setModal(true)}>
          Створити користувача
        </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost}/>
      </MyModal>
      <hr style={{margin: '15px 0'}} />
      <PostFilter filter={filter} setFilter={setFilter}/>
      {postError &&
        <p style={{color: 'red'}}>Виникла помилка</p>
      }
      {isPostsLoading
        ? <div style={{display:'flex', justifyContent:'center', marginTop: 50+'px'}}><Loader/></div>
        : <PostList remove={removePost} posts={sortedAndSeachedPosts} title={'Список мов програмування'} />
      }
      <Pagination page={page} changePage={changePage} totalPages={totalPages} />

      
    </div>
  );
}

export default Posts;
