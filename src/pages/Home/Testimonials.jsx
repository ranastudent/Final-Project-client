import SectionTitle from "../../components/sectionTitle/SectionTitle";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaHandHoldingHeart } from "react-icons/fa";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const Testimonials = () => {
      const [reviews, setReviews] = useState([])
      useEffect(() => {
            fetch('http://localhost:5000/reviews')
                  .then(res => res.json())
                  .then(data => setReviews(data))
      }, [])
      return (
            <section className="my-20">
                  <SectionTitle
                        subHeading='What Our Client Say'
                        heading={'testimonials'}
                  ></SectionTitle>
                  <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                        {
                              reviews.map(review => <SwiperSlide
                                    key={review._id}
                              >
                                    <div className="flex flex-col items-center mx-24 my-16">
                                          <Rating
                                                style={{ maxWidth: 180 }}
                                                value={review.rating}
                                                readOnly
                                          />
                                          <div className="flex my-6 text-2xl">
                                          <FaHandHoldingHeart />
                                          <FaHandHoldingHeart />

                                          </div>
                                          <p className="py-8">{review.details}</p>
                                          <h3 className="text-2xl text-orange-400">{review.name}</h3>
                                    </div>
                              </SwiperSlide>)
                        }
                  </Swiper>
            </section>
      );
};

export default Testimonials;