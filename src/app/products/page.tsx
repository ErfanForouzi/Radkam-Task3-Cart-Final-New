import { Suspense } from "react";
import { CardPlaceholder } from "../_components/placeholders/card-placeholder";
import { ProductsList } from "../_components/products";

const ProductsPage: React.FC = async () => {
  return (
    <div className="flex flex-col items-center  gap-2  w-full p-5">
      <h1 className="text-3xl text-gray-100">List Of Products</h1>
      <Suspense fallback={<CardPlaceholder count={10} />}>
        <ProductsList />
      </Suspense>
    </div>
  );
};
export default ProductsPage;
