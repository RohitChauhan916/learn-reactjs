import logo from './logo.svg';
import './App.css';
import { Container } from 'react-bootstrap';
import Header from './header';
import Footer from './footer';

function App() {
  return (
    <div className="App">
      <Header email="rohitchauhan916@gmail.com"/>
      <Footer />
    </div>
  );
}

export default App;
