<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Pesan makanan cepat dan praktis dengan fitur GrabFood. Pengiriman cepat, restoran terdekat, dan promo menarik!">
    <meta name="keywords" content="GrabFood, pengiriman cepat, makanan praktis, promo GrabFood, restoran terdekat">
    <title>Pesan Makanan Tanpa Menunggu Lama - GrabFood</title>
    <link rel="stylesheet" href="styles/styles.css">
    <script src="js/script.js" defer></script> <!-- Menambahkan link script.js -->
</head>
<body>
    <!-- Navbar -->
    <nav>
        <div class="navbar-container">
            <img src="images/logo.png" alt="GrabFood Logo" class="logo">
            <ul class="navbar-links">
                <li><a href="#fitur">Fitur</a></li>
                <li><a href="https://food.grab.com/id/id/?gclsrc=aw.ds&gad_source=1&gad_campaignid=21001218607&gbraid=0AAAAADjZ0lw2eEEK_YPv6KGKpz1k10ezA&gclid=Cj0KCQiAxonKBhC1ARIsAIHq_ltjsmjcgoJ7Mk44rhdat9VUIEMNyXYF-KST-GTCssRvVXDXdNPcnl4aApE2EALw_wcB" target="_blank">Kunjungi GrabFood</a></li>
            </ul>
        </div>
    </nav>

    <header>
        <h1>Pesan Makanan Tanpa Menunggu Lama dengan GrabFood</h1>
        <p>Solusi cepat untuk kamu yang butuh makan praktis dan anti ribet.</p>
    </header>

    <section id="fitur">
        <h2>Fitur GrabFood yang Memudahkan</h2>

        <article>
            <h3 class="fitur-title" onclick="toggleFitur('fitur1')">Pengiriman Tercepat</h3>
            <div id="fitur1" class="fitur-content">
                <div class="fitur-text">
                    <p>Fitur ini membantu pengguna memilih restoran dengan waktu antar paling cepat.</p>
                    <ul>
                        <li>Aktifkan filter “Pengiriman Tercepat”</li>
                        <li>Pilih menu yang tersedia instan atau siap saji</li>
                        <li>Hindari jam sibuk (12.00–13.00 & 18.00–20.00)</li>
                    </ul>
                    <p>Hasil: Makanan datang lebih cepat, bahkan dalam 10–20 menit.</p>
                </div>
                <img src="images/fast-delivery.png" alt="Pengiriman Tercepat" class="fitur-image">
            </div>
        </article>

        <article>
            <h3 class="fitur-title" onclick="toggleFitur('fitur2')">Pilih Restoran Terdekat</h3>
            <div id="fitur2" class="fitur-content">
                <div class="fitur-text">
                    <p>Semakin dekat jarak restoran, semakin cepat kurir mengambil pesanan.</p>
                    <ul>
                        <li>Gunakan fitur “Terdekat dari Lokasimu”</li>
                        <li>Pilih makanan instan fast food atau bakery</li>
                        <li>Gunakan GrabFood Maps untuk melihat estimasi jarak</li>
                    </ul>
                    <p>Hasil: Estimasi waktu pengiriman bisa lebih hemat hingga 50%.</p>
                </div>
                <img src="images/nearby-restaurant.png" alt="Restoran Terdekat" class="fitur-image">
            </div>
        </article>

        <article>
            <h3 class="fitur-title" onclick="toggleFitur('fitur3')">Manfaatkan Promo Pengiriman & Diskon</h3>
            <div id="fitur3" class="fitur-content">
                <div class="fitur-text">
                    <p>GrabFood juga menyediakan voucher hemat yang bisa digunakan tanpa mengorbankan waktu pengiriman.</p>
                    <ul>
                        <li>Klaim voucher di halaman Promo GrabFood</li>
                        <li>Gunakan pembayaran OVO/GrabPay untuk lebih banyak penawaran</li>
                        <li>Pilih restoran dengan label Promo Aktif / Diskon Tersedia</li>
                    </ul>
                    <p>Hasil: Pengiriman cepat tetap dengan harga hemat.</p>
                </div>
                <img src="images/promo.png" alt="Promo GrabFood" class="fitur-image">
            </div>
        </article>

        <article>
            <h3 class="fitur-title" onclick="toggleFitur('fitur4')">Periksa Rating dan Menu Favorit</h3>
            <div id="fitur4" class="fitur-content">
                <div class="fitur-text">
                    <p>Restoran dengan rating tinggi biasanya lebih konsisten dengan waktu pengantaran.</p>
                    <ul>
                        <li>Prioritaskan restoran rating 4.5★ ke atas</li>
                        <li>Periksa review terkait kecepatan antar</li>
                        <li>Pilih menu yang bertanda “Cepat Disiapkan”</li>
                    </ul>
                    <p>Hasil: Makanan datang tepat waktu dan kualitas tetap terjaga.</p>
                </div>
                <img src="images/rating.jpeg" alt="Rating Restoran" class="fitur-image">
            </div>
        </article>

        <article>
            <h3 class="fitur-title" onclick="toggleFitur('fitur5')">Checkout Tanpa Ragu dengan Tracking Real-Time</h3>
            <div id="fitur5" class="fitur-content">
                <div class="fitur-text">
                    <p>Tracking GrabFood membantu menghindari rasa menunggu yang tidak pasti.</p>
                    <ul>
                        <li>Aktifkan notifikasi</li>
                        <li>Pantau posisi driver di peta</li>
                        <li>Siapkan lokasi penerimaan agar kurir tidak perlu menunggu</li>
                    </ul>
                    <p>Hasil: Proses pesan → pickup → antar lebih cepat tanpa hambatan.</p>
                </div>
                <img src="images/real-time-tracking.png" alt="Tracking Real-Time" class="fitur-image">
            </div>
        </article>
    </section>

    <footer>
        <p>&copy; 2025 GrabFood - Semua hak cipta dilindungi.</p>
    </footer>
</body>
</html>
