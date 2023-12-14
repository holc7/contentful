import React, { useState, useEffect } from 'react';
import './CommentSection.css';

const CommentSection = ({ countryName }) => {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");
    const [editingIndex, setEditingIndex] = useState(-1); // Index of the comment being edited

    useEffect(() => {
        // Load comments from local storage
        const storedComments = localStorage.getItem(`comments_${countryName}`);
        if (storedComments) {
            setComments(JSON.parse(storedComments));
        }
    }, [countryName]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editingIndex >= 0) {
            // Update an existing comment
            const updatedComments = comments.map((comment, index) => {
                if (index === editingIndex) {
                    return newComment;
                }
                return comment;
            });
            setComments(updatedComments);
            localStorage.setItem(`comments_${countryName}`, JSON.stringify(updatedComments));
            setEditingIndex(-1);
        } else {
            // Add a new comment
            const updatedComments = [...comments, newComment];
            setComments(updatedComments);
            localStorage.setItem(`comments_${countryName}`, JSON.stringify(updatedComments));
        }
        setNewComment("");
    };

    const handleEdit = (index) => {
        setNewComment(comments[index]);
        setEditingIndex(index);
    };

    const handleDelete = (index) => {
        const updatedComments = comments.filter((_, i) => i !== index);
        setComments(updatedComments);
        localStorage.setItem(`comments_${countryName}`, JSON.stringify(updatedComments));
    };

    return (
        <div className="comment-section">
            <h3>Comments for {countryName}</h3>
            <form onSubmit={handleSubmit}>
                <textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Write a comment..."
                    className="comment-input"
                />
                <button type="submit" className="submit-comment">
                    {editingIndex >= 0 ? 'Update Comment' : 'Post Comment'}
                </button>
            </form>
            <div className="comments-display">
                {comments.map((comment, index) => (
                    <div key={index} className="comment">
                        <p>{comment}</p>
                        <button onClick={() => handleEdit(index)}>Edit</button>
                        <button onClick={() => handleDelete(index)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CommentSection;
