import React from "react";
import Downloader from "./compornents/downloader";
import Footer from "./compornents/footer";
import AdScript from "./compornents/adScript";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-red-400 flex flex-col items-center justify-center p-6">
      
      {/* Top Ad */}
      <AdScript
        containerId="container-86ed411f4d655949d33ca035775d3a0a"
        scriptUrl="//www.highperformanceformat.com/86ed411f4d655949d33ca035775d3a0a/invoke.js"
        options={{
          key: '86ed411f4d655949d33ca035775d3a0a',
          format: 'iframe',
          height: 60,
          width: 468,
          params: {}
        }}
      />

      {/* Main App UI */}
      <div className="w-full max-w-3xl bg-white/20 backdrop-blur-xl shadow-2xl rounded-3xl p-8 border border-white/30 animate-fade-in mt-6">
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

        {/* Inline Footer Note */}
        <div className="mt-8 text-center text-sm text-slate-200">
          Developed By TN International PLC
        </div>
      </div>

      {/* Bottom Ad */}
      <div className="mt-6">
        <AdScript
          containerId="container-04a420438f02999bb8a401c2dc566a99"
          scriptUrl="//pl27535893.revenuecpmgate.com/04a420438f02999bb8a401c2dc566a99/invoke.js"
        />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
