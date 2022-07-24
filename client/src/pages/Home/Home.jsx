import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Services from "../../components/Services/Services";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Services />
      <Footer />
    </div>
  );
};

export default Home;
