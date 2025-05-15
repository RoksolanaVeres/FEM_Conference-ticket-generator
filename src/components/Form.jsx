import uploadIcon from "../assets/images/icon-upload.svg";
import infoIcon from "../assets/images/icon-info.svg";

export default function Form() {
  return (
    <form>
      <div className="form-field">
        <label for="avatar">Upload Avatar</label>
        <div className="file-input-container">
          {/* <input type="file" id="avatar" name="avatar" accept="image/png, image/jpg" /> */}
          <button type="button" className="uploadBtn">
            <img src={uploadIcon} />
          </button>
          <p className="inputText">Drag and drop or click to upload</p>
        </div>
      </div>
      <div className="file-info">
        <img src={infoIcon} />
        <p>Upload your photo (JPG or PNG, max size: 500KB)</p>
      </div>
      <div className="form-field">
        <label for="avatar">Full Name</label>
        <input type="text" id="name" name="name" className="inputText" />
      </div>
      <div className="form-field">
        <label for="avatar">Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="example@email.com"
          className="inputText"
        />
      </div>
      <div className="form-field">
        <label for="avatar">GitHub Username</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="@yourusername"
          className="inputText"
        />
      </div>
      <div className="form-field">
        <button type="submit">Generate My Ticket</button>
      </div>
    </form>
  );
}
