document.addEventListener('DOMContentLoaded', function() {
  // Daftar kategori
  const categories = [
    "ALL",
    "FILTER CARTRIDGE",
    "HOUSING FILTER",
    "TABUNG FRP & multiport",
    "ULTRA FILTER",
    "POMPA",
    "lampu uv & Ballast",
    "Mesin air minum",
    "Mesin RO & membrane",
    "LAINNYA"
  ];

  // Pilih elemen select kategori
  const select = document.getElementById('kategori-select');

  // Tambahkan opsi kategori
  categories.forEach(category => {
    const option = document.createElement('option');
    option.value = category;
    option.textContent = category;
    select.appendChild(option);
  });

  // Daftar produk berdasarkan kategori
  const products = {
    // Data produk dari pertanyaan sebelumnya
  };

  // Fungsi untuk menambahkan produk ke dalam kategori
  function addProductsToCategory(category, products) {
    const section = document.getElementById('produk');
    section.innerHTML = ''; // Kosongkan isi sebelum menambahkan produk baru

    products.forEach(product => {
      const produkItem = document.createElement('div');
      produkItem.classList.add('produk-item');

      const img = document.createElement('img');
      img.src = 'placeholder.jpg'; // Ganti dengan URL foto produk yang sesuai
      img.alt = product;

      const namaProduk = document.createElement('h3');
      namaProduk.textContent = product;

      produkItem.appendChild(img);
      produkItem.appendChild(namaProduk);
      section.appendChild(produkItem);
    });
  }

  // Ketika pengguna memilih kategori
  select.addEventListener('change', function() {
    const selectedCategory = this.value;
    if (selectedCategory === "ALL") {
      // Tampilkan semua produk
      const allProducts = Object.values(products).flat();
      addProductsToCategory(selectedCategory, allProducts);
    } else {
      // Tampilkan produk sesuai dengan kategori yang dipilih
      addProductsToCategory(selectedCategory, products[selectedCategory]);
    }
  });

  // Inisialisasi tampilan dengan menampilkan semua produk saat halaman dimuat
  const allProducts = Object.values(products).flat();
  addProductsToCategory("ALL", allProducts);
});
