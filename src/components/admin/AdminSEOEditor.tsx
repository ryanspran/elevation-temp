import { useState, useEffect } from "react";
import { usePageSEO, useUpsertSEO } from "@/hooks/useContent";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { Save, Globe } from "lucide-react";

const AdminSEOEditor = ({ page }: { page: string }) => {
  const { data: seo, isLoading } = usePageSEO(page);
  const upsert = useUpsertSEO();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ogTitle, setOgTitle] = useState("");
  const [ogDescription, setOgDescription] = useState("");
  const [ogImage, setOgImage] = useState("");

  useEffect(() => {
    if (seo) {
      setTitle(seo.title ?? "");
      setDescription(seo.description ?? "");
      setOgTitle(seo.og_title ?? "");
      setOgDescription(seo.og_description ?? "");
      setOgImage(seo.og_image_path ?? "");
    }
  }, [seo]);

  const handleSave = async () => {
    try {
      await upsert.mutateAsync({
        page,
        title,
        description,
        og_title: ogTitle,
        og_description: ogDescription,
        og_image_path: ogImage,
      });
      toast({ title: "SEO saved", description: `SEO metadata for "${page}" updated.` });
    } catch {
      toast({ title: "Error", description: "Failed to save SEO data.", variant: "destructive" });
    }
  };

  if (isLoading) return <p className="text-muted-foreground">Loading SEO data...</p>;

  const CharCounter = ({ value, target }: { value: string; target: number }) => {
    const len = value.length;
    const color = len > target ? "text-destructive" : len > target * 0.8 ? "text-gold" : "text-muted-foreground";
    return <span className={`text-xs ${color}`}>{len}/{target}</span>;
  };

  return (
    <div className="space-y-8 max-w-3xl">
      {/* Meta */}
      <div className="border border-border rounded-lg p-6 space-y-4">
        <h3 className="font-serif text-lg text-foreground flex items-center gap-2">
          <Globe className="h-5 w-5 text-gold" /> Meta Tags
        </h3>
        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <Label className="text-sm text-muted-foreground">Page Title</Label>
            <CharCounter value={title} target={60} />
          </div>
          <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Page title for search engines" className="text-sm" />
        </div>
        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <Label className="text-sm text-muted-foreground">Meta Description</Label>
            <CharCounter value={description} target={160} />
          </div>
          <Textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description for search results" rows={3} className="text-sm" />
        </div>
      </div>

      {/* SERP Preview */}
      <div className="border border-border rounded-lg p-6 space-y-3">
        <h3 className="font-serif text-lg text-foreground">Google Preview</h3>
        <div className="bg-popover rounded-lg p-4 border border-border">
          <p className="text-primary text-lg truncate">{title || "Page Title"}</p>
          <p className="text-muted-foreground text-sm">elevationlandscapes.com/{page === "home" ? "" : page}</p>
          <p className="text-foreground/60 text-sm line-clamp-2">{description || "Add a meta description to see how this page will appear in search results."}</p>
        </div>
      </div>

      {/* OG */}
      <div className="border border-border rounded-lg p-6 space-y-4">
        <h3 className="font-serif text-lg text-foreground">Social Sharing (Open Graph)</h3>
        <div className="space-y-1">
          <Label className="text-sm text-muted-foreground">OG Title</Label>
          <Input value={ogTitle} onChange={(e) => setOgTitle(e.target.value)} placeholder="Title for social shares (defaults to page title)" className="text-sm" />
        </div>
        <div className="space-y-1">
          <Label className="text-sm text-muted-foreground">OG Description</Label>
          <Textarea value={ogDescription} onChange={(e) => setOgDescription(e.target.value)} placeholder="Description for social shares" rows={2} className="text-sm" />
        </div>
        <div className="space-y-1">
          <Label className="text-sm text-muted-foreground">OG Image Path</Label>
          <Input value={ogImage} onChange={(e) => setOgImage(e.target.value)} placeholder="Path to social sharing image" className="text-sm" />
        </div>
      </div>

      <Button onClick={handleSave} disabled={upsert.isPending} className="bg-gold text-navy hover:bg-gold-hover hover:scale-105 hover:shadow-lg gap-2 uppercase tracking-wider font-semibold">
        <Save className="h-4 w-4" /> Save SEO Settings
      </Button>
    </div>
  );
};

export default AdminSEOEditor;
