const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-3 ">
        <div className="flex justify-between items-center">
          {/* Logo kiri */}
          <div className="shrink ">
            <h1 className="text-xl font-bold text-blue-600">CROCOshop</h1>
          </div>

          {/* Menu kanan */}
          <div className="hidden md:flex space-x-6 items-center">
            <a href="#" className="text-blue-600 hover:text-blue-800">
              Beranda
            </a>
            <a href="#produk" className="text-gray-600 hover:text-blue-600">
              Produk & Jasa
            </a>
            <a href="#tentang" className="text-gray-600 hover:text-blue-600">
              Tentang Kami
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
