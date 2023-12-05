import herobackground from "@/assets/image2.png";
function Hero() {
    return (
        <div className=" h-96  flex justify-center">
            <img 
            className=" w-3/4 object-cover"
            src={herobackground} 
            alt="imagenhero" />
        </div>
    );
}

export default Hero;
