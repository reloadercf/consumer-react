import React, { useEffect, useState } from 'react';

import Item from './components/Item'

function App() {
  let [products, setProducts] = useState()

  let getData = async () => {
    let url = `http://localhost:4000/`
    let getFetchData = await fetch(url).then(resul => resul.json())
    setProducts(getFetchData)
  }


  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      <h1>Burger-Quenn-rest</h1>
      {products && products.data.map(product =>
        <Item product={product} key={product.id} />
      )}
    </div>
  );
}

export default App;