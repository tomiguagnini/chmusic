import { Routes, Route } from "react-router-dom";
import AdminLayout from "./_admin/AdminLayout";
import UploadSongs from "./_admin/pages/UploadSongs";
import Allsongs from "./_admin/pages/Songs";
import RootLayout from "./_root/RootLayout";
import Home from "./_root/pages/Home";
import SongDetail from "./_root/pages/SongDetail";
import Checkout from "./_root/pages/Checkout";
import AllPurchases from "./_admin/pages/Purchases";
import AuthLayout from "./_auth/AuthLayout";
import SignIn from "./_auth/forms/SignIn";
import ScrollToTopOnPageChange from "./components/shared/ScrollToTopOnPageChange";

function App() {
    return (
        <>
            <ScrollToTopOnPageChange/>
        <Routes>
            <Route element={<RootLayout />}>
                <Route index element={<Home />} />
                <Route path="song/:id" element={<SongDetail/>}/>
                <Route path="checkout" element={<Checkout />} />
            </Route>
            <Route path='/admin/' element={<AdminLayout />}>
                <Route index element={<Allsongs />} />
                <Route path="upload-songs" element={<UploadSongs />} />
                <Route path="all-purchases" element={<AllPurchases />} />
            </Route>
            <Route path="/auth" element={<AuthLayout/>}>
                <Route index element={<SignIn/>}/>
            </Route>
        </Routes>
        </>
    );
}

export default App;
