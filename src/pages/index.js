import { getPosts } from '@/api';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const response = await getPosts();
        setLoading(false);
        setData(response);
        setFilteredData(response);
      } catch (err) {
        // 
      }
    }
    fetchPosts();
  }, []);

  if (loading) return <>Loading...</>;

  const onSearchChange = (e) => {
    const value = e.target.value;
    const filteredPosts = data.filter(post => post.title.includes(value.toLowerCase()));
    setFilteredData(filteredPosts);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Subskribe App</title>
      </Head>
      <main className={styles.main}>
        <input onChange={onSearchChange}/>
        {filteredData.length > 0 && filteredData.map(post => (
          <Link href={`/${post.id}`}>
            <div key={post.id}>
              {post.title}
            </div>
          </Link>
        ))}
      </main>
    </div>
  );
};

export default Home;
