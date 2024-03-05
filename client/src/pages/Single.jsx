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
      // Get the token from local storage
      const token = localStorage.getItem('token');
  
      // Check if token exists
      if (!token) {
        console.error("Token not found!");
        return; // Handle the absence of token as per your requirement
      }
  
      // Set the token in the request headers
      const headers = {
        Authorization: `Bearer ${token}`
      };
  
      // Send the delete request with the token included in the headers
      await axios.delete(`http://localhost:8800/api/posts/${postId}`, { headers });
      
      // Navigate to another page after successful deletion
      navigate("/");
    } catch (err) {
      console.error("Error deleting post:", err);
      // Handle error
    }
  };

  const getText = (html) =>{
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent
  }

    return (
        <div className="single">
            <div className="content">
                <img src={'../public/upload/'+post?.img} alt="no image" />
                <div className="user">
                    <img src={post.userImg} alt="" />
                    <div className="info">
                        <span>{post.username}</span>
                        <p>Posted {moment(post.date).fromNow()}</p>
                    </div>
                    {currentUser.username === post.username && (
                        <div className="edit">
                            <Link to={`/write?edit=${post.id}`} state={post}>
                                <img src={Edit} alt="Edit" />
                            </Link>
                            <img onClick={handleDelete} src={Delete} alt="Delete" />
                        </div>
                    )}

                </div>
                <h1>{getText(post.title)}</h1>
                {getText(post.description)}
            </div>
            <div className="menu">
                <Menu cat={post.cat}/>
            </div>
        </div>
    );
}

export default Single