import React, { useState } from 'react'
import axios from 'axios'
import SearchBox from './saerchBox'

const BACKEND = import.meta.env.VITE_API_URL

export default function Downloader() {
  const [url, setUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const [info, setInfo] = useState(null)
  const [error, setError] = useState('')
  const [activeTab, setActiveTab] = useState('mp4')

  async function fetchInfo(e) {
    e && e.preventDefault()
    setError('')
    setInfo(null)
    if (!url) return setError('Please enter a YouTube URL')

    try {
      setLoading(true)
      const res = await axios.get(`${BACKEND}/api/info`, { params: { url } })
      setInfo(res.data)
    } catch (err) {
      setError(err?.response?.data?.error || err.message || 'Failed to fetch')
    } finally {
      setLoading(false)
    }
  }

  function downloadMp4(itag) {
    const downloadUrl = `${BACKEND}/api/download/mp4?url=${encodeURIComponent(
      url
    )}${itag ? `&itag=${itag}` : ''}`
    window.open(downloadUrl, '_blank')
  }

  function downloadMp3() {
    const downloadUrl = `${BACKEND}/api/download/mp3?url=${encodeURIComponent(
      url
    )}&abr=192`
    window.open(downloadUrl, '_blank')
  }

  return (
    <div className="w-full">
      {/* Show search box only if no info yet */}
      {!info && (
        <SearchBox
          url={url}
          setUrl={setUrl}
          onSubmit={fetchInfo}
          loading={loading}
        />
      )}

      {error && <div className="mt-4 text-red-600">{error}</div>}

      {info && (
        <div className="mt-6">
          {/* Video Card */}
          <div className="flex flex-col md:flex-row gap-4 items-start">
            <div className="md:w-1/3">
              <img
                src={info.thumbnails?.slice(-1)[0]?.url}
                alt="thumb"
                className="w-full rounded-xl shadow-md"
              />
            </div>
            <div className="md:w-2/3">
              <h2 className="text-lg font-semibold">{info.title}</h2>
              <p className="text-sm text-slate-500">
                by {info.author} • {Math.floor(info.lengthSeconds / 60)}:
                {String(info.lengthSeconds % 60).padStart(2, '0')}
              </p>
            </div>
          </div>

          {/* Tabs */}
          <div className="mt-6 border-b border-slate-200 flex gap-6">
            <button
              onClick={() => setActiveTab('mp4')}
              className={`pb-2 ${
                activeTab === 'mp4'
                  ? 'border-b-2 border-emerald-600 text-emerald-600 font-semibold'
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              Video (MP4)
            </button>
            <button
              onClick={() => setActiveTab('mp3')}
              className={`pb-2 ${
                activeTab === 'mp3'
                  ? 'border-b-2 border-emerald-600 text-emerald-600 font-semibold'
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              Audio (MP3)
            </button>
          </div>

          {/* Tab Content */}
          <div className="mt-4">
            {activeTab === 'mp4' && (
              <div className="flex flex-wrap gap-3">
                {info.mp4 && info.mp4.length > 0 ? (
                  info.mp4.map((f) => (
                    <button
                      key={f.itag}
                      onClick={() => downloadMp4(f.itag)}
                      className="px-4 py-2 bg-emerald-600 text-white rounded-lg shadow hover:bg-emerald-700 text-sm"
                    >
                      {f.quality || 'unknown'}
                    </button>
                  ))
                ) : (
                  <div className="text-sm text-slate-500">
                    No MP4 formats available
                  </div>
                )}
              </div>
            )}

            {activeTab === 'mp3' && (
              <div className="flex flex-col gap-3">
                <button
                  onClick={downloadMp3}
                  className="px-5 py-2 bg-emerald-600 text-white rounded-lg shadow hover:bg-emerald-700"
                >
                  Download MP3 (192kbps)
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
