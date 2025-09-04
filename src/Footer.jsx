import React, { useState } from "react";
import { Star } from "lucide-react";

const Footer = () => {
  const [rating, setRating] = useState(4);
  const [feedback, setFeedback] = useState("");

  return (
    <footer className="bg-red-900 text-white py-12 px-4 flex flex-col items-center">
      {/* Contact Text */}
      <div className="max-w-2xl text-center mb-10">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p className="text-lg font-medium">
          We’d love to hear from you! Whether you have a question, feedback, or
          just want to connect, our team is here to help.
        </p>
      </div>

      {/* Feedback Card */}
      <div className="bg-white text-gray-900 shadow-lg rounded-2xl p-6 w-full max-w-md">
        <h3 className="text-lg font-bold mb-2">Session feedback</h3>
        <p className="text-sm text-gray-600 mb-4">
          Please rate your experience below
        </p>

        {/* Star rating */}
        <div className="flex items-center gap-2 mb-4">
          {[1, 2, 3, 4, 5].map((num) => (
            <Star
              key={num}
              onClick={() => setRating(num)}
              className={`w-6 h-6 cursor-pointer ${
                num <= rating
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-gray-300"
              }`}
            />
          ))}
          <span className="ml-2 text-sm text-gray-700">{rating}/5 stars</span>
        </div>

        {/* Feedback box */}
        <textarea
          placeholder="Additional feedback..."
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          className="w-full border rounded-lg p-3 text-sm mb-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
          rows="3"
        />

        {/* Submit button */}
        <button className="w-full bg-purple-600 text-white py-2 rounded-lg font-semibold hover:bg-purple-700 transition">
          Submit feedback
        </button>

        {/* Rejoin button */}
        <button className="w-full mt-3 border border-gray-300 py-2 rounded-lg font-medium hover:bg-gray-100 transition">
          Rejoin session
        </button>
      </div>
    </footer>
  );
};

export default Footer;
