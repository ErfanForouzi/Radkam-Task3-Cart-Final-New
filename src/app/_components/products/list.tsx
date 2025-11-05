import ProductDetails from "./details";
import { Product,  ProductResponse } from "./products.types";

async function getProducts(): Promise<Product[]> {
  try {
    const response = await fetch(
    `${process.env.SERVER_URL}/products?limit=12`,{
      next:{
        revalidate:24 * 60 * 60
      }
    }
  );
  const data: ProductResponse = await response.json();
  return data.products;
  } catch (error) {
    console.log(error)
    return [];
  }
  
}


export const ProductsList: React.FC = async () => {
  const products = await getProducts();


  if(products.length < 1){
    return <h1 className="text-center text-xl">Products Not Found 💔</h1>
  }

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-2">
      {products?.map((product) => (
        <ProductDetails key={`product-${product.id}`} product={product} />
      ))}
    </section>
  );
};
