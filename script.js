document.addEventListener('DOMContentLoaded', () => {

const artistsData = [
    { name: 'Henrique & Juliano', image:'./img/artista-henrique-juliano.jpg'},
    {name: 'Jorge & Mateus', image:'./img/artista-jorge-mateus.jpg'},
    {name: 'Zé Neto & Cristiano', image:'./img/artista-ze-neto.jpg'},
    {name: 'Gusttavo Lima', image: './img/artista-gustavo-limma.jpg'},
    {name: 'Luan Santana', image: './img/artista-luan-santana.jpg'},
    {name: 'Matheus & Kauan', image: './img/artista-mateus-kauan.jpg'},
    {name: 'Justin Bieber', image: './img/justin bieber.webp'},
    {name: 'Bruno Mars', image: './img/bruno mars.jpg'},
    {name: 'Racionais MC`s', image: './img/racionais.webp'},
    {name: 'Linkin Park', image: './img/linkin-park-james-minchin-III-e1725639507358-588x588.jpg'},
    
];

const albumsData = [
    {name: 'White Noise (Sleep & Relaxation Sounds)', artist: 'Sleepy John', image:'./img/album-white-noise.jpg'},
    {name:'O Céu Explica Tudo (Ao Vivo)', artist: 'Henrique & Juliano', image: './img/album-ceu-explica.jpg'},
    {name: 'Nada como um dia após o outro', artist: 'Racionais', image: './img/album-racionais.jpg'},
    {name: 'HIT ME HARD AND SOFT', artist: 'Billie Eilish', image: './img/album-hit-me.jpg'},
    {name: 'CAJU', artist: 'Liniker', image: './img/album-caju.jpg'},
    {name: 'Escândalo Íntimo', artist: 'Luísa Sonza', image: './img/album-escandalo.jpg'},
    {name: 'Purpose', artist: 'Justin Bieber', image: './img/justin album.jpg'},
    {name: '24k Magic', artist: 'Bruno Mars', image: './img/album bruno mars.jpeg'},
    {name: 'From Zero', artist: 'Linkin Park', image: './img/album link park.avif'},
    {name: 'Thriller', artist: 'Michael Jackson', image: './img/thriller.jpg'},
];

const artistGrid = document.querySelector('.artists-grid');
const albumsGrid = document.querySelector('.albums-grid');

artistsData.forEach(artist => {

    const artistCard = document.createElement('div')
    artistCard.classList.add('artist-card')

    artistCard.innerHTML = `
     
    <img src="${artist.image}" alt="imagem do ${artist.name}"> 
    <div>
          <h3>${artist.name}</h3>
          <p>artista</p>
    </div>
    
    `
   artistGrid.appendChild(artistCard)  


})

albumsData.forEach(album => {

    const albumCard = document.createElement('div')
    albumCard.classList.add('album-card')

    albumCard.innerHTML = `
     
    <img src="${album.image}" alt="imagem do ${album.name}"> 
    <div>
        <h3>${album.name}</h3>
        <p>${album.artist}</p>
    </div>
   
    
    `
   albumsGrid.appendChild(albumCard)  


})

})