import herobackground from "@/assets/image2.png";
function Hero() {
    return (
        <div className="">
            <img 
            className="object-cover m-auto xl:h-[600px] w-full min-h-[290px] "
            src={herobackground} 
            alt="imagenhero" >
            </img>
            <h2 className="text-5xl my-16 m-2 font-bold">Todos los beats</h2>
        </div>
    );
}

export default Hero;
