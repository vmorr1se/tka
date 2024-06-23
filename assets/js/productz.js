const products = [
  // Produk untuk kategori ALL
  { name: "Produk 1", image: "produk1.jpg", category: "all" },
  { name: "Produk 2", image: "produk2.jpg", category: "all" },

  // Produk untuk kategori FILTER CARTRIDGE
  { name: "PP Sedimen", image: "pp_sedimen.jpg", category: "filter-cartridge" },
  { name: "CTO & GAC", image: "cto_gac.jpg", category: "filter-cartridge" },
  { name: "String Wound", image: "string_wound.jpg", category: "filter-cartridge" },
  { name: "Pleated", image: "pleated.jpg", category: "filter-cartridge" },
  { name: "Inline Filter", image: "inline_filter.jpg", category: "filter-cartridge" },
  { name: "Bag Filter", image: "bag_filter.jpg", category: "filter-cartridge" },

  // Produk untuk kategori HOUSING FILTER
  { name: "Housing 10-20\"", image: "housing_10-20.jpg", category: "housing-filter" },
  { name: "Housing BB 10-20*", image: "housing_bb_10-20.jpg", category: "housing-filter" },
  { name: "Housing Multi Cartridge Stainless", image: "housing_multi_cartridge.jpg", category: "housing-filter" },
  { name: "Housing Bag Filter", image: "housing_bag_filter.jpg", category: "housing-filter" },

  // Produk untuk kategori TABUNG FRP & multiport
  { name: "Instaguar Brand Tabung FRP", image: "instaguar_tabung_frp.jpg", category: "tabung-frp" },
  { name: "Tabung Stainless", image: "tabung_stainless.jpg", category: "tabung-frp" },
  { name: "Tabung FRP Heavy Duty Industrial Uses", image: "tabung_frp_industrial.jpg", category: "tabung-frp" },
  { name: "Multi Port and Strainer", image: "multi_port_strainer.jpg", category: "tabung-frp" },

  // Produk untuk kategori ULTRA FILTER
  { name: "UF 2T 500-2000", image: "uf_2t_500-2000.jpg", category: "ultra-filter" },
  { name: "UF PVDF", image: "uf_pvdf.jpg", category: "ultra-filter" },
  { name: "UF Heavy Duty", image: "uf_heavy_duty.jpg", category: "ultra-filter" },

  // Produk untuk kategori POMPA
  { name: "Pompa Air", image: "pompa_air.jpg", category: "pompa" },
  { name: "Pompa Controller", image: "pompa_controller.jpg", category: "pompa" },

  // Produk untuk kategori LAMPU UV & Ballast
  { name: "Lampu UV Viqua Brand", image: "lampu_uv_viqua.jpg", category: "lampu-uv" },
  { name: "Lampu UV 12-55watt", image: "lampu_uv_12-55w.jpg", category: "lampu-uv" },
  { name: "Lampu UV Germicidal", image: "lampu_uv_germicidal.jpg", category: "lampu-uv" },
  { name: "Ballast UV", image: "ballast_uv.jpg", category: "lampu-uv" },

  // Produk untuk kategori MESIN AIR MINUM
  { name: "Mesin TKA Purifier 5step System", image: "mesin_tka_5step.jpg", category: "mesin-air-minum" },
  { name: "Mesin TKA Purifier 6step System", image: "mesin_tka_6step.jpg", category: "mesin-air-minum" },
  { name: "Water Dispenser", image: "water_dispenser.jpg", category: "mesin-air-minum" },

  // Produk untuk kategori MESIN RO & membrane
  { name: "Undersink RO", image: "undersink_ro.jpg", category: "mesin-ro" },
  { name: "Medium RO System", image: "medium_ro_system.jpg", category: "mesin-ro" },
  { name: "Heavy Duty RO System", image: "heavy_duty_ro_system.jpg", category: "mesin-ro" },
  { name: "Membran Element RO", image: "membran_element_ro.jpg", category: "mesin-ro" },

  // Produk untuk kategori LAINNYA
  { name: "Sparepart Filter Air", image: "sparepart_filter_air.jpg", category: "lainnya" },
  { name: "Selenoid", image: "selenoid.jpg", category: "lainnya" },
  { name: "Fitting dan Acc", image: "fitting_acc.jpg", category: "lainnya" },
  { name: "Testerkit", image: "testerkit.jpg", category: "lainnya" },
  { name: "Perlengkapan Depot", image: "perlengkapan_depot.jpg", category: "lainnya" },
];

const productprocontainer = document.querySelector(".product-procontainer");
const categoryButtons = document.querySelectorAll(".category");

function displayProducts(category) {
  productprocontainer.innerHTML = "";
  products.forEach(product => {
    if (category === "all" || product.category === category) {
      const productElement = document.createElement("div");
      productElement.classList.add("product");
      productElement.innerHTML = `
        <img src="images/${product.image}" alt="${product.name}">
        <p>${product.name}</p>
      `;
      productprocontainer.appendChild(productElement);
    }
  });
}

categoryButtons.forEach(button => {
  button.addEventListener("click", () => {
    categoryButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
    const filter = button.getAttribute("data-filter");
    displayProducts(filter);
  });
});

// Tampilkan semua produk saat halaman dimuat
displayProducts("all");
