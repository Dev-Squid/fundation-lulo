import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Welcome from './components/Welcome';
import WhoWeAreSmall from './components/WhoWeAreSmall';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Welcome />
        <WhoWeAreSmall />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
