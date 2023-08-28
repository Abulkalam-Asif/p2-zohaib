import Sidebar from "../containers/Sidebar";
import { SidebarProvider } from "../contexts/SidebarContext";

export default function RootLayout({ children }) {
  return (
    <SidebarProvider>
      <main>
        <Sidebar />
        {children}
      </main>
    </SidebarProvider>
  );
}
