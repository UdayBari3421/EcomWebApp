import { Hero, LatestCollection, NewsLetter, OurPolicy } from "../Components";
import { BestSeller } from "../Components";

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <BestSeller />
      <OurPolicy />
      <NewsLetter />
    </div>
  );
};
export default Home;
