import React from 'react'

const FavoriPaneli = ({ favoriKitaplar, favoridenKaldir }) => {
  return (
    <div className="favori-paneli">
      <h2>Favoriler ({favoriKitaplar.length})</h2>
      
      {favoriKitaplar.length === 0 ? (
        <p className="favori-bos">Henüz favori kitap yok.</p>
      ) : (
        <div className="favori-liste">
          {favoriKitaplar.map(kitap => (
            <div key={kitap.id} className="favori-oge">
              <div className="favori-bilgi">
                <span className="favori-baslik">• {kitap.baslik}</span>
              </div>
              <button
                className="favori-kaldir-btn"
                onClick={() => favoridenKaldir(kitap.id)}
              >
                Kaldır
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default FavoriPaneli