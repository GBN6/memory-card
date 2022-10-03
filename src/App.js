import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

const App = () => {
  return (
    <div className='App'>
      <div className='background-image'></div>
      <div className='content'>
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
};

export default App;
