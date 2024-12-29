
import Cover from '../../Shared/Cover/Cover';
import MenuItem from '../../Shared/MenuItem/MenuItem';

const MenuCategory = ({items, title, coverImg}) => {
      return (
            <div className='pt-8'>
                  {title && <Cover img={coverImg} title={title}></Cover>}
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-10 my-16 mb-16'>
                        {
                              items.map(item=><MenuItem 
                              key={item._id}
                              item={item}
                              ></MenuItem>)
                        }
                  </div>
            </div>
      );
};

export default MenuCategory;