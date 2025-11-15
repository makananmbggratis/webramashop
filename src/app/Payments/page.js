"use client";
import "./style.css";
import { connection } from "next/server";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

const Payments = () => {
  connection();
  const searchParams = useSearchParams();
  const [total, setTotal] = useState(0);
  const [voucherMessage, setVoucherMessage] = useState("");
  const [selectedPayment, setSelectedPayment] = useState("");
  const [selectedPriority, setSelectedPriority] = useState(0);
  const [voucherDiscount, setVoucherDiscount] = useState(0);

  const productData = {
    nama: searchParams.get("product") || "Pengembangan Website",
    desc: searchParams.get("desc") || "Jasa pembuatan website profesional",
    price: parseInt(searchParams.get("price")) || 2500000,
    id: searchParams.get("id") || "WEB001",
  };

  const basePrice = productData.price;

  // Format harga
  function formatRupiah(angka) {
    return "Rp " + angka.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  // Update total harga setiap ada perubahan
  useEffect(() => {
    setTotal(basePrice + selectedPriority - voucherDiscount);
  }, [basePrice, selectedPriority, voucherDiscount]);

  // Validasi & proses beli
  function handleBeli() {
    const nama = document.getElementById("nama").value;
    const catatan = document.getElementById("catatan").value;
    if (!nama.trim()) {
      alert("Mohon isi nama lengkap Anda");
      return;
    }
    if (!selectedPayment) {
      alert("Mohon pilih metode pembayaran");
      return;
    }

    const orderData = {
      product: productData,
      nama,
      priority: selectedPriority,
      voucherDiscount,
      payment: selectedPayment,
      total: basePrice + selectedPriority - voucherDiscount,
    };

    localStorage.setItem("orderData", JSON.stringify(orderData));
    // alert(
    //   "Pemesanan berhasil! Total: " +
    //     formatRupiah(orderData.total) +
    //     productData.nama
    // );
    const whatsappMessage = `
Halo Admin! ✨
Ada pesanan baru dari *${nama || "unknown"}*.

📦 Produk:
- Nama: ${orderData.product.nama}
- Deskripsi: ${orderData.product.desc}
- Kode Produk: ${orderData.product.id}

⚡ Prioritas: ${orderData.priority > 0 ? "Express" : "Standar"}
🏷️ Voucher: ${orderData.voucher || "-"}
💸 Diskon: Rp ${orderData.voucherDiscount.toLocaleString("id-ID")}

💰 Total Bayar: Rp ${orderData.total.toLocaleString("id-ID")}
💳 Metode Pembayaran: ${orderData.payment.toUpperCase()}

📝 Catatan:
${catatan || "-"}

Terima kasih! 🙏
`;
    const phoneNumber = "6281615648573"; // nomor admin
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
  }

  return (
    <>
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <nav className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            {/* Nama perusahaan */}
            <h1 className="text-xl font-bold text-blue-600">CROCOshop</h1>

            {/* Link kembali */}
            <Link
              href="/"
              className="text-gray-600 hover:text-blue-600 font-medium"
            >
              Kembali ke Beranda
            </Link>
          </div>
        </nav>
      </header>
      <div className="container">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-blue-600">
            Konfirmasi Pemesanan
          </h1>
          <p className="text-gray-600">Lengkapi data pemesanan Anda</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4 mb-6">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
              <i className="fas fa-laptop-code text-blue-600 text-xl"></i>
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-lg" id="product-name">
                {productData.nama}
              </h3>
              <p className="text-gray-600 text-sm" id="product-desc">
                {productData.desc}
              </p>
              <p className="text-blue-600 font-bold mt-1" id="product-price">
                {productData.price}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4 mb-24">
          <div className="form-group">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nama Lengkap <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="nama"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Masukkan nama lengkap"
              required
            />
          </div>

          <div className="mt-4 space-y-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              priority
            </label>
            <div
              onClick={() => setSelectedPriority(0)}
              className={`priority-option ${
                selectedPriority === 0 ? "selected" : ""
              }`}
            >
              <div className="flex justify-between items-center">
                <div className="font-medium">Standar</div>
                <div className="text-green-600 font-medium">+Rp 0</div>
              </div>
            </div>
            <div
              onClick={() => setSelectedPriority(5000)}
              className={`priority-option ${
                selectedPriority === 5000 ? "selected" : ""
              }`}
            >
              <div className="flex justify-between items-center">
                <div className="font-medium">Express</div>
                <div className="text-orange-600 font-medium">+Rp 5.000</div>
              </div>
            </div>
          </div>

          <div className="form-group">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Kode Voucher
            </label>
            <div className="flex space-x-2">
              <input
                type="text"
                id="voucher"
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Masukkan kode voucher"
              />
            </div>
            <div id="voucher-message" className="text-sm mt-2 hidden"></div>
          </div>

          <div className="form-group">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Metode Pembayaran <span className="text-red-500">*</span>
            </label>
            <div className="space-y-2">
              <div className="mt-4 space-y-2">
                <div
                  onClick={() => setSelectedPayment("qris")}
                  className={`payment-option ${
                    selectedPayment === "qris" ? "selected" : ""
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <i className="fas fa-qrcode text-green-600"></i>
                    <span>QRIS</span>
                  </div>
                </div>
              </div>

              <div
                onClick={() => setSelectedPayment("dana")}
                className={`payment-option ${
                  selectedPayment === "dana" ? "selected" : ""
                }`}
              >
                <div className="flex items-center space-x-3">
                  <i className="fas fa-wallet text-blue-600"></i>
                  <span>DANA</span>
                </div>
              </div>
            </div>
          </div>

          <div className="form-group">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Catatan untuk Admin
            </label>
            <textarea
              id="catatan"
              rows="3"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Masukkan catatan atau permintaan khusus..."
            ></textarea>
          </div>
        </div>

        <div className="footer-fixed">
          <div className="flex justify-between items-center">
            <div>
              <div className="text-sm text-gray-600">Total Pembayaran</div>
              <div className="text-xl font-bold text-blue-600" id="total-harga">
                {formatRupiah(total)}
              </div>
            </div>
            <button
              onClick={handleBeli}
              id="btn-beli"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
            >
              Beli Sekarang
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payments;
