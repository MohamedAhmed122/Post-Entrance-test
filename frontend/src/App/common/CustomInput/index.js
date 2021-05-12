import "./styleCustomInput.css";


import CancelIcon from "@material-ui/icons/Cancel";

import "./styleCustomInput.css";

export default function CustomInput({ value, onChange, placeholder, icon, onIconClick }) {
  return (
    <div className="custom_input flex_center">
      <input
        value={value}
        onChange={onChange}
        className="custom_input__input"
        placeholder={placeholder}
      />
      {icon && <CancelIcon style={{ color: "gray" }} onClick={onIconClick} />}
    </div>
  );
}
