import { Outlet } from 'react-router-dom';
import Posts from '../components/Posts';

export default function PostsList() {
  return (
    <>
      <Outlet></Outlet>
      <main>
        <Posts></Posts>
      </main>
    </>
  );
}
export async function loader() {
  const response = await fetch('http://localhost:8080/posts');
  const resData = await response.json();
  return resData.posts;
}
