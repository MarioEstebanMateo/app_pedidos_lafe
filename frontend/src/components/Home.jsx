import React from 'react'

import './Home.css'

const Home = () => {

  return (
    <div>

      <div className='sectionsucursal'>
      <h2 className='homeh2sucursal'>Seleccione su sucursal</h2>
      <select name="selectsucursal" id="selectsucursal">
        <option value="">Sucursal 1</option>
        <option value="">Sucursal 2</option>
      </select>
      </div>

      <div className='sectionproductos'>
      <h2 className='homeh2productos'>Seleccione los productos</h2>
      <select name="selectproductos" id="selectproductos">
        <option value="">Producto 1</option>
        <option value="">Producto 2</option>
      </select>
      </div>

    </div>
  )
}

export default Home