import { useRouter } from "next/router";

export default function CategoryPage() {
  const { query } = useRouter();
  const slug = query.slug;

  return (
    <div>
      <h1>Halaman Category</h1>

      <ul>{slug && slug.map((item, index) => <li key={index}>{item}</li>)}</ul>
    </div>
  );
}
