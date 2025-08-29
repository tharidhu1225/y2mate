import React from "react";
import { FaDownload, FaYoutube } from "react-icons/fa";

export default function SearchBox({ url, setUrl, onSubmit, loading }) {
  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col sm:flex-row gap-3 sm:gap-2 items-center"
    >
      {/* Input Box */}
      <div className="relative flex-1 w-full">
        <FaYoutube className="absolute left-3 top-1/2 -translate-y-1/2 text-red-500 text-lg" />
        <input
          type="text"
          className="w-full pl-10 pr-4 py-3 bg-white/80 border border-slate-200 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-pink-400 transition placeholder:text-slate-400"
          placeholder="Paste YouTube URL here..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
      </div>

      {/* Button */}
      <button
  type="submit"
  className={`flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-white shadow-md transition-all duration-200 
  ${
    loading
      ? "bg-slate-400 cursor-not-allowed"
      : "bg-gradient-to-r from-emerald-500 to-green-600 hover:scale-105 hover:from-emerald-600 hover:to-green-700"
  }`}
  disabled={loading}
>
  {loading ? (
    <div className="flex items-center gap-2">
      <svg
        className="animate-spin h-5 w-5 text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
        ></path>
      </svg>
      <span>Loading...</span>
    </div>
  ) : (
    <>
      <FaDownload className="text-lg" />
      Download
    </>
  )}
</button>

    </form>
  );
}