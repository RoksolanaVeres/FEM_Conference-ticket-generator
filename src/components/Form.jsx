import uploadIcon from "../assets/images/icon-upload.svg";
import infoIcon from "../assets/images/icon-info.svg";
import { useState } from "react";

export default function Form() {
  // const [avatarError, setAvatarError] = useState(null);
  const [userInfo, setUserInfo] = useState({
    fullName: "",
    email: "",
    username: "",
    avatarFile: null,
    avatarPreview: null,
  });

  const [formErrors, setFormErrors] = useState({
    fullNameError: null,
    emailError: null,
    usernameError: null,
    avatarError: null,
  });

  function handleInputChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    if (value === "") {
      setFormErrors((prev) => ({
        ...prev,
        [name + "Error"]: `This is a required field. Please enter your ${name}`,
      }));
    } else {
      setUserInfo((prevInfo) => ({
        ...prevInfo,
        [name]: value,
      }));
      setFormErrors((prev) => ({
        ...prev,
        [name + "Error"]: null,
      }));
    }
  }

  function handleFileChange(e) {
    const file = e.target.files[0];
    if (!file) return;

    if (file.size > 500 * 1024) {
      setFormErrors((prev) => ({
        ...prev,
        avatarError: "File must be less than 500KB",
      }));
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setUserInfo((prev) => ({
        ...prev,
        avatarFile: file,
        avatarPreview: reader.result,
      }));
      setFormErrors((prev) => ({
        ...prev,
        avatarError: null,
      }));
    };

    reader.readAsDataURL(file);
  }

  return (
    <form>
      <div className="form-field">
        <label htmlFor="avatar">
          <p className="label-text">Upload Avatar</p>
          <div className="file-input-container">
            <input
              type="file"
              id="avatar"
              name="avatar"
              accept="image/jpg, image/png, image/jpeg"
              onChange={handleFileChange}
            />
            {userInfo.avatarPreview ? (
              <img src={userInfo.avatarPreview} alt="avatar preview" className="avatarPreview" />
            ) : (
              <div className="uploadIcon-container">
                <img src={uploadIcon} alt="upload icon" />
              </div>
            )}

            <p className="inputText">Drag and drop or click to upload</p>
          </div>
        </label>
        <div className="input-notification">
          <img src={infoIcon} alt="info icon" />
          {formErrors.avatarError ? (
            <p className="input-error">File too large. Please upload a photo under 500KB</p>
          ) : (
            <p>Upload your photo (JPG or PNG, max size: 500KB)</p>
          )}
        </div>
      </div>

      <div className="form-field">
        <label htmlFor="fullName" className="label-text">
          Full Name
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          className="inputText"
          onChange={handleInputChange}
        />
        {formErrors.fullNameError && (
          <div className="input-notification ">
            <img src={infoIcon} alt="info icon" />
            <p className="input-error">{formErrors.fullNameError}</p>
          </div>
        )}
      </div>
      <div className="form-field">
        <label htmlFor="email" className="label-text">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="example@email.com"
          className="inputText"
          onChange={handleInputChange}
        />
        {formErrors.emailError && (
          <div className="input-notification ">
            <img src={infoIcon} alt="info icon" />
            <p className="input-error">{formErrors.emailError}</p>
          </div>
        )}
      </div>
      <div className="form-field">
        <label htmlFor="username" className="label-text">
          GitHub Username
        </label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="@yourusername"
          className="inputText"
          onChange={handleInputChange}
        />
        {formErrors.usernameError && (
          <div className="input-notification ">
            <img src={infoIcon} alt="info icon" />
            <p className="input-error">{formErrors.usernameError}</p>
          </div>
        )}
      </div>
      <div className="form-field">
        <button type="submit">Generate My Ticket</button>
      </div>
    </form>
  );
}
