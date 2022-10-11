import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import axios from "axios";

function CreatePost() {
    const initialValues ={
        title:"",
        postText:"",
        username:"",
    };

    const validationSchema = Yup.object().shape({
        title:Yup.string().required("You must input a Title!"),
        post:Yup.string().required(),
        username:Yup.string().min(3).max(15).required(),
    })

    const onSubmit =(data) =>{
        let formData = {title: data.target.title.value,
            PostText: data.target.postText.value, 
            username: data.target.username.value
        };
        console.log("onSubmit called", formData);
        axios.post("http://localhost:3001/posts/createpost",formData).then((response) => {
       // setListOfPosts(response.data);
        console.log("IT WORKED");
      });
    };

  return (
    <div className="createPostPage">
      <Formik initialValues={initialValues} validationSchema={validationSchema}>
        <Form className="formContainer" onSubmit={onSubmit} >
          <label>Title:</label>
          <ErrorMessage name ="title" component="span"/>
          <Field autoComplete="off" id="inputCreatePost" name="title" 
          placeholder="Manisha" />
          <label>Post Text:</label>
          <ErrorMessage name ="postText" component="span"/>
          <Field autoComplete="off" id="inputCreatePost" name="postText" placeholder="Post" />
          <label>User Name:</label>
          <ErrorMessage name ="username" component="span"/>
          <Field autoComplete="off"
            id="inputCreatePost"
            name="username"
            placeholder="Manisha123"
          />
          <button type="submit">Create Post</button>
        </Form>
      </Formik>
    </div>
  );
}

export default CreatePost;
