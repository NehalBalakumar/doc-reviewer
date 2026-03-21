import { useState, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import axios from 'axios'

function UploadPage() {
  const [uploading, setUploading] = useState(false)
  const [done, setDone] = useState(false)
  const [error, setError] = useState(null)
  const [docId, setDocId] = useState(null)

  const onDrop = useCallback(async (acceptedFiles) => {
    const file = acceptedFiles[0]
    if (!file) return

    setUploading(true)
    setError(null)

    const formData = new FormData()
    formData.append('pdf', file)

    try {
      const res = await axios.post('http://localhost:3001/api/upload', formData)
      setDocId(res.data.document.id)
      setDone(true)
    } catch (err) {
      setError('Upload failed. Make sure your server is running!')
    } finally {
      setUploading(false)
    }
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'application/pdf': ['.pdf'] },
    maxFiles: 1
  })

  return (
    <div style={{
      background: '#f5f0ff',
      minHeight: '100vh',
      padding: '52px 32px'
    }}>

      <h2 style={{
        fontSize: '32px',
        fontWeight: '900',
        color: '#1a1a2e',
        letterSpacing: '-1px',
        marginBottom: '8px',
        textAlign: 'center'
      }}>
        Upload your document
      </h2>
      <p style={{
        textAlign: 'center',
        color: '#8888aa',
        marginBottom: '36px',
        fontSize: '15px'
      }}>
        Drop any PDF and our AI will review it instantly
      </p>

      {/* DROPZONE */}
      {!done && (
        <div {...getRootProps()} style={{
          background: isDragActive ? '#ede8ff' : 'white',
          border: `2px dashed ${isDragActive ? '#6c47ff' : '#c3b5ff'}`,
          borderRadius: '28px',
          padding: '64px 32px',
          textAlign: 'center',
          cursor: 'pointer',
          maxWidth: '600px',
          margin: '0 auto',
          transition: 'all .2s'
        }}>
          <input {...getInputProps()} />
          <div style={{ fontSize: '52px', marginBottom: '16px' }}>
            {uploading ? '⏳' : isDragActive ? '📂' : '📎'}
          </div>
          <div style={{
            fontSize: '20px',
            fontWeight: '900',
            color: '#1a1a2e',
            marginBottom: '8px'
          }}>
            {uploading
              ? 'Uploading your document...'
              : isDragActive
              ? 'Drop it here!'
              : 'Drop your PDF here'}
          </div>
          <p style={{ color: '#8888aa', fontSize: '14px', marginBottom: '20px' }}>
            {uploading ? 'Please wait...' : 'or click to browse your files'}
          </p>
          <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', flexWrap: 'wrap' }}>
            {['📄 PDF only', '🔒 100% private', '⚡ Instant results'].map((t, i) => (
              <span key={i} style={{
                background: '#f5f0ff',
                borderRadius: '100px',
                padding: '5px 14px',
                fontSize: '11px',
                fontWeight: '600',
                color: '#8888aa',
                border: '1px solid #e4deff'
              }}>{t}</span>
            ))}
          </div>
        </div>
      )}

      {/* SUCCESS */}
      {done && (
        <div style={{
          background: 'white',
          border: '1px solid #e4deff',
          borderRadius: '24px',
          padding: '40px',
          textAlign: 'center',
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          <div style={{ fontSize: '52px', marginBottom: '16px' }}>🎉</div>
          <h3 style={{
            fontSize: '22px',
            fontWeight: '900',
            color: '#1a1a2e',
            marginBottom: '8px'
          }}>
            Upload successful!
          </h3>
          <p style={{ color: '#8888aa', marginBottom: '24px', fontSize: '14px' }}>
            Your document has been saved. AI analysis coming next!
          </p>
          <button
            onClick={() => { setDone(false); setDocId(null) }}
            style={{
              background: '#6c47ff',
              color: 'white',
              border: 'none',
              borderRadius: '12px',
              padding: '12px 28px',
              fontWeight: '700',
              fontSize: '14px',
              cursor: 'pointer'
            }}>
            Upload another doc
          </button>
        </div>
      )}

      {/* ERROR */}
      {error && (
        <p style={{
          color: '#cc3333',
          textAlign: 'center',
          marginTop: '16px',
          fontSize: '14px'
        }}>{error}</p>
      )}

    </div>
  )
}

export default UploadPage