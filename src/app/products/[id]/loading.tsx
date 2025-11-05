import { CardPlaceholder } from "@/app/_components/placeholders/card-placeholder";

export default function Loading() {
  return (
    <section className="w-full h-full flex items-center justify-center pt-6">
      <CardPlaceholder className="w-80 max-w-80" count={1} />
    </section>
  );
}
