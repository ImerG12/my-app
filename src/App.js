import MainList from './MainList';
import './App.css';
import Title from './Title';
import Footer from './Footer';
import { HashRouter as Router, Route } from 'react-router-dom'
import About from './About'
import Foodies from './Foodies'
import Community from './Community'



function App() {
  return (
<Router>
    <div className="App">
      <Title/>
     <Route exact path="/" component={MainList}/>
     <Route path="/about" component={About} />
     <Route path="/details/:id" component={Foodies} />
     <Route path="/Community" component={Community} />
  
      <Footer/>
    </div>
  </Router>

  );
}
export default App;
