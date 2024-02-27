const axios = require('axios');

// URL yang akan diminta
const url = 'https://jsonplaceholder.typicode.com/posts/1';

// Melakukan permintaan HTTP GET menggunakan Axios
axios.get(url)
  .then(response => {
    // Menangani respons yang diterima
    console.log('Status Kode:', response.status);
    console.log('Data:', response.data);
  })
  .catch(error => {
    // Menangani kesalahan jika permintaan gagal
    console.error('Error:', error);
  });
