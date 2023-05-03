import logo from './logo.svg';
import './App.css';
import Sidebar from './Component/SideBar Section/Sidebar';
import Body from './Component/Body Section/Body';


function App() {
  return (
    <div className='container'>
      <Sidebar />
      <Body />
    </div>
  );
}

export default App;
