
import { useForm } from 'react-hook-form';
import SectionTitle from '../../../components/sectionTitle/SectionTitle';
import { FaUtensilSpoon } from 'react-icons/fa';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';
import useAxiosSecure from '../../../Hooks/useAxiosSecure'
import Swal from 'sweetalert2';

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const AddItems = () => {
      const { register, handleSubmit, reset } = useForm()
      const axiosPublic = useAxiosPublic()
      const axiosSecure = useAxiosSecure()
      const onSubmit = async (data) => {
            console.log(data)
            //image upload to imagebb and then get an url
            const imageFile = {
                  image: data.image[0]
            }
            const res = await axiosPublic.post(image_hosting_api, imageFile, {
                  headers: {
                        'Content-Type': 'multipart/form-data'
                  }
            })
            if (res.data.success) {
                  // now send the menu item data to the server with the image url
                  const menuItem = {
                        name: data.name,
                        category: data.category,
                        price: parseFloat(data.price),
                        recipe: data.recipe,
                        image: res.data.data.display_url
                  }
                  //
                  const menuRes = await axiosSecure.post('/menu', menuItem);
                  console.log(menuRes.data)
                  if (menuRes.data.insertedId) {
                        reset()
                        //show success pop pup
                        Swal.fire({
                              position: "top-end",
                              icon: "success",
                              title: `${data.name} is added to the menu`,
                              showConfirmButton: false,
                              timer: 1500
                            });
                  }
            }
            console.log("with image url", res.data)
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
                                          {...register("name", { required: true })} className="input input-bordered w-full " />

                              </label>
                              <div className='flex gap-6'>
                                    {/* Category */}
                                    <label className="form-control w-full my-6">
                                          Category*
                                          <select defaultValue="default" {...register('category', { required: true })}
                                                className="select select-bordered w-full ">
                                                <option disabled value="default">Select A Category</option>
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
                                                {...register("price", { required: true })} className="input input-bordered w-full " />

                                    </label>
                              </div>
                              {/* recipe details */}
                              <label className="form-control">
                                    <div className="label">
                                          <span className="label-text">Recipe details</span>

                                    </div>
                                    <textarea  {...register("recipe")} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>

                              </label>
                              <div className='form-control w-full my-6'>
                                    <input  {...register("image", { required: true })} type="file" className="file-input w-full max-w-xs" />
                              </div>
                              <button className='btn'>Add Item <FaUtensilSpoon className='ml-4'></FaUtensilSpoon></button>
                        </form>
                  </div>
            </div>
      );
};

export default AddItems;