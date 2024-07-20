import React from 'react';
import { useParams } from 'react-router-dom';

const ExpandedBlog = () => {
  const { id } = useParams(); // Get the id from the URL

  const fetchBlog = (id) => {
   
    return {
      id: id,
      image: 'blog1.jpg', // Example image
      title: 'First Blog',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut convallis justo ac lorem.',
      date: 'June 1, 2024'
    };
  };

  const blog = fetchBlog(id);

  if (!blog) {
    return <div>Blog not found</div>;
  }

  const { image, title, text, date } = blog;

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <img src={image} className="img-fluid mb-2" alt="Blog" />
          <h2>{title}</h2>
          <p>{text}</p>
          <p className="text-muted">{date}</p>
        </div>
      </div>
    </div>
  );
};

export default ExpandedBlog;
