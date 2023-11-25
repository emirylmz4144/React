import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

//App class'In üzerindeki yapıdır yani ana çalıştırma yapısı budur ama document'i bu class temsil etmez.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>{/*React devreye girer*/}
    <App />{/* Birnevi document'i temsil edecek olan App classının dönderdiği companent'i ana companent(document olarak )kabul eder*/}
  </React.StrictMode>
);
