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
