import './App.css';
import { React } from 'react';
import Datelib from './components/Datelib/Datelib';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Datelib />
      <Footer />
    </div>
  );
}

export default App;
