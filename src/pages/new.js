import { useRouter } from "next/router";
import { useState } from "react";

const Update = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const { push } = useRouter();

  const changeValue = (type) => (e) => {
    const value = e.target.value;
    if (type === 'body')
      setBody(value);
    else
      setTitle(value);
  };

  const onSubmit = async () => {
    await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title,
        body,
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => {
        const { id } = json;
        push(`/${id}`);
      });
  };

  return (
    <div>
      Body
      <input onChange={changeValue('body')} />
      <br />
      Title
      <input onChange={changeValue('title')} />
      <button onClick={onSubmit}>Submit</button>
    </div>
  );
};

export default Update;