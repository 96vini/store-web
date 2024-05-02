import Navbar from "../Navbar";

export default function NotFound() {
    return (
        <div className="w-full h-screen">
            <Navbar />
            <div className="flex justify-center items-center">
                <div className="h-[20vh] w-[20vh]">
                    <img src="/images/not-found-icon.png" alt="" />
                </div>
                <div>
                    <h1 className="text-2xl text-cyan-600">Page not found</h1>
                </div>
            </div>
        </div>
    );
}