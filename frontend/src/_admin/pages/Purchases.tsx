import Payments from "@/components/shared/Payments";

const AllPurchases = () => {
    return (
        <>
            <div className="common-container h-screen">
            <h1 className="text-4xl my-5 font-bold">Ordenes de compra</h1>
                <Payments />
            </div>
        </>
    );
};

export default AllPurchases;
