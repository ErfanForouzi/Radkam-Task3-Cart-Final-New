import { notFound } from "next/navigation";
import ProductDetails from "@/app/_components/products/details";
import { Product } from "@/app/_components/products/products.types";

async function getProduct(id: string): Promise<Product | null> {
  try {
    const response = await fetch(`${process.env.SERVER_URL}/products/${id}`);
    const data: Product = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export default async function ProductDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const product = await getProduct(id);
  if (!product) {
    return notFound();
  }
  return (
    <section className="w-full flex items-center justify-center pt-6 h-full">
      <ProductDetails product={product} />
    </section>
  );
}
