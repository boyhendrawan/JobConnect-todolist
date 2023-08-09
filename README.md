# JobConnect-todolist

## Jawaban Dari MockTest
### JSON

JSON adalah singkatan dari "JavaScript Object Notation." Ini adalah format pertukaran data ringan yang mudah dibaca dan ditulis oleh manusia, serta diproses dan dihasilkan oleh mesin. JSON menggunakan struktur sederhana berupa pasangan kunci-nilai, di mana data diatur ke dalam objek (diapit oleh kurung kurawal {}) dan larik (diapit oleh tanda kurung siku []). Setiap kunci adalah string, dan nilai bisa berupa string, angka, objek, larik, boolean, atau null. JSON umumnya digunakan untuk pertukaran data antara server dan aplikasi web, dan sering digunakan dengan API untuk mengirim informasi terstruktur.
penggunaan json untuk  restfull api : 

1. *Format Pertukaran Data Ringan:* JSON adalah cara yang sederhana dan mudah untuk mengirimkan data antara aplikasi dan server.

2. *Pemahaman Manusia dan Mesin:* JSON dirancang agar mudah dibaca dan ditulis oleh manusia, serta mudah diproses dan dihasilkan oleh komputer.

3. *Pasangan Kunci-Nilai:* Data dalam JSON diatur dalam pasangan "kunci" yang merupakan nama data dan "nilai" yang merupakan nilai sebenarnya.

4. *Objek dan Larik:* Data dalam JSON bisa diatur dalam objek (dalam kurung kurawal {}) untuk mengelompokkan informasi terkait, atau dalam larik (dalam tanda kurung siku []) untuk daftar data.

5. *Jenis Nilai yang Beragam:* Nilai dalam JSON bisa berupa string (teks), angka, objek (lagi), larik, boolean (true/false), atau null (kosong).

6. *Digunakan dalam Pertukaran Data:* JSON sering digunakan dalam API untuk mengirim dan menerima data terstruktur antara aplikasi dan server.

7. *Pertukaran Melalui HTTP:* Data JSON dikirim dan diterima melalui permintaan HTTP seperti GET (ambil data) atau POST (kirim data).

8. *Bahasa Universal:* JSON tidak terbatas pada bahasa pemrograman tertentu dan dapat digunakan dalam berbagai bahasa.

9. *Contoh Penggunaan:* Saat Anda meminta informasi dari API (seperti cuaca terbaru), server merespons dengan data dalam format JSON. Aplikasi kemudian menguraikan data ini dan menampilkannya kepada Anda.

10. *Penyediaan Data Terstruktur:* Dengan menggunakan JSON dalam API, Anda bisa dengan mudah menyediakan dan mengakses data terstruktur antara aplikasi dan server, memungkinkan aplikasi Anda untuk bekerja dengan informasi yang akurat dan terbaru.

Semoga penjelasan ini membantu Anda memahami JSON dalam konteks API dengan lebih baik!



Rest Full Api

Tentu! RESTful API adalah cara bagi berbagai bagian perangkat lunak untuk berbicara satu sama lain dengan menggunakan aturan yang sudah ada, seperti berbicara dengan teman menggunakan bahasa yang dipahami bersama. Ini sangat berguna dalam pengembangan front end. Mari saya jelaskan poin-poinnya lebih detail:

1. **Representational State Transfer (Transfer Status Representasi)**: RESTful API menggunakan cara berbicara yang teratur dan jelas antara komponen perangkat lunak. Ini mirip dengan kita berbicara dengan bahasa yang dimengerti bersama.

2. **API (Antarmuka Pemrograman Aplikasi)**: RESTful API adalah cara untuk membuat permintaan dan mendapatkan respons antara aplikasi atau komponen perangkat lunak yang berbeda. Ini seperti cara kita berkomunikasi dengan pelayan di restoran.

3. **HTTP (Protokol Transfer Hiperteks)**: RESTful API biasanya berkomunikasi melalui protokol HTTP, yang juga digunakan untuk mengakses halaman web. Ini membuatnya mudah untuk mengirim permintaan dan menerima respons.

4. *Metode Permintaan HTTP*: Ada berbagai jenis permintaan yang dapat dilakukan dengan RESTful API, seperti:
   - GET: Mengambil data dari server, seperti membaca menu restoran.
   - POST: Mengirimkan data baru ke server, seperti memesan makanan.
   - PUT: Memperbarui data yang sudah ada di server, seperti mengubah pesanan.
   - DELETE: Menghapus data dari server, seperti membatalkan pesanan.

5. *Format Data*: Data dikirimkan dalam format yang umumnya dipahami, seperti JSON. Ini memungkinkan berbagai komponen perangkat lunak untuk berbicara dalam bahasa yang seragam.

6. **Sumber Daya (Resources)**: API RESTful menggunakan URL (alamat) untuk mengakses sumber daya tertentu, seperti halaman di sebuah buku menu restoran.

Dalam pengembangan front end, RESTful API digunakan untuk mengambil data dari server (misalnya, menu restoran) atau mengirim data ke server (misalnya, memesan makanan), sehingga aplikasi dapat berinteraksi dengan informasi yang ada di belakang layar.