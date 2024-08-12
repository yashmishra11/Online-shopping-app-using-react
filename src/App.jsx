import React, { useState } from 'react';
import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';
import data from "./assets/Data"

function App() {
  let [itemCount, setItemCount] = useState(0);
  return (
    <div>
      <Header itemCount={itemCount}   />
        {data.map((item, index) => (
          <Card itemCount={itemCount} setItemCount={setItemCount} key={index} title={item.title} src={item.img_src} desc={item.desc} />
        ))}
      <Footer/>
    </div>
  )
}

export default App