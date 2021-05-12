import { Formik, Form } from "formik";
import * as Yup from "yup";
import FromInput from "../../common/FormInput";
import CustomButton from "../../common/CustomButton";
import "./styleform.css";
import { createPost } from "../../requests/posts";
import LottieView from "../../common/LottieView";
import { useState } from "react";

const validationSchema = Yup.object({
  header: Yup.string().required().min(10).label("Header"),
  title: Yup.string().required().min(10).label("Title"),
  description: Yup.string().required().min(20).label("Description"),
  image: Yup.string().url(),
});

export default function CreatePost() {
  const[displayDone, setDisplayDone] = useState(false)
  return (
    <div className="create_post">
      <div className="card">
        <h2 className="title">Create Post </h2>
        <Formik
          validationSchema={validationSchema}
          initialValues={{ header: "", title: "", description: "", image: "" }}
          onSubmit={(values) => {
            const { header, title, description, image } = values;
            createPost({
              header,
              title,
              description,
              image,
            })
              .then((res) => console.log(res))
              .catch((err) => console.log(err));
              setDisplayDone(true)
          }}
        >
          {({ dirty, isSubmitting, isValid }) => (
            <Form className="flexCol">
              <FromInput name="header" placeholder="Post Header" />
              <FromInput name="title" placeholder="Post Title" />
              <FromInput name="description" placeholder="Post Description" />
              <FromInput
                name="image"
                placeholder="Post Image should be url (optional)"
              />
              <CustomButton
                type="submit"
                title="Create Post"
                disabled={!isValid || isSubmitting}
              />
            </Form>
          )}
        </Formik>
      </div>
     {displayDone && <LottieView setDisplayDone={setDisplayDone} />}
    </div>
  );
}
