import OrderDetail from "@/app/_components/order/order-details";

export default async function OrderDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const id = (await params).id;

  return <OrderDetail orderId={Number(id)} />;
}
