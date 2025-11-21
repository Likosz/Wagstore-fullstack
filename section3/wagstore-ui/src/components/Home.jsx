import products from "../data/products";
import PageHeading from "./PageHeading";
import ProductListings from "./ProductListings";

export default function Home() {
  return (
    <div className="home-container">
      <PageHeading title="Explore Wag Stickers!">
        Adicione um toque de criatividade ao seu espaço com a nossa vasta gama
        de figurinhas divertidas e exclusivas. Perfeitas para qualquer ocasião!
      </PageHeading>
      <ProductListings products={products} />
    </div>
  );
}
