import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { LogOut, FileText, Image, Search, Home, Info, Phone, Briefcase, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import AdminContentEditor from "@/components/admin/AdminContentEditor";
import AdminSEOEditor from "@/components/admin/AdminSEOEditor";
import AdminImageEditor from "@/components/admin/AdminImageEditor";
import logo from "@/assets/logo.png";

const pages = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: Info },
  { id: "contact", label: "Contact", icon: Phone },
  { id: "portfolio", label: "Portfolio", icon: Camera },
  { id: "services", label: "Services", icon: Briefcase },
];

type Tab = "content" | "images" | "seo";

const Admin = () => {
  const { signOut, user } = useAuth();
  const [activePage, setActivePage] = useState("home");
  const [activeTab, setActiveTab] = useState<Tab>("content");

  const tabs: { id: Tab; label: string; icon: typeof FileText }[] = [
    { id: "content", label: "Copy", icon: FileText },
    { id: "images", label: "Images", icon: Image },
    { id: "seo", label: "SEO", icon: Search },
  ];

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className="w-64 bg-navy flex flex-col flex-shrink-0">
        <div className="p-5 border-b border-gold/10">
          <img src={logo} alt="Elevation Landscapes" className="h-10" />
          <p className="text-secondary-foreground/40 text-xs mt-2 font-sans">Content Manager</p>
        </div>
        <nav className="flex-1 p-3 space-y-1">
          {pages.map((p) => (
            <button
              key={p.id}
              onClick={() => setActivePage(p.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-sans transition-colors ${
                activePage === p.id
                  ? "bg-gold/10 text-gold"
                  : "text-secondary-foreground/60 hover:text-secondary-foreground hover:bg-secondary-foreground/5"
              }`}
            >
              <p.icon className="h-4 w-4" />
              {p.label}
            </button>
          ))}
        </nav>
        <div className="p-4 border-t border-gold/10">
          <p className="text-secondary-foreground/40 text-xs truncate mb-3">{user?.email}</p>
          <Button
            variant="ghost"
            size="sm"
            onClick={signOut}
            className="w-full text-secondary-foreground/60 hover:text-gold hover:bg-gold/5 justify-start gap-2"
          >
            <LogOut className="h-4 w-4" /> Sign Out
          </Button>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 overflow-auto">
        <header className="sticky top-0 z-10 bg-background border-b border-border px-8 py-4 flex items-center justify-between">
          <div>
            <h1 className="font-serif text-2xl text-foreground capitalize">{activePage}</h1>
            <p className="text-muted-foreground text-sm">Edit content for the {activePage} page</p>
          </div>
          <div className="flex gap-1 bg-muted rounded-lg p-1">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-sans transition-colors ${
                  activeTab === t.id
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <t.icon className="h-4 w-4" />
                {t.label}
              </button>
            ))}
          </div>
        </header>

        <div className="p-8">
          {activeTab === "content" && <AdminContentEditor page={activePage} />}
          {activeTab === "images" && <AdminImageEditor page={activePage} />}
          {activeTab === "seo" && <AdminSEOEditor page={activePage} />}
        </div>
      </main>
    </div>
  );
};

export default Admin;
