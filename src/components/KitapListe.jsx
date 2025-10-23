import React from 'react'
import KitapKarti from './KitapKarti'

const KitapListe = ({ kitaplar, favoriler, toggleFavori }) => {
  if (kitaplar.length === 0) {
    return (
      <div className="bos-liste">
        <p>Kitap bulunamadı.</p>
      </div>
    )
  }

  return (
    <div className="kitap-liste">
      {kitaplar.map(kitap => (
        <KitapKarti
          key={kitap.id}
          kitap={kitap}
          favorideMi={favoriler.includes(kitap.id)}
          onFavoriToggle={toggleFavori}
        />
      ))}
    </div>
  )
}

export default KitapListe