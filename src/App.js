
import './App.css';
import   {Navbar }  from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';

function App() {
  return (
    <>
        <Navbar/>
        <Sidebar/>
        <Post/>
    </>
  );
}

export default App;
