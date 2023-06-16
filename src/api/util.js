export const fetchPosts = async () => {
  setLoading(true);
  try {
    const response = await getPost(postId);
    setLoading(false);
    setData(response);
  } catch (err) {
    // 
  }
}