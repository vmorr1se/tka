document.addEventListener("DOMContentLoaded", () => {
    const categories = document.getElementById("category-list");
    const categoryNameDisplay = document.getElementById("category-name");
    const sectionList = document.querySelector(".sectionproduct-list");
    const productList = document.querySelector(".product-list");
    const searchInput = document.getElementById("search-input");

    let activeCategory = 1; // Kategori aktif awal
    let activeSection = 1; // Bagian aktif awal

    function displayCategoryContent(categoryNumber) {
      document.querySelectorAll(".category").forEach((category) => {
        category.classList.remove("active");
      });

      const activeCategoryElement = document.querySelector(
        `.category[data-category="${categoryNumber}"]`
      );
      activeCategoryElement.classList.add("active");

      categoryNameDisplay.innerText = getCategoryName(categoryNumber);

      sectionList.innerHTML = "";
      productList.innerHTML = "";

      if (categoryNumber === 1) {
        activeSection = 1;
        displayProductContent(activeCategory, activeSection);
        return;
      }

      const sections = getSectionsByCategory(categoryNumber);
      const products = getProductsByCategory(categoryNumber);

      sections.forEach((section, index) => {
        if (section) {
          const sectionDiv = document.createElement("div");
          sectionDiv.classList.add("sectionproduct");
          sectionDiv.dataset.category = categoryNumber;
          sectionDiv.dataset.section = index + 1;
          sectionDiv.innerHTML = `<h3>${section}</h3>`;
          sectionDiv.addEventListener("click", (event) => {
            event.stopPropagation();
            setActiveSection(index + 1);
          });
          sectionList.appendChild(sectionDiv);
        }
      });

      productList.scrollTop = 0;

      setActiveSection(1);
    }

    function getCategoryName(categoryNumber) {
      switch (categoryNumber) {
        case 1:
          return "All";
        case 2:
          return "Filter Cartridge";
        case 3:
          return "Housing Filter";
        case 4:
          return "Tabung FRP & Multiport";
        case 5:
          return "Ultra Filter";
        case 6:
          return "Pompa";
        case 7:
          return "Lampu UV & Ballast";
        case 8:
          return "Mesin Air Minum";
        case 9:
          return "Mesin RO & Membrane";
        case 10:
          return "Lainnya";
        default:
          return `Kategori ${categoryNumber}`;
      }
    }

    function getSectionsByCategory(categoryNumber) {
      switch (categoryNumber) {
        case 2:
          return [
            "PP Sedimen",
            "CTO & GAC",
            "String Wound",
            "Pleated Filter",
            "Inline Filter",
            "Bag Filter",
          ];
        case 3:
          return [
            "Housing 10-20 Inchi",
            "Housing BB 10-20 Inchi",
            "Housing Multi Cartridge Stainless",
            "Housing Bag Filter",
          ];
        case 4:
          return [
            "Instaguard Brand Tabung FRP",
            "Tabung Stainless",
            "Tabung FRP Heavy Duty Industrial Uses",
            "Multiport & Strainer",
          ];
        case 5:
          return ["UF 2T 500-2000", "UF PVDF", "UF Heavy Duty"];
        case 6:
          return ["Booster Pump RO", "Pompa Air SS", "Pompa Vertical SS"];
        case 7:
          return [
            "Lampu UV Viqua Brand",
            "Lampu UV 12-55 Watt",
            "Lampu UV Germicidal",
            "Ballast UV",
          ];
        case 8:
          return [
            "Mesin TKA Purifier 5 Step System",
            "Mesin TKA Purifier 6 Step System",
            "Water Dispenser",
          ];
        case 9:
          return [
            "Undersink RO",
            "Medium RO System",
            "Heavy Duty RO System",
            "Membran Element RO",
          ];
        case 10:
          return [
            "Sparepart Filter Air",
            "Selenoid",
            "Fitting dan Acc",
            "Testerkit",
            "Perlengkapan Depot",
          ];
        default:
          return [];
      }
    }

    function getProductsByCategory(categoryNumber) {
      switch (categoryNumber) {
        case 1:
          return [
            {
              products: [
                "FILTER CARTRIDGE 10 INCHI",
                "FILTER CARTRIDGE DEWATER 20 INCHI",
                "FILTER CARTRIDGE KOLON 10 INCHI",
                "FILTER CARTRIDGE NANO 10 INCHI",
                "FILTER CARTRIDGE PP SEDIMENT JUMBO",
                "FILTER CARTRIDGE PP SEDIMET",
                "FILTER PP CARTRIDGE (1)",
                "FILTER PP CARTRIDGE (2)",
                "FILTER SEDIMENT NESCA 10 INCHI",
                "PP SEDIMENT (1)",
                "PP SEDIMENT (2)",
                "PP SEDIMENT (3)",
                "CTO (1)",
                "CTO (2)",
                "CTO (3)",
                "GAC (1)",
                "GAC (2)",

                "CTO MATRIKX",
                "CTO OLSMOPURE",
                "CTO WATER WIZARD",
                "GAC OLSMOPURE",
                "STRING WOUND 1",
                "STRING WOUND 2",
                "STRING WOUND 3",
                "STRING WOUND 4",
                "STRING WOUND 5",
                "STRING WOUND 6",
                "STRING WOUND 7",
                "STRING WOUND 8",
                
                "PLEATED FILTER 1",
                "PLEATED FILTER 2",
                "PLEATED FILTER 3",
                "PLEATED FILTER 4",
                "PLEATED FILTER 5",
                "PLEATED FILTER 6",
                "PLEATED FILTER BOG FLOW",
                "INNER FILTER 1",
                "INNER FILTER 2",
                "INNER FILTER 3",
                "INNER FILTER 4",
                "INNER FILTER 5",
                "FILTER BAG 1",
                "FILTER BAG 2",
                "FILTER BAG 3",
                "FILTER BAG 4",
                "FILTER BAG 5",
                "FILTER BAG 6",

                // CASE 3
                "HOUSING",
                "HOUSING 10 (NESCA)",
                "HOUSING 10 INCHI - DO (1)",
                "HOUSING 10 INCHI - DO (2)",
                "HOUSING 10 INCHI (NANOTECH)",
                "HOUSING 10 INCHI (RO)",
                "HOUSING 20 INCHI (DO)",
                "HOUSING DOUBLE FILTER",
                "HOUSING FILTER",
                "HOUSING BB 10 & 20 INCHI",
                "HOUSING DOUBLE SS",
                "HOUSING MULTI CARTRIDGE",
                "HOUSING SS (1)",
                "HOUSING SS (2)",
                "HOUSING SS (3)",
                "HOUSING SS MULTI CARTRIDGE (1)",
                "HOUSING SS MULTI CARTRIDGE (2)",
                "HOUSING TRIPPLE SS (1)",
                "HOUSING TRIPPLE SS (2)",
                "HOUSING BAG FILTER",
                
                // CASE 4
                "TABUNG FRP (1)",
                "TABUNG FRP (2)",
                "TABUNG FRP (3)",
                "TABUNG FRP (4)",
                "TABUNG FRP (5)",
                "TABUNG FRP (6)",
                "TABUNG FRP (7)",
                "TABUNG FRP (8)",
                "TABUNG FRP (9)",
                "TABUNG FRP (10)",
                "TABUNG FRP (11)",
                "FRP STAINLESS STEEL (1)", 
                "FRP STAINLESS STEEL (2)",
                
                "FRP HEAVY DUTY (1)",
                "FRP HEAVY DUTY (2)",
                "FRP HEAVY DUTY (3)",
                
                "MULTIPORT (1)",
                "MULTIPORT (2)",
                "MULTIPORT (3)",
                "MULTIPORT (4)",
                "MULTIPORT (5)",
                "MULTIPORT (6)",
                "MULTIPORT (7)",
                "STRAINER (1)",
                "STRAINER (2)",
                "STRAINER (3)",
                "STRAINER (4)",
                
                // CASE 5
                "UF FILTER",
                "UF FILTER 2T (1)",
                "UF FILTER 2T (2)",
                "UF FILTER 2T (3)",
                "UF FILTER 2T (4)",
                "UF FILTER 2T (5)",
                "UF FILTER PVDF", "UF PVDF (1)", "UF PVDF (2)",
                "UF HEAVY DUTY",
                // CASE 6
                "POMPA BOOSTER KO JINE",
                "POMPA BOOSTER",
                "Pompa EKD KYODO",
                "POMPA RO",
                "POMPA WASER",
                
                "POMPA MAXON",
                "POMPA NOCCHI",
                "Pompa PENTAIR",
                "POMPA SANJU",
                "POMPA WASER SS",
                "Pompa Vertical",

                // CASE 7
                
                "BALLAST LAMPU UV VIQUA",
                "LAMPU UV VIQUA (1)",
                "LAMPU UV VIQUA (2)",
                "LAMPU UV VIQUA (3)",
                "VIQUA D4",
                
                "LAMPU UV 12 WATT",
                "LAMPU UV 12-55 WATT",
                "LAMPU UV 16 WATT SET",
                "LAMPU UV 40 WATT",
                "LAMPU UV",
                "UV LIGHT SS316 48GPM",
                "UV-6W-12-V",
                "BALLAST UV VIQUA",

                // CASE 8
                "MESIN AIR MINUM 5 STEP",
                "SYSTEM AIR MINUM",
                "MESIN TKA 6 STEP (1)",
                "MESIN TKA 6 STEP (2)",
                "MESIN TKA 6 STEP (3)",
                "MESIN TKA 6 STEP (4)",
                "MESIN AIR MINUM 6 STEP (1)",
                "MESIN AIR MINUM 6 STEP (2)",

                "WATER DISPENSER (1)",
                "WATER DISPENSER (2)",
                "WATER DISPENSER (3)",
                "WATER DISPENSER (4)",
                "WATER DISPENSER (5)",
                "WATER DISPENSER (6)",
                "WATER DISPENSER (7)",
                "WATER DISPENSER (8)",
                "WATER DISPENSER (9)",
                "WATER DISPENSER (10)",
                "WATER DISPENSER (11)",
                "WATER DISPENSER (12)",
                "WATER DISPENSER (13)",
                "WATER DISPENSER (14)",
                "WATER DISPENSER (15)",
                "WATER DISPENSER (16)",
                "WATER DISPENSER (17)",
                "WATER DISPENSER (18)",
                "WATER DISPENSER (19)",
                "WATER DISPENSER (20)",

                // CASE 9
                "MESIN RO 100 GPD (1)" ,
              "MESIN RO 100 GPD (2)" ,
              "MESIN RO 500 GPD" ,
              "MESIN RO DISPENSER (1)" ,
              "MESIN RO DISPENSER (2)" ,
              "MESIN RO DISPENSER STANDING" ,
              "MESIN RO ROO GPD",
              "UNDERSINK RO",
              "MESIN RO 800 GPD",
              "SYSTEM AIR MINUM RO",
              
              "MESIN RO 4000 GPD",
              "MESIN RO",
              "HOUSING MEMBRANE (1)",
              "HOUSING MEMBRANE (2)",
              "HOUSING MEMBRANE 500 GPD",
              "HOUSING SS RO 4040",
              "MEMBRANE 100 GPD",
              "MEMBRANE CSM 2000 GPD",
              "MEMBRANE RO 2000 GPD VONTRON",
              "RO-MEMBRANE-FILMTEC (1)",
              "RO-MEMBRANE-FILMTEC (2)",

              // CASE 10
              "BIO ALKALINE",
              "BRINE TANK",
              "PRE FILTER",
              "PRESSURE TANK (1)",
              "PRESSURE TANK (2)",
              "PRESSURE TANK (3)",
              "RADAR",
              "SELENOID (1)",
              "SELENOID (2)",
              "SELENOID (3)",
              "SELENOID (4)",
              "FLOW METER (1)",
              "FLOW METER (2)",
              "WATER COINTENER",
              "TESTER KIT (1)",
              "TESTER KIT (2)",
              "KAPORIT",
              "OTOMATIS POMPA",
              "OTOMATIS YORK",
              "PH METER",
              "PH TESTER",
              "PRESSURE TANK",
              "TES TDS",
              "GALON (1)",
              "GALON (2)",
              "GALON (3)",
              "GALON (4)",
              "GALON (5)",
              "CORONG BILAS GALON (1)",
              "CORONG BILAS GALON (2)",
              "GALON 12 LT GUCCI",
              "MESIN SIKAT GALON",
              ],
            },
// BATASS

            // BATAS
          ];
        case 2:
          return [
            {
              section: "PP Sedimen",
              products: [
                "FILTER CARTRIDGE 10 INCHI",
                "FILTER CARTRIDGE DEWATER 20 INCHI",
                "FILTER CARTRIDGE KOLON 10 INCHI",
                "FILTER CARTRIDGE NANO 10 INCHI",
                "FILTER CARTRIDGE PP SEDIMENT JUMBO",
                "FILTER CARTRIDGE PP SEDIMET",
                "FILTER PP CARTRIDGE (1)",
                "FILTER PP CARTRIDGE (2)",
                "FILTER SEDIMENT NESCA 10 INCHI",
                "PP SEDIMENT (1)",
                "PP SEDIMENT (2)",
                "PP SEDIMENT (3)",
              ],
            },
            {
              section: "CTO & GAC",
              products: [
                "CTO (1)",
                "CTO (2)",
                "CTO (3)",
                "GAC (1)",
                "GAC (2)",

                "CTO MATRIKX",
                "CTO OLSMOPURE",
                "CTO WATER WIZARD",
                "GAC OLSMOPURE",
              ],
            },
            {
              section: "String Wound",
              products: [
                "STRING WOUND 1",
                "STRING WOUND 2",
                "STRING WOUND 3",
                "STRING WOUND 4",
                "STRING WOUND 5",
                "STRING WOUND 6",
                "STRING WOUND 7",
                "STRING WOUND 8",
              ],
            },
            {
              section: "Pleated Filter",
              products: [
                "PLEATED FILTER 1",
                "PLEATED FILTER 2",
                "PLEATED FILTER 3",
                "PLEATED FILTER 4",
                "PLEATED FILTER 5",
                "PLEATED FILTER 6",
                "PLEATED FILTER BOG FLOW",
              ],
            },
            {
              section: "Inline Filter",
              products: [
                "INNER FILTER 1",
                "INNER FILTER 2",
                "INNER FILTER 3",
                "INNER FILTER 4",
                "INNER FILTER 5",
              ],
            },
            {
              section: "Bag Filter",
              products: [
                "FILTER BAG 1",
                "FILTER BAG 2",
                "FILTER BAG 3",
                "FILTER BAG 4",
                "FILTER BAG 5",
                "FILTER BAG 6",
              ],
            },
          ];
        case 3:
          return [
            {
              section: "Housing 10-20 Inchi",
              products: [
                "HOUSING",
                "HOUSING 10 (NESCA)",
                "HOUSING 10 INCHI - DO (1)",
                "HOUSING 10 INCHI - DO (2)",
                "HOUSING 10 INCHI (NANOTECH)",
                "HOUSING 10 INCHI (RO)",
                "HOUSING 20 INCHI (DO)",
                "HOUSING DOUBLE FILTER",
                "HOUSING FILTER",
              ],
            },
            {
              section: "Housing BB 10-20 Inchi",
              products: ["HOUSING BB 10 & 20 INCHI"],

            },
            {
              section: "Housing Multi Cartridge Stainless",
              products: [
                "HOUSING DOUBLE SS",
                "HOUSING MULTI CARTRIDGE",
                "HOUSING SS (1)",
                "HOUSING SS (2)",
                "HOUSING SS (3)",
                "HOUSING SS MULTI CARTRIDGE (1)",
                "HOUSING SS MULTI CARTRIDGE (2)",
                "HOUSING TRIPPLE SS (1)",
                "HOUSING TRIPPLE SS (2)",
              ],
            },
            {
              section: "Housing Bag Filter",
              products: ["HOUSING BAG FILTER"],

            },
          ];
        case 4:
          return [
            {
              section: "Instaguard Brand Tabung FRP",
              products: [
                "TABUNG FRP (1)",
                "TABUNG FRP (2)",
                "TABUNG FRP (3)",
                "TABUNG FRP (4)",
                "TABUNG FRP (5)",
                "TABUNG FRP (6)",
                "TABUNG FRP (7)",
                "TABUNG FRP (8)",
                "TABUNG FRP (9)",
                "TABUNG FRP (10)",
                "TABUNG FRP (11)",
                
              ],
            },
            {
              section: "Tabung Stainless",
              products: ["FRP STAINLESS STEEL (1)", "FRP STAINLESS STEEL (2)"],
            },
            {
              section: "Tabung FRP Heavy Duty Industrial Uses",
              products: [
                "FRP HEAVY DUTY (1)",
                "FRP HEAVY DUTY (2)",
                "FRP HEAVY DUTY (3)",
              ],
            },
            {
              section: "Multiport & Strainer",
              products: [
                "MULTIPORT (1)",
                "MULTIPORT (2)",
                "MULTIPORT (3)",
                "MULTIPORT (4)",
                "MULTIPORT (5)",
                "MULTIPORT (6)",
                "MULTIPORT (7)",
                "STRAINER (1)",
                "STRAINER (2)",
                "STRAINER (3)",
                "STRAINER (4)",
              ],
            },
          ];
        case 5:
          return [
            {
              section: "UF 2T 500-2000",
              products: [
                "UF FILTER",
                "UF FILTER 2T (1)",
                "UF FILTER 2T (2)",
                "UF FILTER 2T (3)",
                "UF FILTER 2T (4)",
                "UF FILTER 2T (5)",
              ],
            },
            {
              section: "UF PVDF",
              products: ["UF FILTER PVDF", "UF PVDF (1)", "UF PVDF (2)"],
            },
            {
              section: "UF Heavy Duty",
              products: ["UF HEAVY DUTY"],
            },
          ];
        case 6:
          return [
            {
              section: "Booster Pump RO",
              products: [
                "POMPA BOOSTER KO JINE",
                "POMPA BOOSTER",
                "Pompa EKD KYODO",
                "POMPA RO",
                "POMPA WASER",
              ],
            },
            {
              section: "Pompa Air SS",
              products: [
                "POMPA MAXON",
                "POMPA NOCCHI",
                "Pompa PENTAIR",
                "POMPA SANJU",
                "POMPA WASER SS",
              ],
            },
            {
              section: "Pompa Vertical SS",
              products: ["Pompa Vertical"],
            },
          ];
        case 7:
          return [
            {
              section: "Lampu UV Viqua Brand",
              products: [
                "BALLAST LAMPU UV VIQUA",
                "LAMPU UV VIQUA (1)",
                "LAMPU UV VIQUA (2)",
                "LAMPU UV VIQUA (3)",
                "VIQUA D4",
              ],
            },
            {
              section: "Lampu UV 12-55 Watt",
              products: [
                "LAMPU UV 12 WATT",
                "LAMPU UV 12-55 WATT",
                "LAMPU UV 16 WATT SET",
                "LAMPU UV 40 WATT",
                "LAMPU UV",
                "UV LIGHT SS316 48GPM",
                "UV-6W-12-V",
              ],
            },
            {
              section: "Ballast UV",
              products: ["BALLAST UV VIQUA"],
            },
            // Tambahkan produk Lampu UV & Ballast di sini
          ];
        case 8:
          return [
            {
              section: "Mesin TKA Purifier 5 Step System",
              products: ["MESIN AIR MINUM 5 STEP"],
            },
            {
              section: "Mesin TKA Purifier 6 Step System",
              products: [
                "SYSTEM AIR MINUM",
                "MESIN TKA 6 STEP (1)",
                "MESIN TKA 6 STEP (2)",
                "MESIN TKA 6 STEP (3)",
                "MESIN TKA 6 STEP (4)",
                "MESIN AIR MINUM 6 STEP (1)",
                "MESIN AIR MINUM 6 STEP (2)",
              ],
            },
            {
              section: "Water Dispenser",
              products: [
                "WATER DISPENSER (1)",
                "WATER DISPENSER (2)",
                "WATER DISPENSER (3)",
                "WATER DISPENSER (4)",
                "WATER DISPENSER (5)",
                "WATER DISPENSER (6)",
                "WATER DISPENSER (7)",
                "WATER DISPENSER (8)",
                "WATER DISPENSER (9)",
                "WATER DISPENSER (10)",
                "WATER DISPENSER (11)",
                "WATER DISPENSER (12)",
                "WATER DISPENSER (13)",
                "WATER DISPENSER (14)",
                "WATER DISPENSER (15)",
                "WATER DISPENSER (16)",
                "WATER DISPENSER (17)",
                "WATER DISPENSER (18)",
                "WATER DISPENSER (19)",
                "WATER DISPENSER (20)",
              ],
            },
            // Tambahkan produk Mesin Air Minum di sini
          ];
        case 9:
          return [
            {
              section: "Undersink RO",
              products: [
                "MESIN RO 100 GPD (1)" ,
              "MESIN RO 100 GPD (2)" ,
              "MESIN RO 500 GPD" ,
              "MESIN RO DISPENSER (1)" ,
              "MESIN RO DISPENSER (2)" ,
              "MESIN RO DISPENSER STANDING" ,
              "MESIN RO ROO GPD",
              "UNDERSINK RO",
              ]
            },

            {
              section: "Medium RO System",
              products: [
                "MESIN RO 800 GPD",
                "SYSTEM AIR MINUM RO",
              
              ],
            },

            {
              section: "Heavy Duty RO System",
              products: [
                "MESIN RO 4000 GPD",
                "MESIN RO",
              
              ],
            },

            {
              section: "Membran Element RO",
              products: [
                "HOUSING MEMBRANE (1)",
                "HOUSING MEMBRANE (2)",
                "HOUSING MEMBRANE 500 GPD",
                "HOUSING SS RO 4040",
                "MEMBRANE 100 GPD",
                "MEMBRANE CSM 2000 GPD",
                "MEMBRANE RO 2000 GPD VONTRON",
                "RO-MEMBRANE-FILMTEC (1)",
                "RO-MEMBRANE-FILMTEC (2)",
              ],
            },
            // Tambahkan produk Mesin RO & Membrane di sini
          ];
        case 10:
          return [
            {
              section: "Sparepart Filter Air",
              products: [
                "BIO ALKALINE",
                "BRINE TANK",
                "PRE FILTER",
                "PRESSURE TANK (1)",
                "PRESSURE TANK (2)",
                "PRESSURE TANK (3)",
                "RADAR",
              ],
            },
            {
              section: "Selenoid",
              products: [
                "SELENOID (1)",
                "SELENOID (2)",
                "SELENOID (3)",
                "SELENOID (4)",
              ],
            },
            {
              section: "Fitting dan Acc",
              products: [
                "FLOW METER (1)",
                "FLOW METER (2)",
                "WATER COINTENER",
              ],
            },
            {
              section: "Testerkit",
              products: [
                "TESTER KIT (1)",
                "TESTER KIT (2)",
                "KAPORIT",
                "OTOMATIS POMPA",
                "OTOMATIS YORK",
                "PH METER",
                "PH TESTER",
                "PRESSURE TANK",
                "TES TDS",

              ],
            },
            {
              section: "Perlengkapan Depot",
              products: [
                "GALON (1)",
                "GALON (2)",
                "GALON (3)",
                "GALON (4)",
                "GALON (5)",
                "CORONG BILAS GALON (1)",
                "CORONG BILAS GALON (2)",
                "GALON 12 LT GUCCI",
                "MESIN SIKAT GALON",

              ],
            },

            // Tambahkan produk Lainnya di sini
          ];
        default:
          return Array.from({ length: 10 }, (_, i) => `Produk ${i + 1}`);
      }
    }

    function displayProductContent(categoryNumber, sectionNumber) {
      productList.innerHTML = "";

      const productsByCategory = getProductsByCategory(categoryNumber);
      let products = [];

      if (Array.isArray(productsByCategory) && productsByCategory.length > 0) {
        const selectedSubcategory = productsByCategory.find(
          (subcategory) =>
            subcategory.section ===
            getSectionsByCategory(categoryNumber)[sectionNumber - 1]
        );
        if (selectedSubcategory) {
          products = selectedSubcategory.products;
        }
      } else {
        products = productsByCategory;
      }

      products.forEach((product, index) => {
        if (product) {
          const productDiv = document.createElement("div");
          productDiv.classList.add("product");
          productDiv.dataset.category = categoryNumber;

          let imagePath;

          if (categoryNumber === 1) {
            switch (sectionNumber) {
              case 1:
                imagePath = `assets/images/PRODUCTT/1. ALL/${product}.png`;
              default:
                break;
            }


          } else if (categoryNumber === 2) {
            switch (sectionNumber) {
              case 1:
                imagePath = `assets/images/PRODUCTT/2. FILTER CARTRIDGE/1. PP SEDIMEN/${product}.png`;
                break;
              case 2:
                imagePath = `assets/images/PRODUCTT/2. FILTER CARTRIDGE/2. CTO & GAC/${product}.png`;
                break;
              case 3:
                imagePath = `assets/images/PRODUCTT/2. FILTER CARTRIDGE/3. STRING WOUND/${product}.png`;
                break;
              case 4:
                imagePath = `assets/images/PRODUCTT/2. FILTER CARTRIDGE/4. PLEATED/${product}.png`;

                break;
              case 5:
                imagePath = `assets/images/PRODUCTT/2. FILTER CARTRIDGE/5. INLINE FILTER/${product}.png`;

                break;
              case 6:
                imagePath = `assets/images/PRODUCTT/2. FILTER CARTRIDGE/6. BAG FILTER/${product}.png`;

                break;
              default:
                break;
            }
          } else if (categoryNumber === 3) {
            switch (sectionNumber) {
              case 1:
                imagePath = `assets/images/PRODUCTT/3. HOUSING FILTER/HOUSING 10-20 INCHI/${product}.png`;
                break;
              case 2:
                imagePath = `assets/images/PRODUCTT/3. HOUSING FILTER/HOUSING BB 10-20 INCHI/${product}.png`;
                break;
              case 3:
                imagePath = `assets/images/PRODUCTT/3. HOUSING FILTER/HOUSING MULTI CARTRIDGE STAINLESS/${product}.png`;
                break;
              case 4:
                imagePath = `assets/images/PRODUCTT/3. HOUSING FILTER/HOUSING BAG FILTER/${product}.png`;
                break;
              default:
                break;
            }
          } else if (categoryNumber === 4) {
            switch (sectionNumber) {
              case 1:
                imagePath = `assets/images/PRODUCTT/4. TABUNG FRP DAN MULTIPORT/INSTAGUARD BRAND TABUNG FRP/${product}.png`;
                break;
              case 2:
                imagePath = `assets/images/PRODUCTT/4. TABUNG FRP DAN MULTIPORT/TABUNG STAINLESS/${product}.png`;
                break;
              case 3:
                imagePath = `assets/images/PRODUCTT/4. TABUNG FRP DAN MULTIPORT/TABUNG FRP HEAVY DUTY INDUSTRIAL USES/${product}.png`;
                break;
              case 4:
                imagePath = `assets/images/PRODUCTT/4. TABUNG FRP DAN MULTIPORT/MULTIPORT & STRAINER/${product}.png`;
                break;
              default:
                break;
            }
          } else if (categoryNumber === 5) {
            switch (sectionNumber) {
              case 1:
                imagePath = `assets/images/PRODUCTT/5. ULTRA FILTER/UF 2T 500-2000/${product}.png`;
                break;
              case 2:
                imagePath = `assets/images/PRODUCTT/5. ULTRA FILTER/UF PVDF/${product}.png`;

                break;
              case 3:
                imagePath = `assets/images/PRODUCTT/5. ULTRA FILTER/UF HEAVY DUTY/${product}.png`;

                break;

              default:
                break;
            }
          } else if (categoryNumber === 6) {
            switch (sectionNumber) {
              case 1:
                imagePath = `assets/images/PRODUCTT/6. POMPA/BOOSTER PUMP RO/${product}.png`;
                break;
              case 2:
                imagePath = `assets/images/PRODUCTT/6. POMPA/POMPA AIR SS/${product}.png`;
                break;
              case 3:
                imagePath = `assets/images/PRODUCTT/6. POMPA/POMPA VERTICAL SS/${product}.png`;
                break;

              default:
                break;
            }
          } else if (categoryNumber === 7) {
            switch (sectionNumber) {
              case 1:
                imagePath = `assets/images/PRODUCTT/7. LAMPU UV & BALLAST UV/LAMPU UV VIQUA BRAND/${product}.png`;
                break;
              case 2:
                imagePath = `assets/images/PRODUCTT/7. LAMPU UV & BALLAST UV/LAMPU UV 12-55 WATT/${product}.png`;
                break;
              case 3:
                imagePath = `assets/images/PRODUCTT/7. LAMPU UV & BALLAST UV/LAMPU UV GERMICIDAL/${product}.png`;
                break;
              case 4:
                imagePath = `assets/images/PRODUCTT/7. LAMPU UV & BALLAST UV/BALLAST UV/${product}.png`;
                break;
              default:
                break;
            }
          } else if (categoryNumber === 8) {
            switch (sectionNumber) {
              case 1:
                imagePath = `assets/images/PRODUCTT/8. MESIN AIR MINUM/MESIN TKA PURIFYER 5 STEP SYSTEM/${product}.png`;
                break;
              case 2:
                imagePath = `assets/images/PRODUCTT/8. MESIN AIR MINUM/MESIN TKA PURIFYER 6 STEP SYSTEM/${product}.png`;
                break;
              case 3:
                imagePath = `assets/images/PRODUCTT/8. MESIN AIR MINUM/WATER DISPENSER/${product}.png`;
                break;

              default:
                break;
            }
          } else if (categoryNumber === 9) {
            switch (sectionNumber) {
              case 1:
                imagePath = `assets/images/PRODUCTT/9. MESIN RO & MEMBRANE/UNDERSINKRO/${product}.png`;
                break;
              case 2:
                imagePath = `assets/images/PRODUCTT/9. MESIN RO & MEMBRANE/MEDIUM RO SYSTEM/${product}.png`;
                break;
              case 3:
                imagePath = `assets/images/PRODUCTT/9. MESIN RO & MEMBRANE/HEAVY DUTY RO SYSTEM/${product}.png`;
                break;
              case 4:
                imagePath = `assets/images/PRODUCTT/9. MESIN RO & MEMBRANE/MEMBRANE ELEMENT RO/${product}.png`;
                break;
              default:
                break;
            }
          } else if (categoryNumber === 10) {
            switch (sectionNumber) {
              case 1:
                imagePath = `assets/images/PRODUCTT/10. LAINNYA/SPAREPART FILTER AIR/${product}.png`;
                break;
              case 2:
                imagePath = `assets/images/PRODUCTT/10. LAINNYA/SELENOID/${product}.png`;
                break;
              case 3:
                imagePath = `assets/images/PRODUCTT/10. LAINNYA/FITTING DAN ACC/${product}.png`;
                break;
              case 4:
                imagePath = `assets/images/PRODUCTT/10. LAINNYA/TESTER KIT/${product}.png`;
                break;
              case 5:
                imagePath = `assets/images/PRODUCTT/10. LAINNYA/PERLENGKAPAN DEPOT/${product}.png`;
                break;
              default:
                break;
            }


          }

          // Tambahan kondisi jika ingin menampilkan gambar untuk kategori lain

          productDiv.innerHTML = `
            <div class="product-image">
              <img src="${imagePath}" alt="${product}">
            </div>
            <p class="product-name">${product}</p>
          `;

          productDiv.addEventListener("click", (event) => {
            event.stopPropagation();
            showProductPopup(product, `Deskripsi produk ${index + 1}`);
          });

          productList.appendChild(productDiv);
        }
      });

      productList.scrollTop = 0;
    }

    function setActiveSection(sectionNumber) {
      document.querySelectorAll(".sectionproduct").forEach((section) => {
        section.classList.remove("active");
      });

      const activeSectionElement = document.querySelector(
        `.sectionproduct[data-category="${activeCategory}"][data-section="${sectionNumber}"]`
      );
      if (activeSectionElement) {
        activeSectionElement.classList.add("active");
      }

      displayProductContent(activeCategory, sectionNumber);
    }

    function searchProducts(query) {
      const products = document.querySelectorAll(".product");
      products.forEach((product) => {
        const productName = product
          .querySelector(".product-name")
          .innerText.toLowerCase();
        if (productName.includes(query.toLowerCase())) {
          product.style.display = "block";
        } else {
          product.style.display = "none";
        }
      });
    }

    searchInput.addEventListener("input", () => {
      const query = searchInput.value.trim();
      searchProducts(query);
    });

    for (let i = 1; i <= 10; i++) {
      const categoryDiv = document.createElement("div");
      categoryDiv.classList.add("category");
      categoryDiv.dataset.category = i;
      categoryDiv.innerHTML = `<h2>${getCategoryName(i)}</h2>`;
      categoryDiv.addEventListener("click", (event) => {
        activeCategory = i;
        displayCategoryContent(i);
        event.stopPropagation();
      });
      categories.appendChild(categoryDiv);
    }

    displayCategoryContent(1);
  });
