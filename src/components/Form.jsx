import uploadIcon from "../assets/images/icon-upload.svg";
import infoIcon from "../assets/images/icon-info.svg";
import { useState } from "react";

export default function Form() {
  const [avatar, setAvatar] = useState(null);
  const [avatarError, setAvatarError] = useState(null);

  function handleFileChange(e) {
    const file = e.target.files[0];

    if (file) {
      const isUnder500KB = file.size <= 500 * 1024;
      if (!isUnder500KB) {
        setAvatarError("File must be less than 500KB");
        return;
      }

      // preview image

      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result);
        setAvatarError(null);
      };
      reader.readAsDataURL(file);
    }
  }
  return (
    <form>
      <div className="form-field">
        <label for="avatar">
          <p className="label-text">Upload Avatar</p>
          <div className="file-input-container">
            <input
              type="file"
              id="avatar"
              name="avatar"
              accept="image/jpg, image/png, image/jpeg"
              onChange={handleFileChange}
            />
            {avatar ? (
              <img src={avatar} alt="avatar preview" className="avatarPreview" />
            ) : (
              <div className="uploadIcon-container">
                <img src={uploadIcon} />
              </div>
            )}

            <p className="inputText">Drag and drop or click to upload</p>
          </div>
        </label>
        <div className="input-notification">
          <img src={infoIcon} />
          {avatarError ? (
            <p className="input-error">File too large. Please upload a photo under 500KB</p>
          ) : (
            <p>Upload your photo (JPG or PNG, max size: 500KB)</p>
          )}
        </div>
      </div>

      <div className="form-field">
        <label for="name" className="label-text">
          Full Name
        </label>
        <input type="text" id="name" name="name" className="inputText" />
        <div className="input-notification hidden">
          <img src={infoIcon} />
          <p className="input-error">Please enter your name</p>
        </div>
      </div>
      <div className="form-field">
        <label for="email" className="label-text">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="example@email.com"
          className="inputText"
        />
        <div className="input-notification hidden">
          <img src={infoIcon} />
          <p className="input-error">Please enter a valid email address</p>
        </div>
      </div>
      <div className="form-field">
        <label for="username" className="label-text">
          GitHub Username
        </label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="@yourusername"
          className="inputText"
        />
        <div className="input-notification hidden">
          <img src={infoIcon} />
          <p className="input-error">Please enter your username</p>
        </div>
      </div>
      <div className="form-field">
        <button type="submit">Generate My Ticket</button>
      </div>
    </form>
  );
}
