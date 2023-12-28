import herobackground from "@/assets/image2.png";
function Hero() {
    return (
        <div className="bg-dark-2">
            <img 
            className="object-cover m-auto min-h-[290px] lg:h-[450px]"
            src={herobackground} 
            alt="imagenhero" >
            </img>
        </div>
    );
}

export default Hero;
