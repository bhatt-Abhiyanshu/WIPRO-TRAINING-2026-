
import Carousel from "../components/Carousel";
import heroBanner from "../assets/hero-banner.png";
const Home = () => {
  return (
    <>
      <Carousel />
      <div className="w-full">
      <img
        src={heroBanner}
        alt="Colorful e-commerce hero banner"
        className="w-full h-screen object-cover"
      />
    </div>
      
    </>
  );
};

export default Home;
