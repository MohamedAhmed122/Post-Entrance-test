import { Formik, Form } from "formik";
import * as Yup from "yup";
import FromInput from "../../common/FormInput";
import CustomButton from "../../common/CustomButton";
import "./styleform.css";
import { createPost, updatePost } from "../../requests/posts";
import LottieView from "../../common/LottieView";
import { useState } from "react";
import { useSnackbar } from "notistack";
import Loading from "../../common/Loading";
import { useParams } from "react-router";

const validationSchema = Yup.object({
  header: Yup.string().required().min(10).label("Header"),
  title: Yup.string().required().min(10).label("Title"),
  description: Yup.string().required().min(20).label("Description"),
  image: Yup.string().url(),
});

export default function CreatePost({ post }) {
  const [displayDone, setDisplayDone] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const { id } = useParams();

  const handleSubmit = (values) => {
    const { header, title, description, image } = values;
    if (id) {
      updatePost(id, {
        header,
        title,
        description,
        image,
      })
        .then((res) => setDisplayDone(true))
        .catch((err) => enqueueSnackbar(`Oops, ${err}`, { variant: "error" }));
    } else {
      createPost({
        header,
        title,
        description,
        image,
      })
        .then((res) => setDisplayDone(true))
        .catch((err) => enqueueSnackbar(`Oops, ${err}`, { variant: "error" }));
    }
  };

  if (id) {
    if (!post) return <Loading />;
  }
  return (
    <div className="create_post">
      <div className="card">
        <h2 className="title">{post?.header ? "Edit" : "Create"} Post </h2>
        <Formik
          validationSchema={validationSchema}
          initialValues={{
            header: post?.header || "",
            title: post?.title || "",
            description: post?.description || "",
            image: post?.image || "",
          }}
          onSubmit={(values) => handleSubmit(values)}
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
                title={post?.header ? "Edit Post" : "Create Post"}
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
