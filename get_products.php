<?php
// Konfigurasi database
$server = "localhost";
$user = "root";
$password = "";
$database = "tkafilter";

// Membuat koneksi
$conn = new mysqli($server, $user, $password, $database);

// Memeriksa koneksi
if ($conn->connect_error) {
    die("Koneksi gagal: " . $conn->connect_error);
}

echo "Koneksi berhasil";

// Tutup koneksi
$conn->close();
?>