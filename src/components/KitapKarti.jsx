import React from 'react'

const KitapKarti = ({ kitap, favorideMi, onFavoriToggle }) => {
  return (
    <div className="kitap-karti">
      <div className="kitap-bilgileri">
        <h3 className="kitap-baslik">{kitap.baslik}</h3>
        <p className="kitap-yazar">{kitap.yazar} · {kitap.kategori}</p>
      </div>
      <button
        className={`favori-btn ${favorideMi ? 'favoride' : ''}`}
        onClick={() => onFavoriToggle(kitap.id)}
      >
        {favorideMi ? 'Favoriden Çıkar' : 'Favoriye Ekle'}
      </button>
    </div>
  )
}

export default KitapKarti