import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post, PostProps } from "./components/Post";

import styles from './App.module.css';
import './global.css';

interface Posts extends PostProps {
  id: number;
}

const posts: Posts[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://images.unsplash.com/photo-1599586090262-66b8c4b3999e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      name: 'Amy Hogan',
      role: 'Dev Front End'
    },

    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },

      { type: 'link', content: 'amy.design/doctorcare' },
    ],

    publishedAt: new Date('2022-10-01 17:49:30'),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://images.unsplash.com/photo-1583071299210-c6c113f4ac91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fG1hbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      name: 'Erik Patterson',
      role: 'UI Designer'
    },

    content: [
      { type: 'paragraph', content: 'Fala pessoal! 👋' },
      { type: 'paragraph', content: 'Finalmente finalizei meu novo site/portfólio. Foi um baia desafio criar todo designer, mas consegui! 💪🏻' },

      { type: 'link', content: 'erikpatterson.design' },
    ],

    publishedAt: new Date('2022-10-02 12:30:30'),
  },
];

export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id} 
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />)
          })}
        </main>
      </div>
    </div>
  )
}

