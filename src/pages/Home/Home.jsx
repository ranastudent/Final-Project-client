import Banner from "./Banner";
import Callus from "./Callus";
import Category from "./Category";
import Chef from "./Chef";
import ChefRecoman from "./ChefRecoman";
import Feature from "./Feature";
import PopularMenu from "./PopularMenu";
import Testimonials from "./Testimonials";


const Home = () => {
      return (
            <div>
                  <Banner></Banner>
                  <Category></Category>
                  <Chef></Chef>
                  <PopularMenu></PopularMenu>
                  <Callus></Callus>
                  <ChefRecoman></ChefRecoman>
                  <Feature></Feature>
                  <Testimonials></Testimonials>
            </div>
      );
};

export default Home;