
import SectionTitle from '../../components/sectionTitle/SectionTitle';
import MenuItem from '../Shared/MenuItem/MenuItem';
import useMenu from '../../Hooks/useMenu';

const PopularMenu = () => {
      const [menu] = useMenu()
      const popular = menu.filter(item=>item.category ==='popular')
      // const [menu, setMenu] = useState([])
      // useEffect(()=>{
      //       fetch('menu.json')
      //       .then(res => res.json())
      //       .then(data => {
      //             const popularItem = data.filter(item => item.category === 'popular')
      //             setMenu(popularItem)
      //       })
      // },[])
      return (
            <section className='mb-12'>
                  <SectionTitle
                  heading={'from our menu'}
                  subHeading={'PopularItems'}
                  ></SectionTitle>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                        {
                              popular.map(item=><MenuItem 
                              key={item._id}
                              item={item}
                              ></MenuItem>)
                        }
                  </div>
                  <div className="flex justify-center mt-4"> 
                        <button className="btn btn-outline border-0 border-b-4">View Full Menu</button> 
                  </div>
            </section>
      );
};

export default PopularMenu;