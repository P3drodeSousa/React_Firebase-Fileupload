import React, { useState } from "react";
import { render } from "react-dom";
import { storage } from "./firebase";

const ReactFirebaseFileUpload = () => {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const [preview, setpreview] = useState(null);
  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    let file = e.target.files[0];

    if (file) {
      let feli = {
        file,
        name: file.name,
        preview: URL.createObjectURL(file),
        progress: 0,
      };
      setpreview(feli.preview);
      setImage(feli);
    }
  };

  const handleUpload = () => {
    const uploadTask = storage.ref(`images`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            setUrl(url);
          });
      }
    );
  };

  console.log("image: ", image);

  return (
    <div>
      <progress value={progress} max="100" />
      <br />
      <br />
      <input type="file" onChange={handleChange} />
      <button onClick={handleUpload}>Upload</button>
      <br />
      {url}
      <br />
      <img
        src={preview || "http://via.placeholder.com/300"}
        alt="firebase-image"
      />
    </div>
  );
};

render(<ReactFirebaseFileUpload />, document.querySelector("#root"));
