import logo from './logo.svg';
import './App.css';
import { Container } from 'react-bootstrap';
import Header from './header';
import Footer from './footer';
import Product from './product';
import { blog } from './Data/blog';

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
      <div className="row">
        {blog.map((v,i)=>{
          return(
            <Product pitems = {v} key={i} />
          )
        })}
        
      </div>
      <Footer />
    </div>
  );
}

export default App;
