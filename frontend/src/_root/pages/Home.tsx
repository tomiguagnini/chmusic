import CardContainer from "@/components/shared/CardContainer";
import Hero from "@/components/shared/Hero";



const Home = () => {
    return (
        <div className="grid lg:grid-cols-2">
                <Hero/>
                <CardContainer />
        </div>
    );
};

export default Home;
