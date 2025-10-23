import React from 'react'

const KategoriFiltre = ({ kategori, setKategori }) => {
  const kategoriler = [
    'Tümü', 
    'React', 
    'JavaScript', 
    'Frontend', 
    'CSS', 
    'Backend', 
    
  ]

  return (
    <div className="kategori-filtre">
      <select
        value={kategori}
        onChange={(e) => setKategori(e.target.value)}
        className="kategori-select"
      >
        {kategoriler.map(kat => (
          <option key={kat} value={kat}>
            {kat}
          </option>
        ))}
      </select>
    </div>
  )
}

export default KategoriFiltre