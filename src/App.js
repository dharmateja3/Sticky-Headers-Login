import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar';
import Header from './Header/Header';
import LoginPage from './LoginPage/LoginPage';
import Footer from './Footer/Footer';

function App() {
  return (
    <div>
      <Header/>
      <Navbar/>
      <LoginPage/>
      <Footer/>
    </div>
  );
}

export default App;
