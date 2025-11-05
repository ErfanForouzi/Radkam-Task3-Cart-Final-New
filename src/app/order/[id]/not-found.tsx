import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container  mx-auto">
      <div className="flex justify-center pt-10">
        <div>
          <p className="text-2xl font-semibold text-secondary-500 mb-8">
            😂Order Not Found😂
          </p>
          <Link
            href="/products"
            className="bg-blue-600 px-3 py-2 text-lg font-bold text-center text-white rounded-md"
          >
            Go To Products
          </Link>
        </div>
      </div>
    </div>
  );
}
