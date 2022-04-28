import logo from './assets/img/logo.png'
import './assets/css/header.css'
import './assets/css/nav.css'
import './assets/css/reset.css'
import './assets/css/main.css'
import './assets/css/footer.css'

function App() {
  return (
    <>
        <header className="cabecalho">
          <nav className="menu_header">
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>

            <div className="btn">
                <a href="#"><ion-icon name="menu-outline"></ion-icon></a>
            </div>
          </nav>
        </header>

        <nav className="nav">
            <ul>
                <li className="list">
                    <a href="#">
                      <span className="icon"><ion-icon name="home-outline"></ion-icon></span>
                      <span className="title">Home</span>
                    </a>
                </li>

                <li className="list">
                    <a href="#">
                      <span className="icon"><ion-icon name="call-outline"></ion-icon></span>
                      <span className="title">Contato</span>
                    </a>
                </li>

                <li className="list">
                    <a href="#">
                      <span className="icon"><ion-icon name="map-outline"></ion-icon></span>
                      <span className="title">Sobre</span>
                    </a>
                </li>
            </ul>
        </nav>

        <main>
            <div className="titulo">
                <h1>Ulitmas noticias</h1>
            </div>

            <section className="card">
                <article className="cards">
                  <h1>Titulo</h1>
                  
                </article>

                <article className="cards">
                  <h1>Titulo</h1>
                  
                </article>

                <article className="cards">
                  <h1>Titulo</h1>
                  
                </article>

                <article className="cards">
                  <h1>Titulo</h1>
                  
                </article>
            </section>  

            <div className="titulo">
                <h1>Ulitmas noticias</h1>
            </div>
            <section className="new">
                <article className="new_card">
                    <h1>Titulo</h1>

                </article>

                <article className="new_card">
                    <h1>Titulo</h1>

                </article>

                <article className="new_card">
                    <h1>Titulo</h1>

                </article>
                
            </section>
        </main>

        <footer>
            <ul className="box_links">
              <a href="#">
                <li>Lorem ipsum </li>
                </a>
              <a href="#">
                <li>Lorem ipsum </li>
                </a>
              <a href="#">
                <li>Lorem ipsum </li>
                </a>
              <a href="#">
                <li>Lorem ipsum </li
                ></a>
            </ul>
        </footer>
    </>
  );
}

export default App;
