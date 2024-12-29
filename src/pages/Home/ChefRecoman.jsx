import React, { useEffect, useState } from 'react';
import SectionTitle from '../../components/sectionTitle/SectionTitle';
import RecomandItem from '../Shared/recomandItem/RecomandItem';

const ChefRecoman = () => {
      const [recomand, setRecomand] = useState([])
      useEffect(()=>{
            fetch('menu.json')
            .then(res => res.json())
            .then(data=>{
                  const popularItem = data.filter(item => item.category === 'popular')
                  setRecomand(popularItem)
            })
      },[])
      return (
            <section className='mb-12'>
                  <SectionTitle
                  subHeading={'should try'}
                  heading={'CHEF RECOMMENDS'}
                  >
                  </SectionTitle>
                  <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 p-10'>
                        {
                              recomand.map(recomandItem=><RecomandItem key={recomandItem._id} item={recomandItem}></RecomandItem>)
                        }
                  </div>
            </section>
            
      );
};

export default ChefRecoman;