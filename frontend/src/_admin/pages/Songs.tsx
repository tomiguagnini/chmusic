import SongsTable from "@/components/shared/SongsTable";

const Songs = () => {
    return (
        <div className="common-container h-screen   ">
            <h1 className="text-4xl my-5 font-bold">Beats</h1>
            <SongsTable />
        </div>
    );
};

export default Songs;
