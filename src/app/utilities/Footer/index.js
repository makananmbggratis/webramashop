const Footer = () => {
  return (
    <footer id="tentang" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                <i className="fas fa-store text-white"></i>
              </div>
              <span className="text-xl font-bold">CROCOshop</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Solusi terpercaya untuk kebutuhan Anda. Menyediakan berbagai
              produk dan jasa berkualitas dengan pelayanan terbaik.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Menu Cepat</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Beranda
                </a>
              </li>
              <li>
                <a
                  href="#produk"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Produk & Jasa
                </a>
              </li>
              <li>
                <a
                  href="#tentang"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Tentang Kami
                </a>
              </li>
              <li>
                <a
                  href="#testimoni"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Testimoni
                </a>
              </li>
              <li>
                <a
                  href="#blog"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Kontak Kami</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt text-blue-400 mt-1 mr-3"></i>
                <span className="text-gray-300">
                  Jawa Timur, Lamongan, Sambeng
                </span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone text-blue-400 mr-3"></i>
                <span className="text-gray-300">+62 816-1564-8573</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope text-blue-400 mr-3"></i>
                <span className="text-gray-300">hello@bizcatalog.com</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-clock text-blue-400 mr-3"></i>
                <span className="text-gray-300">buka setiap hari</span>
              </li>
            </ul>
          </div>
        </div>

        {/* <div className="border-t border-gray-700 py-6">
          <h4 className="text-center text-gray-300 mb-4">
            Metode Pembayaran yang Diterima
          </h4>
          <div className="flex flex-wrap justify-center items-center gap-4">
            <div className="bg-white rounded-lg p-2 shadow-sm">
              <i className="fab fa-cc-visa text-2xl text-blue-600"></i>
            </div>
            <div className="bg-white rounded-lg p-2 shadow-sm">
              <i className="fab fa-cc-mastercard text-2xl text-red-600"></i>
            </div>
            <div className="bg-white rounded-lg p-2 shadow-sm">
              <i className="fas fa-qrcode text-2xl text-green-600"></i>
            </div>
            <div className="bg-white rounded-lg p-2 shadow-sm">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%2300AEEF' d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm4 0h-2v-6h2v6z'/%3E%3C/svg%3E"
                alt="DANA"
                className="w-8 h-8"
              />
            </div>
            <div className="bg-white rounded-lg p-2 shadow-sm">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23FF6B00' d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z'/%3E%3C/svg%3E"
                alt="OVO"
                className="w-8 h-8"
              />
            </div>
            <div className="bg-white rounded-lg p-2 shadow-sm">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%2300AA13' d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z'/%3E%3C/svg%3E"
                alt="GoPay"
                className="w-8 h-8"
              />
            </div>
          </div>
        </div> */}

        <div className="border-t border-gray-700 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; 2026 CROCOshop. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Syarat & Ketentuan
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Kebijakan Privasi
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Kebijakan Pengembalian
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
