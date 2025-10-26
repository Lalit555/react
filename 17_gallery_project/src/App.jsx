import axios from "axios";
import React, { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState([]);
  const [index, setIndex] = useState(1);

  const getData = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=35`
    );
    setData(response.data);
  };

  useEffect(() => {
    getData();
  }, [index]);

  return (
    <>
      {/* ✅ Fixed Liquid Glass Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-3 rounded-b-2xl border border-white/10 bg-white/5 backdrop-blur-md backdrop-saturate-150 shadow-lg overflow-visible isolation-auto">
        {/* Liquid blobs background */}
        <div className="absolute inset-0 -z-10 overflow-visible">
          <div className="absolute -left-10 -top-8 w-60 h-40 bg-gradient-to-r from-pink-400/60 to-yellow-200/50 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute right-0 top-0 w-52 h-32 bg-gradient-to-r from-sky-400/60 to-blue-500/50 rounded-full blur-3xl animate-[float_8s_ease-in-out_infinite]"></div>
          <div className="absolute left-1/3 bottom-0 w-72 h-40 bg-gradient-to-r from-indigo-400/60 to-cyan-400/60 rounded-full blur-3xl animate-[float_9s_ease-in-out_infinite]"></div>
        </div>

        {/* Brand / Logo */}
        <div className="flex items-center gap-4">
          <img src="/bgg.png" className="h-10 sm:h-12" alt="Logo" />
          <span className="font-bold text-white text-2xl sm:text-4xl tracking-wider font-sans">
            Galleria
          </span>
        </div>

        {/* Nav Links placeholder */}
        <ul className="hidden md:flex items-center gap-6 text-white/90 font-medium"></ul>
      </nav>

      {/* ✅ Main Content */}
      <main className="min-h-screen bg-gray-950 px-4 sm:px-6 md:px-10 pt-28 pb-28">
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          {data.length === 0 ? (
            <div className="flex justify-center items-center w-full h-[60vh] flex-col">
              <div className="w-12 h-12 border-4 border-gray-300 border-t-amber-400 rounded-full animate-spin"></div>
              <p className="text-gray-400 mt-3 text-sm">Loading images...</p>
            </div>
          ) : (
            data.map((elem, idx) => (
              <div
                key={idx}
                className="relative group transition-transform hover:scale-105"
              >
                <a href={elem.url} target="_blank" rel="noreferrer">
                  <img
                    className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 object-cover rounded-2xl bg-gray-700 transition duration-300 group-hover:brightness-75"
                    src={elem.download_url}
                    alt="Gallery Item"
                  />
                </a>
              </div>
            ))
          )}
        </div>

        {/* ✅ Pagination Buttons */}
        <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 flex items-center gap-6 px-6 py-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md backdrop-saturate-150 shadow-lg">
          <button
            onClick={() => {
              if (index > 1) {
                setIndex(index - 1);
                setData([]);
              }
            }}
            disabled={index === 1}
            className={`${index === 1
                ? "opacity-40 cursor-not-allowed"
                : "opacity-100 hover:bg-amber-500"
              } bg-amber-400 px-5 py-2 font-bold text-black rounded-xl transition`}
          >
            Prev
          </button>

          <h1 className="text-white font-semibold text-sm sm:text-base items-center justify-center">
            Page {index}
          </h1>

          <button
            onClick={() => {
              setIndex(index + 1);
              setData([]);
            }}
            className="bg-amber-400 px-5 py-2 font-bold text-black rounded-xl hover:bg-amber-500 transition"
          >
            Next
          </button>
        </div>
      </main>
    </>
  );
};

export default App;
