import Login from "../../components/Login/Login";
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row bg-slate-50">
      <div className="hidden md:block md:w-2/3">
        <img
          src="/assets/images/hero.png"
          alt="Your Image"
          className="object-cover w-full h-64 md:h-full"
        />
      </div>
      <div className="md:hidden">
        <Login />
      </div>
      <div className="hidden md:block md:w-1/3">
        <Login />
      </div>
    </div>
  );
}
