import React, { useEffect, useState } from "react";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Menu from "../components/Menu";
import axios from "axios";
import moment from "moment"
import { useContext } from "react";
import { AuthContext } from "../context/authContext";

const Single = () => {
  const [post, setPost] = useState({});
  const location = useLocation();
  const navigate = useNavigate();
  const postId = location.pathname.split("/")[2];
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:8800/api/posts/${postId}`);
        setPost(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [postId]);

  const handleDelete = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        console.error("Token not found!");
        return;
      }
      const headers = {
        Authorization: `Bearer ${token}`
      };
      await axios.delete(`http://localhost:8800/api/posts/${postId}`, { headers });
      navigate("/");
    } catch (err) {
      console.error("Error deleting post:", err);
    }
  };

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent
  }

  return (
    <div className="singlen">
      <div className="row">
        <div className="col-sm-8">
          <div className="content">
            <img src={`../public/upload/${post?.img}`} alt="no image" style={{ maxWidth: '100%', height: 'auto' }} />
            <div className="user">
              <img src={post.userImg} alt="" />
              <div className="info">
                <span>{currentUser?.username || "Guest"}</span>
                <p>Posted {moment(post.date).fromNow()}</p>
              </div>
              {currentUser && post && currentUser.username === post.username && (
                <div className="edit">
                  <Link to={`/write?edit=${post.id}`} state={post}>
                    <img src={Edit} alt="" />
                  </Link>
                  <img onClick={handleDelete} src={Delete} alt="Delete" />
                </div>
              )}

            </div>
            <h1>{getText(post.title)}</h1>
            <p>{getText(post.description)}</p>
          </div>
        </div>
        <div class="col-sm-4">
          <div className="menu">
            <Menu />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Single;
