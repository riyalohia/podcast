export const getPosts = async () => {
 const response = await fetch('https://jsonplaceholder.typicode.com/posts');
 const result = await response.json();
 return result;
};

export const getPost = async (postID) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postID}`);
  const result = await response.json();
  return result;
 };

 export const getComments = async (postID) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postID}/comments`);
  const result = await response.json();
  return result;
 };