import { FaAd, FaBook, FaCalendar, FaHome, FaList, FaListAlt, FaSearch, FaShoppingCart, FaUsers, FaUtensils,  } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../Hooks/useCart";
import { MdEmail } from "react-icons/md";
import useAdmin from "../Hooks/useAdmin";


const Dashboard = () => {
      const [cart] = useCart()
      //TODO: get isAdmin value from the database
      const [isAdmin] = useAdmin();
      return (
            <div className="flex">
                  {/* dashboard Side bar */}
                  <div className="w-64 min-h-screen bg-orange-400">
                        <ul className="menu p-4">
                              {
                                    isAdmin ?
                                          <>
                                                <li>

                                                      <NavLink to='adminHome'>
                                                            <FaHome></FaHome>
                                                            Admin Info
                                                      </NavLink>
                                                </li>
                                                <li>

                                                      <NavLink to='addItems'>
                                                            <FaUtensils></FaUtensils>
                                                            Add items
                                                      </NavLink>
                                                </li>
                                                <li>

                                                      <NavLink to='manageItems'>
                                                            <FaListAlt></FaListAlt>
                                                            Manage Items
                                                      </NavLink>
                                                </li>
                                                <li>

                                                      <NavLink to='bookings'>
                                                            <FaBook></FaBook>
                                                            Manage Booking
                                                      </NavLink>
                                                </li>
                                                <li>

                                                      <NavLink to='users'>
                                                            <FaUsers></FaUsers>
                                                            All Users
                                                      </NavLink>
                                                </li>
                                          </>
                                          :
                                          <>
                                                <li>

                                                      <NavLink to='userHome'>
                                                            <FaHome></FaHome>
                                                            User Info
                                                      </NavLink>
                                                </li>
                                                <li>

                                                      {/* <NavLink to='paymentHistory'>
                                                            <FaCalendar></FaCalendar>
                                                            PaymentHistory
                                                      </NavLink> */}
                                                </li>
                                                <li>

                                                      <NavLink to='cart'>
                                                            <FaShoppingCart></FaShoppingCart>
                                                            My Cart ({cart.length})
                                                      </NavLink>
                                                </li>
                                                <li>

                                                      <NavLink to='dashboard/review'>
                                                            <FaAd></FaAd>
                                                            Add a Review
                                                      </NavLink>
                                                </li>
                                                <li>

                                                      <NavLink to='paymentHistory'>
                                                            <FaList></FaList>
                                                           Payment History
                                                      </NavLink>
                                                </li>
                                          </>
                              }
                              {/* Shared Nav links */}
                              <div className="divider"></div>
                              <li>

                                    <NavLink to='/'>
                                          <FaHome></FaHome>
                                          User Home
                                    </NavLink>
                              </li>
                              <li>

                                    <NavLink to='/order/salad'>
                                          <FaSearch></FaSearch>
                                          Menu
                                    </NavLink>
                              </li>
                              <li>

                                    <NavLink to='/order/contact'>
                                          <MdEmail />

                                          Contact
                                    </NavLink>
                              </li>
                        </ul>
                  </div>
                  {/* Content */}
                  <div className="flex-1 p-8">
                        <Outlet></Outlet>
                  </div>
            </div>
      );
};

export default Dashboard;