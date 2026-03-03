export default function MainSection() {
  return (
    <section className="p-10 bg-gray-100">
      <h2 className="text-2xl font-semibold mb-6">Daftar Produk</h2>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow">Produk 1</div>
        <div className="bg-white p-4 rounded shadow">Produk 2</div>
        <div className="bg-white p-4 rounded shadow">Produk 3</div>
      </div>
    </section>
  );
}
