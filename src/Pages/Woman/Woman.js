import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

import './woman.scss';

function Woman() {
  const [cloth, setCloth] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState('all');

  const handleFilterClick = (filter) => {
    setSelectedFilter(filter);
  };

  useEffect(() => {
    const getCloth = async () => {
      try {
        const response = await axios.get('/data/womanCloth.json');
        setCloth(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    getCloth();
  }, []);

  const filteredCloth = selectedFilter === 'all'
    ? cloth
    : cloth.filter(item => item.category === selectedFilter);

  return (
    <section className='woman'>
      <div className="woman__container">
        <div className='woman__buttons'>
          <button onClick={() => handleFilterClick('all')} className='woman__button'>Все</button>
          <button onClick={() => handleFilterClick('blouses')} className='woman__button'>Блузки</button>
          <button onClick={() => handleFilterClick('jackets')} className='woman__button'>Куртки</button>
          <button onClick={() => handleFilterClick('shoes')} className='woman__button'>Обувь</button>
        </div>
        <div className='woman__products'>
          {filteredCloth.map((item) => (
            <div key={item.id} className='woman__product'>
              <div className='woman__productInfo'>
                <img src={item.img} alt='cloth' className='woman__productImg' />
              <p className='woman__productPrice'>{item.price}</p>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>  
              </div>
              <div className='woman__productShopping'>
                <NavLink className='woman__productLink' to='/shopping'>в корзину</NavLink> 
              </div>

              
                         
            </div>           
          ))}
        </div>
      </div>
    </section>
  );
}

export default Woman;