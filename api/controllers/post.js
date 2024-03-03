import { db } from "../db.js";
import jwt from "jsonwebtoken";

export const getPosts = (req, res) => {
    const q = req.query.cat
        ? "SELECT * FROM post WHERE cat=?"
        : "SELECT * FROM post";

    db.query(q, [req.query.cat], (err, data) => {
        if (err) return res.status(500).send(err);

        return res.status(200).json(data);
    });
};

export const getPost = (req, res) => {
    const q =
        "SELECT p.id, `username`, `title`, `description`, p.img, u.img AS userImg, `cat`,`date` FROM users u JOIN post p ON u.id = p.uid WHERE p.id = ? ";

    db.query(q, [req.params.id], (err, data) => {
        if (err) return res.status(500).json(err);

        return res.status(200).json(data[0]);
    });
};

export const addPost = (req, res) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json("No token provided");
    }

    const tokenString = token.split(' ')[1]; // Extract the token from the "Bearer <token>" format

    jwt.verify(tokenString, "jwtkey", (err, decoded) => {
        if (err) {
            return res.status(403).json("Failed to authenticate token");
        } else {
            // Token is valid, you can access the decoded information
            const userId = decoded.id;
            const q =
                "INSERT INTO post(`title`, `description`, `img`, `cat`, `date`,`uid`) VALUES (?, ?, ?, ?, ?, ?)";
            const values = [
                req.body.title,
                req.body.description,
                req.body.img,
                req.body.cat,
                req.body.date,
                userId, // Use userId instead of userInfo.id
            ];
            db.query(q, values, (err, data) => {
                if (err) {
                    return res.status(500).json("Failed to create post");
                } else {
                    return res.status(200).json("Post has been created.");
                }
            });
        }
    });
};


export const deletePost = (req, res) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json("No token provided");
    }

    const tokenString = token.split(' ')[1]; // Extract the token from the "Bearer <token>" format

    jwt.verify(tokenString, "jwtkey", (err, decoded) => {
        if (err) {
            return res.status(403).json("Failed to authenticate token");
        } else {
            // Token is valid, you can access the decoded information
            const userId = decoded.id;

            // Proceed with deleting the post
            const postId = req.params.id;
            const q = "DELETE FROM post WHERE id = ? AND uid = ?";
            db.query(q, [postId, userId], (err, data) => {
                if (err) {
                    return res.status(403).json("You can delete only your post!");
                } else {
                    // Post deleted successfully
                    return res.status(200).json("Post deleted successfully");
                }
            });
        }
    });
};

export const updatePost = (req, res) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json("No token provided");
    }

    const tokenString = token.split(' ')[1]; // Extract the token from the "Bearer <token>" format

    jwt.verify(tokenString, "jwtkey", (err, decoded) => {
        if (err) {
            return res.status(403).json("Failed to authenticate token");
        } else {
            // Token is valid, you can access the decoded information
            const userId = decoded.id;
            const postId = req.params.id;
            const q =
                "UPDATE post SET `title`= ?, `description`= ?, `img`= ?, `cat`= ?, `date`= ? WHERE `id`= ? AND `uid`= ?";
            const values = [
                req.body.title,
                req.body.description,
                req.body.img,
                req.body.cat,
                req.body.date,
                postId,
                userId,
            ];
            db.query(q, values, (err, data) => {
                if (err) {
                    return res.status(500).json("Failed to update post");
                } else {
                    return res.status(200).json("Post has been updated.");
                }
            });
        }
    });
};
