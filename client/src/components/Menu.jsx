import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Menu = ({ }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:8800/api/posts/`);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="menu">
      <h1>Other posts you may like</h1>
      {posts.slice(0, 3).map((post) => (
        <div className="post" key={post.id}>
          <img src={`../public/upload/${post.img}`} alt="" />
          <h2>{post.title}</h2>
          <Link className="link" style={{ color: "#3F72AF" }} to={`/post/${post.id}`}>
            Read More
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Menu;
