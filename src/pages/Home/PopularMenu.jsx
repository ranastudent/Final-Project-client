import React, { useEffect, useState } from 'react';
import SectionTitle from '../../components/sectionTitle/SectionTitle';
import MenuItem from '../Shared/MenuItem/MenuItem';

const PopularMenu = () => {
      const [menu, setMenu] = useState([])
      useEffect(()=>{
            fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                  const popularItem = data.filter(item => item.category === 'popular')
                  setMenu(popularItem)
            })
      },[])
      return (
            <section className='mb-12'>
                  <SectionTitle
                  heading={'from our menu'}
                  subHeading={'PopularItems'}
                  ></SectionTitle>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                        {
                              menu.map(item=><MenuItem 
                              key={item._id}
                              item={item}
                              ></MenuItem>)
                        }
                  </div>
                  <button className="btn btn-outline border-0 border-b-4 mt-4">View Full Menu</button>
            </section>
      );
};

export default PopularMenu;