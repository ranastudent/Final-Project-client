
import { useForm } from 'react-hook-form';
import SectionTitle from '../../../components/sectionTitle/SectionTitle';
import { FaUtensilSpoon } from 'react-icons/fa';

const AddItems = () => {
      const { register, handleSubmit } = useForm()
      const onSubmit = (data) => {
            console.log(data)
      }
      return (
            <div>
                  <SectionTitle heading='Add an item' subHeading="What's new?"></SectionTitle>
                  <div>
                        <form onSubmit={handleSubmit(onSubmit)}>

                              <label className="form-control w-full my-6">
                                    Recipe Name*
                                    <input
                                          type="text" placeholder="Recipe Name"
                                          {...register("name", {required: true})}  className="input input-bordered w-full " />

                              </label>
                              <div className='flex gap-6'>
                                    {/* Category */}
                                    <label className="form-control w-full my-6">
                                          Category*
                                          <select {...register('category', {required: true})}
                                                className="select select-bordered w-full ">
                                                <option disabled selected>Select A Category</option>
                                                <option value="salad">Salad</option>
                                                <option value="pizza">Pizza</option>
                                                <option value="soup">soup</option>
                                                <option value="Desert">desert</option>
                                                <option value="Drinks">drinks</option>

                                          </select>

                                    </label>
                                    {/* Price */}
                                    <label className="form-control w-full my-6">
                                          Price*
                                          <input
                                                type="number" placeholder="price"
                                                {...register("price", {required: true})} className="input input-bordered w-full " />

                                    </label>
                              </div>
                              {/* recipe details */}
                              <label className="form-control">
                                    <div className="label">
                                          <span className="label-text">Recipe details</span>

                                    </div>
                                    <textarea  {...register("recipe")}  className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>

                              </label>
                              <div className='form-control w-full my-6'>
                                    <input  {...register("image", {required: true})}  type="file" className="file-input w-full max-w-xs" />
                              </div>
                              <button className='btn'>Add Item <FaUtensilSpoon className='ml-4'></FaUtensilSpoon></button>
                        </form>
                  </div>
            </div>
      );
};

export default AddItems;