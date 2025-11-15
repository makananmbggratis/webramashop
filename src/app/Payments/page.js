/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import "./style.css";
import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import Link from "next/link";

const PaymentsContent = () => {
  const searchParams = useSearchParams();
  const [total, setTotal] = useState(0);
  const [voucherMessage, setVoucherMessage] = useState("");
  const [selectedPayment, setSelectedPayment] = useState("");
  const [selectedPriority, setSelectedPriority] = useState(0);
  const [voucherDiscount, setVoucherDiscount] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const productData = {
    nama: searchParams.get("product") || "Pengembangan Website",
    desc: searchParams.get("desc") || "Jasa pembuatan website profesional",
    price: parseInt(searchParams.get("price")) || 2500000,
    id: searchParams.get("id") || "WEB001",
  };

  const basePrice = productData.price;

  const formatRupiah = (angka) => {
    return "Rp " + angka.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  // Update total harga setiap ada perubahan
  useEffect(() => {
    const newTotal = basePrice + selectedPriority - voucherDiscount;
    setTotal(Math.max(0, newTotal)); // Pastikan tidak minus
  }, [basePrice, selectedPriority, voucherDiscount]);

  const handleVoucher = () => {
    const voucherInput = document.getElementById("voucher");
    const voucherValue = voucherInput.value.trim();

    if (voucherValue === "DISKON10") {
      setVoucherDiscount(basePrice * 0.1); // Diskon 10%
      setVoucherMessage("Voucher berhasil digunakan! Diskon 10%");
    } else if (voucherValue === "DISKON20") {
      setVoucherDiscount(basePrice * 0.2); // Diskon 20%
      setVoucherMessage("Voucher berhasil digunakan! Diskon 20%");
    } else if (voucherValue) {
      setVoucherDiscount(0);
      setVoucherMessage("Kode voucher tidak valid");
    } else {
      setVoucherDiscount(0);
      setVoucherMessage("");
    }
  };

  // Validasi & proses beli beli beli
  const handleBeli = () => {
    if (!isClient) return;

    const nama = document.getElementById("nama")?.value || "";
    const catatan = document.getElementById("catatan")?.value || "";

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
      nama: nama.trim(),
      catatan: catatan.trim(),
      priority: selectedPriority,
      voucherDiscount,
      payment: selectedPayment,
      total: total,
      timestamp: new Date().toISOString(),
    };

    // Simpan ke localStorage
    localStorage.setItem("orderData", JSON.stringify(orderData));

    // Format pesan WhatsApp
    const whatsappMessage = `
Halo Admin! ✨
Ada pesanan baru dari *${nama.trim()}*.

📦 Produk:
- Nama: ${orderData.product.nama}
- Deskripsi: ${orderData.product.desc}
- Kode Produk: ${orderData.product.id}
- Harga: ${formatRupiah(orderData.product.price)}

⚡ Prioritas: ${orderData.priority > 0 ? "Express (+Rp 5.000)" : "Standar"}
🏷️ Voucher: ${voucherDiscount > 0 ? "Digunakan" : "Tidak digunakan"}
💸 Diskon: ${formatRupiah(orderData.voucherDiscount)}

💰 Total Bayar: ${formatRupiah(orderData.total)}
💳 Metode Pembayaran: ${orderData.payment.toUpperCase()}

📝 Catatan:
${catatan.trim() || "-"}

Terima kasih! 🙏
    `.trim();

    const phoneNumber = "6281615648573";
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, "_blank");
  };

  // Reset voucher
  const resetVoucher = () => {
    const voucherInput = document.getElementById("voucher");
    if (voucherInput) voucherInput.value = "";
    setVoucherDiscount(0);
    setVoucherMessage("");
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <nav className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-blue-600">CROCOshop</h1>
            <Link
              href="/"
              className="text-gray-600 hover:text-blue-600 font-medium"
            >
              Kembali ke Beranda
            </Link>
          </div>
        </nav>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-blue-600">
            Konfirmasi Pemesanan
          </h1>
          <p className="text-gray-600">Lengkapi data pemesanan Anda</p>
        </div>

        {/* Product Info */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-6">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
              <span className="text-blue-600 text-xl">💻</span>
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-lg">{productData.nama}</h3>
              <p className="text-gray-600 text-sm">{productData.desc}</p>
              <p className="text-blue-600 font-bold mt-1">
                {formatRupiah(productData.price)}
              </p>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-24">
          {/* Nama Lengkap */}
          <div className="form-group mb-4">
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

          {/* Priority Options */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Priority
            </label>
            <div className="space-y-2">
              <div
                onClick={() => setSelectedPriority(0)}
                className={`p-3 border-2 rounded-lg cursor-pointer transition-all ${
                  selectedPriority === 0
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-300 hover:border-gray-400"
                }`}
              >
                <div className="flex justify-between items-center">
                  <div className="font-medium">Standar</div>
                  <div className="text-green-600 font-medium">+Rp 0</div>
                </div>
              </div>
              <div
                onClick={() => setSelectedPriority(5000)}
                className={`p-3 border-2 rounded-lg cursor-pointer transition-all ${
                  selectedPriority === 5000
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-300 hover:border-gray-400"
                }`}
              >
                <div className="flex justify-between items-center">
                  <div className="font-medium">Express</div>
                  <div className="text-orange-600 font-medium">+Rp 5.000</div>
                </div>
              </div>
            </div>
          </div>

          {/* Voucher */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Kode Voucher
            </label>
            <div className="flex space-x-2">
              <input
                type="text"
                id="voucher"
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Masukkan kode voucher"
                onKeyPress={(e) => {
                  if (e.key === "Enter") handleVoucher();
                }}
              />
              <button
                onClick={handleVoucher}
                className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 font-medium"
              >
                Gunakan
              </button>
              <button
                onClick={resetVoucher}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 font-medium"
              >
                Reset
              </button>
            </div>
            {voucherMessage && (
              <div
                className={`text-sm mt-2 ${
                  voucherMessage.includes("berhasil")
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {voucherMessage}
              </div>
            )}
          </div>

          {/* Payment Methods */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Metode Pembayaran <span className="text-red-500">*</span>
            </label>
            <div className="space-y-2">
              <div
                onClick={() => setSelectedPayment("qris")}
                className={`p-3 border-2 rounded-lg cursor-pointer transition-all ${
                  selectedPayment === "qris"
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-300 hover:border-gray-400"
                }`}
              >
                <div className="flex items-center space-x-3">
                  <span className="text-green-600 text-xl">📱</span>
                  <span>QRIS</span>
                </div>
              </div>
              <div
                onClick={() => setSelectedPayment("dana")}
                className={`p-3 border-2 rounded-lg cursor-pointer transition-all ${
                  selectedPayment === "dana"
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-300 hover:border-gray-400"
                }`}
              >
                <div className="flex items-center space-x-3">
                  <span className="text-blue-600 text-xl">💙</span>
                  <span>DANA</span>
                </div>
              </div>
            </div>
          </div>

          {/* Catatan */}
          <div className="mb-4">
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

        {/* Fixed Footer */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center">
              <div>
                <div className="text-sm text-gray-600">Total Pembayaran</div>
                <div className="text-xl font-bold text-blue-600">
                  {formatRupiah(total)}
                </div>
              </div>
              <button
                onClick={handleBeli}
                className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium transition-colors"
              >
                Beli Sekarang
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// Komponen wrapper dengan Suspense
const Payments = () => {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Memuat halaman pembayaran...</p>
          </div>
        </div>
      }
    >
      <PaymentsContent />
    </Suspense>
  );
};

export default Payments;
