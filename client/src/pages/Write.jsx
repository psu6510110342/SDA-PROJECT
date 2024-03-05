import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import moment from "moment";

const Write = () => {
  const location = useLocation();
  const state = location.state || {}; // Default to an empty object if state is undefined
  const [value, setValue] = useState(state.description || "");
  const [title, setTitle] = useState(state.title || "");
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState(state.cat || "");
  const navigate = useNavigate();
  const defaultImageFile = new File(["../public/upload/noimage.png"], "noimage.png");

  useEffect(() => {
    setValue(state.title || "");
    setTitle(state.description || "");
    setCat(state.cat || "");
  }, [state]);

  const upload = async (file) => {
    try {
      const formData = new FormData();
      console.log("File:", file);
      formData.append("file", file);
      const res = await axios.post("http://localhost:8800/api/upload", formData);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    
    // Pass the file parameter to the upload function
    const imgUrl = await upload(file);
    console.log(imgUrl);
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("Token not found!");
        return;
      }
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      if (state.id) {
        await axios.put(
          `http://localhost:8800/api/posts/${state.id}`,
          {
            title,
            description: value,
            cat,
            img: file ? imgUrl : "",
          },
          { headers }
        );
      } else {
        await axios.post(
          `http://localhost:8800/api/posts/`,
          {
            title,
            description: value,
            cat,
            img: file ? imgUrl : "",
            date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
          },
          { headers }
        );
      }

      // Navigate to another page after successful operation
      navigate("/");
    } catch (err) {
      console.log(err);
      // Handle error
    }
  };

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  };

  return (
    <div className="add">
      <div className="content">
        <input type="text" placeholder="Title" value={getText(value)} onChange={(e) => setTitle(e.target.value)} />
        <div className="editorContainer">
          <ReactQuill className="editor" theme="snow" value={getText(title)} onChange={setTitle} />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status: </b> Draft
          </span>
          <span>
            <b>Visibility: </b> Public
          </span>
          <input
            style={{ display: "none" }}
            type="file"
            id="file"
            name=""
            onChange={(e) => setFile(e.target.files[0])}
          />
          <label className="file" htmlFor="file">
            Upload Image
          </label>
          <div className="buttons">
            <button>Save as a draft</button>
            <button onClick={handleClick}>Publish</button>
          </div>
        </div>
        <div className="item">
              <h1>Category</h1>
              <div className="cat">
                <input
                  type="radio"
                  checked={cat === "art"}
                  name="cat"
                  value="art"
                  id="art"
                  onChange={(e) => setCat(e.target.value)}
                />
                <label htmlFor="art">Art</label>
              </div>
              <div className="cat">
                <input
                  type="radio"
                  checked={cat === "science"}
                  name="cat"
                  value="science"
                  id="science"
                  onChange={(e) => setCat(e.target.value)}
                />
                <label htmlFor="science">Science</label>
              </div>
              <div className="cat">
                <input
                  type="radio"
                  checked={cat === "technology"}
                  name="cat"
                  value="technology"
                  id="technology"
                  onChange={(e) => setCat(e.target.value)}
                />
                <label htmlFor="technology">Technology</label>
              </div>
              <div className="cat">
                <input
                  type="radio"
                  checked={cat === "cinema"}
                  name="cat"
                  value="cinema"
                  id="cinema"
                  onChange={(e) => setCat(e.target.value)}
                />
                <label htmlFor="cinema">Cinema</label>
              </div>
              <div className="cat">
                <input
                  type="radio"
                  checked={cat === "design"}
                  name="cat"
                  value="design"
                  id="design"
                  onChange={(e) => setCat(e.target.value)}
                />
                <label htmlFor="design">Design</label>
              </div>
              <div className="cat">
                <input
                  type="radio"
                  checked={cat === "food"}
                  name="cat"
                  value="food"
                  id="food"
                  onChange={(e) => setCat(e.target.value)}
                />
                <label htmlFor="food">Food</label>
              </div>
            </div>
          </div>
        </div>
  );
};

export default Write;
