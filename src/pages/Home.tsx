type Props = {};

export const Home = ({}: Props) => {
  return (
    <section className="flex flex-col md:flex-row items-center px-8 py-12 h-screen">
      <div className="right-triangle"></div>
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
          Are you looking for{" "}
          <span className="text-gray-900 font-extrabold">
            woodden furniture
          </span>{" "}
          for your place?
        </h1>
        <p className="text-xl text-gray-600 mb-6">This is the Right Place</p>
        <button className="bg-yellow-500 text-white font-semibold px-6 py-2 rounded hover:bg-yellow-600">
          Explore Categories
        </button>
      </div>
      <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
        <div className="relative">
          <img src="./Home.png" alt="Table" className="w-72 h-auto" />
        </div>
      </div>
    </section>
  );
};
