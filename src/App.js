import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Produtos from './Components/Produtos';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Contato from './Components/Contato';
import Produto from './Components/Produto';
import Sobre from './Components/Sobre';
import Funcionamento from './Components/Funcionamento';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Produtos />} />
            <Route path="produto/:id" element={<Produto />} />
            <Route path="contato" element={<Contato />} />
            <Route path="sobre" element={<Sobre />} />
            <Route path="funcionamento" element={<Funcionamento />} />
          </Routes>
        </div>
        <Footer />
        <h1 className="direitos">
          © 2021 UniJobs - Todos os direitos reservados
        </h1>
      </BrowserRouter>
    </div>
  );
}

export default App;
