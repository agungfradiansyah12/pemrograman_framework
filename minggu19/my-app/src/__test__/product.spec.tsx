import { render, screen } from "@testing-library/react";
import TampilanProduk from "@/pages/produk";

// Mock router
jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/produk",
      pathname: "/produk",
      query: {},
      asPath: "/produk",
      push: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
      },
      isReady: true,
    };
  },
}));

describe("Product Page", () => {
  it("renders product page correctly", () => {
    const { container } = render(<TampilanProduk />);

    // getByTestId + toBe
    expect(screen.getByTestId("title").textContent).toBe("Product Page");

    // expect(screen.getByTestId("title").textContent).toBe("Product Page");

    // snapshot
    expect(container).toMatchSnapshot();
  });
});
