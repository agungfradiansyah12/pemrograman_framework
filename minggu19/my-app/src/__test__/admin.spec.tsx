import { render, screen } from "@testing-library/react";
import HalamanAdmin from "@/pages/admin";

// Mock router (wajib walaupun belum dipakai)
jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/admin",
      pathname: "/admin",
      query: {},
      asPath: "/admin",
      push: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
      },
      isReady: true,
    };
  },
}));

describe("Admin Page", () => {
  it("renders admin page correctly", () => {
    const { container } = render(<HalamanAdmin />);

    // ✅ getByTestId + toBe
    expect(screen.getByTestId("admin-title").textContent).toBe("Halaman Admin");

    // ✅ snapshot
    expect(container).toMatchSnapshot();
  });
});
