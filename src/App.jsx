import React from "react";
import Downloader from "./compornents/downloader";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-red-400 flex items-center justify-center p-6">
      <div className="w-full max-w-3xl bg-white/20 backdrop-blur-xl shadow-2xl rounded-3xl p-8 border border-white/30 animate-fade-in">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-white drop-shadow-lg">
            🎵 YouTube Downloader
          </h1>
          <p className="text-slate-200 mt-3 text-lg">
            Paste a <span className="font-semibold text-yellow-300">YouTube URL</span>  
            and download in <span className="font-semibold text-green-300">MP4</span> /  
            <span className="font-semibold text-pink-300"> MP3</span>.
          </p>
        </div>

        {/* Downloader Component */}
        <div className="bg-white/80 rounded-2xl p-6 shadow-lg border border-slate-200">
          <Downloader />
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-sm text-slate-200">
          Developed By TN International PLC
        </div>
      </div>
    </div>
  );
}
