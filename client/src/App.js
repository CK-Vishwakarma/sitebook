import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Infobar from './components/infobar/Infobar';
import Main from './pages/Main';

function App() {
  return (
    <article className="app-grid-container">
      <section className="infobar flexBox jcfe"><Infobar /></section>
      <section className="headers"><Header /></section>
      <section className="main"><Main /></section>
      <section className="footers"><Footer /></section>
    </article>
  );
}

export default App;
