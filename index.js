
// Membuat Array Daftar Nama Anggota
let nama = [
    "Madina Rita Sari",
    "Febria Syafaatul Wahidah",
    "Lina Nurhasanah",
    "Hikmatuz Zulfa",
    "Rima Enjelita",
    "Meiva Rianita",
    "Naya Alitia Sari",
    "Herlina Fitriani",
    "Saskia Yulanda",
    "Suci Savira",
    "Akbar Hariadi",
    "Wisnu Wijaya",
    "Ridho Maulana Yusuf",
    "Rafa Dwi Refaldi"
];

// Menampilkan daftar anggota
console.log("DAFTAR NAMA ANGGOTA");

for (let i = 0; i < nama.length; i++) {
    console.log((i + 1) + ". " + nama[i]);
}

// Menghitung jumlah anggota
let jumlah = nama.length;

// Menampilkan jumlah anggota
console.log("Jumlah Anggota: " + jumlah + " Orang");
