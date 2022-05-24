import './App.css';
import { connect } from 'react-redux';
import { getPosts as getPostsAction,deletePost as deletePostAction } from './redux/modules/post';
import Post from './components/Post/Post';
import 'antd/dist/antd.css'; 
import { useEffect } from 'react';
import CreatePost from './components/CreatePost/CreatePost';


function App({posts,getPosts,deletePost}) {
  useEffect(()=>{
    getPosts()
  },[])
 
  return (
    <div className="App">
      <CreatePost/>
      {posts?.map((item)=><Post deletePost={deletePost} id={item.id} key={item.id} title={item.title} body={item.title} />)}
    </div>
  );
}

export default connect(
    ({posts})=>({posts:posts.posts}) ,
    { 
      getPosts:getPostsAction,
      deletePost:deletePostAction
    }
)(App);
