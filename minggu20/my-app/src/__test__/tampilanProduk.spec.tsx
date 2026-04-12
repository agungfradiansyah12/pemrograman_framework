import { render, screen } from "@testing-library/react";
import TampilanProduk from "@/views/product";
import "@testing-library/jest-dom";

describe("TampilanProduk", () => {
  it("render tanpa produk (branch kosong)", () => {
    render(<TampilanProduk products={[]} />);

    expect(screen.getByTestId("title")).toBeInTheDocument();
  });

  it("render dengan produk", () => {
    const mock = [
      {
        id: "1",
        name: "Produk A",
        price: 10000,
        image: "/test.jpg",
        category: "Makanan",
      },
    ];

    render(<TampilanProduk products={mock} />);

    expect(screen.getByText("Produk A")).toBeInTheDocument();
  });
});
