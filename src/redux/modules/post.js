const moduleName = 'posts'


const GET_POSTS =  `${moduleName}/GET_POSTS`
const DELETE_POST =  `${moduleName}/DELETE_POST`
const CREATE_POST =  `${moduleName}/CREATE_POST`

const defaultState = {
    posts:[]
}
export default (state=defaultState,{type,payload})=>{
    switch (type) {
        case GET_POSTS:
            return{
                ...state,
                posts:payload
            }
        case DELETE_POST:
            return{
                ...state,
                posts:state.posts.filter(item => item.id !== payload.id)
            }   
        case CREATE_POST:
                return{
                    ...state,
                    posts:[...state.posts,payload]
                }     
        default:{
            return state
        }
    }
}

export const getPosts = ()=>async(dispatch)=> {
    try {
      await fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((json) => dispatch({type:GET_POSTS,payload:json}));
    } catch (error) {
        console.log(error);
    }
}

export const deletePost = (id) => async(dispatch)=> {
    try {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'DELETE',
          })
          dispatch({type:DELETE_POST,payload:{id}})
    } catch (error) {
        console.log(error);
    }
}
export const createPost = ({title,body}) => async(dispatch)=> {
    try {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
             title,
             body,
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
            .then((response) => response.json())
            .then((json) => dispatch({type:CREATE_POST,payload:json}));
    } catch (error) {
        console.log(error);
    }
}

