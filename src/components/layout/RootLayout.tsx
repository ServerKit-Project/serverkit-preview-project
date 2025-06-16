import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <nav className="container mx-auto flex h-16 items-center justify-between px-4">
          <h1 className="text-xl font-bold">ServerKit</h1>
          <div className="flex items-center gap-4">
            {/* 네비게이션 아이템들을 여기에 추가하세요 */}
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>

      <footer className="mt-auto border-t">
        <div className="container mx-auto px-4 py-6 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} ServerKit. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
