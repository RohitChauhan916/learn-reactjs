import logo from './logo.svg';
import './App.css';
import { Container } from 'react-bootstrap';
import Header from './header';
import Footer from './footer';

function App() {
  let headerInfo = {
    email: "rohitchauhan@gmail.com",
    phone: "9877889776"
  }
  return (
    <div className="App">
      <Header headerInfo = {headerInfo}>
        <h1>Children</h1>
      </Header>
      <Footer />
    </div>
  );
}

export default App;
