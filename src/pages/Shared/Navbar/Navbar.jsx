
import { NavLink } from 'react-router-dom';
import '../../../style/active.css'
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import { HiMiniShoppingCart } from "react-icons/hi2";
import useCart from '../../../Hooks/useCart';
import useAdmin from '../../../Hooks/useAdmin';

const Navbar = () => {
      const { user, logOut } = useContext(AuthContext)
      const [cart] = useCart()
      const [isAdmin] = useAdmin()
      const handleLogout = () => {
            logOut()
                  .then(() => {

                  })
                  .catch(error => {
                        console.log(error)
                  })
      }
      const navOption = <>
            <li><NavLink to={'/'}>Home</NavLink></li>
            <li><NavLink to={'/menu'}>Our Menu</NavLink></li>
            <li><NavLink to={'/order/salad'}>Order Food</NavLink></li>
            {
                  user && isAdmin && <li><NavLink to='/dashboard/adminHome'>Dashboard</NavLink></li>
            }
            {
                  user && !isAdmin && <li><NavLink to='/dashboard/userHome'>Dashboard</NavLink></li>
            }
            <li className='-mt-2'>
                  <NavLink to='/dashboard/cart'>
                        <button className="btn">
                        <HiMiniShoppingCart className='mr-4'></HiMiniShoppingCart>
                              <div className="badge badge-secondary">+{cart.length}</div>
                        </button>
                  </NavLink>
            </li>

            {
                  user ? <>
                        {/* <span>{user?.displayName}</span> */}
                        <button onClick={handleLogout} className="btn btn-ghost">Logout</button>
                  </> :
                        <>
                              <li><NavLink to={'/login'}>Login</NavLink></li>
                        </>
            }

      </>
      return (
            <div>
                  <div className="navbar max-w-screen-xl mx-auto fixed z-10 bg-opacity-30 bg-black text-white">
                        <div className="navbar-start">
                              <div className="dropdown">
                                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                          <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor">
                                                <path
                                                      strokeLinecap="round"
                                                      strokeLinejoin="round"
                                                      strokeWidth="2"
                                                      d="M4 6h16M4 12h8m-8 6h16" />
                                          </svg>
                                    </div>
                                    <ul
                                          tabIndex={0}
                                          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                          {navOption}

                                    </ul>
                              </div>
                              <a className="btn btn-ghost text-xl">Bistro Boss</a>
                        </div>
                        <div className="navbar-center hidden lg:flex">
                              <ul className="menu menu-horizontal px-1">
                                    {navOption}
                              </ul>
                        </div>
                        <div className="navbar-end">
                              <a className="btn">Button</a>
                        </div>
                  </div>
            </div>
      );
};

export default Navbar;