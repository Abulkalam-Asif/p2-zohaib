import Sidebar from "../containers/Sidebar";

export default function RootLayout({ children }) {
  return (
    <>
      <main className="flex">
        <Sidebar />
        {children}
      </main>
    </>
  );
}