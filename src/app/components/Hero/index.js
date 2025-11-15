const Herosec = () => {
  return (
    <>
      <section className="py-12 bg-gradient-to-r from-blue-500 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Solusi Terbaik untuk Kebutuhan Anda
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Temukan berbagai produk dan jasa berkualitas tinggi dengan harga
            terjangkau.
          </p>
          <a
            href="#produk"
            className="inline-block bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-blue-50"
          >
            Lihat Katalog
          </a>
        </div>
      </section>
    </>
  );
};

const Herosecc = () => {
  return (
    <>
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">
        Produk & Jasa Kami
      </h2>
      <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
        Pilih dari berbagai produk dan jasa yang kami tawarkan untuk memenuhi
        kebutuhan bisnis Anda.
      </p>
    </>
  );
};

export default Herosec;
