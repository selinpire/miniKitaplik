import { useState, useEffect } from 'react'
import './App.css'
import AramaCubugu from './components/AramaCubugu'
import KategoriFiltre from './components/KategoriFiltre'
import KitapListe from './components/KitapListe'
import FavoriPaneli from './components/FavoriPaneli'

// Sabit kitaplar dizisi
const KITAPLAR = [
  { id: 1, baslik: 'React ile Modern Web Uygulamaları', yazar: 'Mehmet Yılmaz', kategori: 'React' },
  { id: 2, baslik: 'React Hooks ve State Yönetimi', yazar: 'Ayşe Demir', kategori: 'React' },
  { id: 3, baslik: 'React Router ve Navigation', yazar: 'Can Kaya', kategori: 'React' },
  { id: 4, baslik: 'Context API ile Global State', yazar: 'Elif Şahin', kategori: 'React' },
  { id: 5, baslik: 'Modern JavaScript ES6+', yazar: 'Ali Öztürk', kategori: 'JavaScript' },
  { id: 6, baslik: 'JavaScript Design Patterns', yazar: 'Deniz Çelik', kategori: 'JavaScript' },
  { id: 7, baslik: 'Asenkron JavaScript', yazar: 'Sema Korkmaz', kategori: 'JavaScript' },
  { id: 8, baslik: 'Next.js ve Server Side Rendering', yazar: 'Cemre Kaplan', kategori: 'Frontend' },
  { id: 9, baslik: 'Vue.js ile Komponent Tasarımı', yazar: 'Pınar Gündüz', kategori: 'Frontend' },
  { id: 10, baslik: 'CSS Grid ve Flexbox', yazar: 'Derya Arslan', kategori: 'CSS' },
  { id: 11, baslik: 'Responsive Web Tasarım', yazar: 'Fatma Koç', kategori: 'CSS' },
  { id: 12, baslik: 'Tailwind CSS', yazar: 'Hakan Yıldırım', kategori: 'CSS' },
];

function App() {
  // State'leri tanımla - localStorage'dan başlangıç değerlerini al
  const [aramaMetni, setAramaMetni] = useState(() => {
    return localStorage.getItem('aramaMetni') || ''
  })
  const [kategori, setKategori] = useState('Tümü')
  const [favoriler, setFavoriler] = useState(() => {
    const kayitliFavoriler = localStorage.getItem('favoriler')
    return kayitliFavoriler ? JSON.parse(kayitliFavoriler) : []
  })
  const [filtrelenmisKitaplar, setFiltrelenmisKitaplar] = useState(KITAPLAR)

  // Kitapları filtrele
  useEffect(() => {
    let filtreli = KITAPLAR

    // Arama metnine göre filtrele
    if (aramaMetni) {
      filtreli = filtreli.filter(kitap =>
        kitap.baslik.toLowerCase().includes(aramaMetni.toLowerCase()) ||
        kitap.yazar.toLowerCase().includes(aramaMetni.toLowerCase())
      )
    }

    // Kategoriye göre filtrele
    if (kategori !== 'Tümü') {
      filtreli = filtreli.filter(kitap => kitap.kategori === kategori)
    }

    setFiltrelenmisKitaplar(filtreli)
  }, [aramaMetni, kategori])

  // Favori ekle/çıkar
  const toggleFavori = (kitapId) => {
    setFavoriler(prevFavoriler => {
      const yeniFavoriler = prevFavoriler.includes(kitapId)
        ? prevFavoriler.filter(id => id !== kitapId)
        : [...prevFavoriler, kitapId]
      return yeniFavoriler
    })
  }

  // Favoriden kaldır
  const favoridenKaldir = (kitapId) => {
    setFavoriler(prevFavoriler => prevFavoriler.filter(id => id !== kitapId))
  }

  // LocalStorage'a kaydet - her değişiklikte
  useEffect(() => {
    localStorage.setItem('aramaMetni', aramaMetni)
    localStorage.setItem('favoriler', JSON.stringify(favoriler))
  }, [aramaMetni, favoriler])

  // Favori kitapları getir
  const favoriKitaplar = KITAPLAR.filter(kitap => favoriler.includes(kitap.id))

  return (
    <div className="app">
      <header className="app-header">
        <h1>Mini Kitaplık</h1>
      </header>
      
      <div className="app-content">
        <div className="main-content">
          <div className="filtreler">
            <AramaCubugu 
              aramaMetni={aramaMetni}
              setAramaMetni={setAramaMetni}
            />
            <KategoriFiltre 
              kategori={kategori}
              setKategori={setKategori}
            />
          </div>
          
          <KitapListe 
            kitaplar={filtrelenmisKitaplar}
            favoriler={favoriler}
            toggleFavori={toggleFavori}
          />
        </div>
        
        <FavoriPaneli 
          favoriKitaplar={favoriKitaplar}
          favoridenKaldir={favoridenKaldir}
        />
      </div>
    </div>
  )
}

export default App