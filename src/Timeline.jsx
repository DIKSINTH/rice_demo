import React from "react";

const Timeline = () => {
  const events = [
    { year: "2019", text: "Sunt nostrud amet sint do" },
    { year: "2020", text: "Exercitation veniam consequat" },
    { year: "2021", text: "Velit officia consequat duis" },
    { year: "2022", text: "Ullamco est sit aliqua dolor" },
    { year: "2023", text: "Amet minim mollit non deserunt" },
  ];

  return (
    <section className="flex justify-center items-center bg-gradient-to-r from-red-900 to-orange-900 py-12 px-4">
      <div className="bg-white shadow-xl rounded-3xl p-8 w-full max-w-5xl relative">
        {/* Title */}
        <h2 className="text-center text-2xl font-bold mb-10 tracking-wider">
          TIMELINE
        </h2>

        {/* Desktop timeline */}
        <div className="hidden md:flex justify-between items-center relative">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-300 -z-10"></div>

          {events.map((event, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center w-1/5 text-center"
            >
              {idx % 2 !== 0 && (
                <p className="mb-8 text-sm text-gray-600 max-w-[120px]">
                  {event.text}
                </p>
              )}
              <div className="w-10 h-10 flex items-center justify-center border-4 border-blue-400 rounded-full bg-white text-blue-700 font-bold">
                {event.year}
              </div>
              {idx % 2 === 0 && (
                <p className="mt-8 text-sm text-gray-600 max-w-[120px]">
                  {event.text}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Mobile timeline */}
        <div className="md:hidden relative">
          <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gray-300"></div>
          <div className="flex flex-col gap-10">
            {events.map((event, idx) => (
              <div key={idx} className="flex items-start gap-6">
                <div className="w-8 h-8 flex items-center justify-center border-4 border-blue-400 rounded-full bg-white text-blue-700 font-bold">
                  {event.year}
                </div>
                <div>
                  <h3 className="font-bold text-blue-700">{event.year}</h3>
                  <p className="text-gray-600 text-sm">{event.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
