import { Form, Input, Button } from 'antd';
import { connect } from 'react-redux';
import { createPost as createPostAction } from '../../redux/modules/post';



const CreatePost = ({createPost})=>{
    const hadnleSubmit = (values)=>{
        createPost(values)
    }
    return(
        <Form
        name="basic"
        onFinish={hadnleSubmit}
      >
        <Form.Item
          label="title"
          name="title"
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="body"
          name="body"         
        >
        <Input/>
        </Form.Item>  
        <Form.Item >
          <Button type="primary" htmlType="submit">
            Создать
          </Button>
        </Form.Item>
      </Form>
    )
}
export default connect(
    null,
    {
    createPost:createPostAction
    }
)(CreatePost)