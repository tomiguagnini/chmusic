import CardContainer from "@/components/shared/CardContainer";
import Hero from "@/components/shared/Hero";



const Home = () => {
    return (
        <>
            <div className="mt-16">
                <Hero/>
                <h2 className="text-2xl font-bold ml-12">Beats</h2>
                <CardContainer />
                
            </div>
        </>
    );
};

export default Home;
