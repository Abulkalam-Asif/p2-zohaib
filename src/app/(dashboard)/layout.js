import Sidebar from "../containers/Sidebar";
import { SidebarProvider } from "../contexts/SidebarContext";

export default function RootLayout({ children }) {
  return (
    <SidebarProvider>
      <main className="flex">
        <Sidebar />
        {children}
      </main>
    </SidebarProvider>
  );
}
