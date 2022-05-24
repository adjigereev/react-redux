import { Button, Card } from 'antd';
const { Meta } = Card;

const Post = ({title,body,deletePost,id}) => {
    return(
    <Card>
        <h1>{title}</h1>
        <p>{body}</p>  
        <Button onClick={()=>{deletePost(id)}}  type='primary'> Delete</Button>
  </Card>
  
)}
export default Post