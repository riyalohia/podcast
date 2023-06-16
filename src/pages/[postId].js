import { getComments, getPost } from "@/api";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Post = () => {
  const { query } = useRouter();
  const postId = query.postId;
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const response = await getPost(postId);
        const comments = await getComments(postId);
        setLoading(false);
        setData(response);
        setComments(comments);
      } catch (err) {
        // 
      }
    }
    if(postId) fetchPosts();
  }, [postId]);


  if (loading) return <>Loading..</>

  console.log(data, comments);

  return (
    <div>
      <div>{data.title}</div>
      <div>{data.body}</div>
      <br/><br/>
      {comments.length > 0 && comments.map(comment => (
        <div key={comment.id}>
          {comment.email}<br/>
          {comment.body}<br/>
          {comment.name}<br/><br/>
        </div>
      ))}
    </div>
  );
};

export default Post;