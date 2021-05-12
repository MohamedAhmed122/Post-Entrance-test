import { useField } from "formik";
import { FormControl } from "@material-ui/core";

import CustomInput from "../CustomInput";

export default function FromInput({ label, placeholder, ...props }) {
  const [field, meta] = useField(props);
  return (
    <FormControl style={{ width: "100%" }} error={meta.touched && !!meta.error}>
      <CustomInput
        placeholder={placeholder}
        {...field}
        {...props}
        style={{
          marginBottom: "0.5rem",
          padding: 10,
        }}
      />
      {meta.error && meta.touched ? (
        <label style={{ color: "red" }}>{meta.error}</label>
      ) : null}
    </FormControl>
  );
}
