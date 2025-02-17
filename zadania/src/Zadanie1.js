import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function Zadanie1() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Strona główna</Link>
          </li>
          <li>
            <Link to="/about">O nas</Link>
          </li>
          <li>
            <Link to="/level">Poziomy</Link>
          </li>
          <li>
            <Link to="/contact">Kontakt</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/level" element={<Level />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return <h2>Witaj na stronie głównej</h2>;
}

function About() {
  return <p>Jesteśmy zespołem programistów</p>;
}

function Level() {
  return (
    <>
      <p>Wybierz poziom</p>
      <select>
        <option>poziom 1</option>
        <option>poziom 2</option>
        <option>poziom 3</option>
        <option>poziom 4</option>
        <option>poziom 5</option>
      </select>
    </>
  );
}

function Contact() {
  return (
    <>
      <h3>Kontakt do nas</h3>
      <p>
        22 825 09 99 sekretariat@technikumpolna.pl ul. Polna 7 00-625 Warszawa
      </p>
    </>
  );
}
