import products from "../data/products";
import PageHeading from "./PageHeading";
import ProductListings from "./ProductListings";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      <PageHeading title="Explore Eazy Stickers!">
        Adicione um toque de criatividade ao seu espaço com a nossa vasta gama
        de figurinhas divertidas e exclusivas. Perfeitas para qualquer ocasião!
      </PageHeading>
      <ProductListings products={products} />
    </div>
  );
}
