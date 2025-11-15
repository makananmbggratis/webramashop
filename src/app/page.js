import Image from "next/image";
import Herosec from "./components/Hero";
import Products from "./components/Products";
import product from "@/app/data/produk.json";
const Home = () => {
  return (
    <div>
      <Herosec />
      <div id="produk">
        <section className="py-12">
          <div className=" mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {product.data.map((i, j) => {
                return (
                  <Products
                    key={i.id || j}
                    namaProduk={i.produk.judul}
                    deskProduk={i.produk.deskripsi}
                    hargaProduk={i.produk.harga}
                  />
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default Home;
