import { useRouter } from "next/router";

export default function Product() {
  const router = useRouter();
  console.log(router.query.product);

  return (
    <ul>
      <li>test</li>
    </ul>
  );
}
