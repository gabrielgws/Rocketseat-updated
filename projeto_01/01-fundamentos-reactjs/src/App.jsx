import { Post } from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

export function App() {
  return (
    <>
    <Header />
    <div className={styles.wrapper}>
      <Sidebar />
      <main>
        <Post
            author="Gabriel Willian"
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi ipsum, voluptatem corporis cum consectetur dignissimos illum odit, ea minus assumenda deleniti ad qui vel explicabo impedit inventore ut ratione quos."
          />

          <Post
            author="Leilane Mara"
            content="Um outro post"
          />
      </main>
    </div>
    </>
  )
}
