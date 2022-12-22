import React from 'react'
import Post from './Post'

const posts =[
    {
        id: '123',
        username: 'Lil Mayo',
        userImg: 'https://imageio.forbes.com/specials-images/imageserve/5d420e7c090f4300070e36ff/Alex-Martyn-created-the-rap-loving-Lil-Mayo-brand-on-Instagram-after-converting-his/960x0.jpg?format=jpg&width=960',
        img: 'https://imageio.forbes.com/specials-images/imageserve/5d420e7c090f4300070e36ff/Alex-Martyn-created-the-rap-loving-Lil-Mayo-brand-on-Instagram-after-converting-his/960x0.jpg?format=jpg&width=960',
        caption: "SEE Y'ALL ALIENS IN 2023",
    },
    {
        id: '345',
        username: 'Lil Mayo',
        userImg: 'https://imageio.forbes.com/specials-images/imageserve/5d420e7c090f4300070e36ff/Alex-Martyn-created-the-rap-loving-Lil-Mayo-brand-on-Instagram-after-converting-his/960x0.jpg?format=jpg&width=960',
        img: 'https://imageio.forbes.com/specials-images/imageserve/5d420e7c090f4300070e36ff/Alex-Martyn-created-the-rap-loving-Lil-Mayo-brand-on-Instagram-after-converting-his/960x0.jpg?format=jpg&width=960',
        caption: "SEE Y'ALL ALIENS IN 2023",
    },
]

function Posts() {
  return (
    <div>
        {posts.map((post) =>(
            <Post key={post.id} id={post.id}
            username={post.username}
            userImg={post.userImg}
            img={post.img}
            caption={post.caption}

            />
        ))}

    </div>
  )
}

export default Posts