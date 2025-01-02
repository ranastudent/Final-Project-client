import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";


const FoodCard = ({item}) => {
      const {name, image, recipe, price, _id} = item
      const { user } = useAuth() 
      const location = useLocation()
      const navigate = useNavigate()
      const axiosSecure = useAxiosSecure()
      const [, refetch] = useCart();    
      const handleAddToCart = ()=>{
           if (user && user.email) {
                  //TODO : send cart item to the database
                  // console.log(user.email, food)
                  const cartItem = {
                        menuId :_id,
                        email :user.email,
                        name,
                        image,
                        price,

                  }
                  axiosSecure.post('/carts', cartItem)
                  .then(res =>{
                        console.log(res.data)
                        if (res.data.insertedId) {
                              Swal.fire({
                                    position: "top-end",
                                    icon: "success",
                                    title: `${name} added to your cart`,
                                    showConfirmButton: false,
                                    timer: 1500
                                  });
                                  //refetch the cart to updated the cart item count
                                  refetch();
                        }
                  })
           }else
           {
            Swal.fire({
                  title: "You Are Not Logged In",
                  text: "Please login add to the cart",
                  icon: "warning",
                  showCancelButton: true,
                  confirmButtonColor: "#3085d6",
                  cancelButtonColor: "#d33",
                  confirmButtonText: "Yes, login!"
                }).then((result) => {
                  if (result.isConfirmed) {
                   //send the user to the login page
                  navigate('/login',{state: {from: location}})
                  }
                });
           }
      }
      return (
            <div className="card bg-base-100 w-96 shadow-xl">
                  <figure>
                        <img
                              src={image}
                              alt="Food" />
                  </figure>
                  <p className='absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white'>${price}</p>
                  <div className="card-body flex flex-col items-center">
                        <h2 className="card-title">{name}</h2>
                        <p>{recipe}</p>
                        <div className="card-actions justify-center">
                              <button 
                              onClick={handleAddToCart}
                              className="btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-400 mt-4">Add Cart</button>
                        </div>
                  </div>
            </div>
      );
};

export default FoodCard;