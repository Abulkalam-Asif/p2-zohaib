import Sidebar from "../containers/Sidebar";
import { SidebarProvider } from "../contexts/SidebarContext";
import { ThemeColorProvider } from "../contexts/ThemeColorContext";

export default function RootLayout({ children }) {
  return (
    <ThemeColorProvider>
      <SidebarProvider>
        <main>
          <Sidebar />
          {children}
        </main>
      </SidebarProvider>
    </ThemeColorProvider>
  );
}
