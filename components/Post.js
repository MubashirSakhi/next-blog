import Router from "next/router";
import ReactMarkdown from "react-markdown";
import { useEffect, useState } from 'react';


const Post = (props) => {
  const post = props.post;
  const authorName = post.author ? post.author.name : "Unknown author";
  return (
    <div onClick={() => Router.push("/p/[id]", `/p/${props.post.id}`)}>
      <h2>{props.post.title}</h2>
      <small>By {authorName}</small>
     
      <ReactMarkdown children={post.content} />
      <style jsx>{`
        div {
          color: inherit;
          padding: 2rem;
        }
      `}</style>
    </div>
  );
};

export default Post;