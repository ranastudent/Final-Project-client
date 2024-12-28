import Banner from "./Banner";
import Category from "./Category";
import Feature from "./Feature";
import PopularMenu from "./PopularMenu";
import Testimonials from "./Testimonials";


const Home = () => {
      return (
            <div>
                  <Banner></Banner>
                  <Category></Category>
                  <PopularMenu></PopularMenu>
                  <Feature></Feature>
                  <Testimonials></Testimonials>
            </div>
      );
};

export default Home;