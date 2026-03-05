import { useState } from "react";
import { usePageImages } from "@/hooks/useContent";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { Upload, Trash2, Plus } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useQueryClient } from "@tanstack/react-query";

const AdminImageEditor = ({ page }: { page: string }) => {
  const { data: images, isLoading } = usePageImages(page);
  const qc = useQueryClient();
  const [uploading, setUploading] = useState(false);
  const [newSection, setNewSection] = useState("");
  const [newAlt, setNewAlt] = useState("");
  const [newFile, setNewFile] = useState<File | null>(null);

  const getPublicUrl = (path: string) => {
    const { data } = supabase.storage.from("site-assets").getPublicUrl(path);
    return data.publicUrl;
  };

  const handleUpload = async () => {
    if (!newFile || !newSection.trim()) {
      toast({ title: "Missing info", description: "Please select a file and enter a section name.", variant: "destructive" });
      return;
    }

    setUploading(true);
    const filePath = `${page}/${newSection.trim()}/${Date.now()}-${newFile.name}`;

    const { error: uploadError } = await supabase.storage.from("site-assets").upload(filePath, newFile);
    if (uploadError) {
      toast({ title: "Upload failed", description: uploadError.message, variant: "destructive" });
      setUploading(false);
      return;
    }

    const maxPos = images?.reduce((max, img) => Math.max(max, img.position), -1) ?? -1;

    const { error: dbError } = await supabase.from("site_images").insert({
      page,
      section: newSection.trim(),
      position: maxPos + 1,
      storage_path: filePath,
      alt_text: newAlt.trim(),
    });

    if (dbError) {
      toast({ title: "Error", description: "Image uploaded but metadata save failed.", variant: "destructive" });
    } else {
      toast({ title: "Image uploaded" });
      setNewFile(null);
      setNewSection("");
      setNewAlt("");
      qc.invalidateQueries({ queryKey: ["site-images"] });
    }
    setUploading(false);
  };

  const deleteImage = async (id: string, storagePath: string) => {
    await supabase.storage.from("site-assets").remove([storagePath]);
    const { error } = await supabase.from("site_images").delete().eq("id", id);
    if (error) {
      toast({ title: "Error", description: "Failed to delete image.", variant: "destructive" });
    } else {
      toast({ title: "Image deleted" });
      qc.invalidateQueries({ queryKey: ["site-images"] });
    }
  };

  const updateAlt = async (id: string, alt_text: string) => {
    const { error } = await supabase.from("site_images").update({ alt_text }).eq("id", id);
    if (error) {
      toast({ title: "Error", variant: "destructive" });
    } else {
      toast({ title: "Alt text updated" });
    }
  };

  if (isLoading) return <p className="text-muted-foreground">Loading images...</p>;

  // Group by section
  const sections = (images ?? []).reduce<Record<string, typeof images>>((acc, img) => {
    const s = img.section;
    (acc[s] = acc[s] || []).push(img);
    return acc;
  }, {});

  return (
    <div className="space-y-8 max-w-4xl">
      {Object.keys(sections).length === 0 && (
        <p className="text-muted-foreground">No images uploaded yet. Use the form below to add images.</p>
      )}

      {Object.entries(sections).map(([section, imgs]) => (
        <div key={section} className="border border-border rounded-lg p-6 space-y-4">
          <h3 className="font-serif text-lg text-foreground capitalize">{section}</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {imgs!.map((img) => (
              <div key={img.id} className="space-y-2">
                <div className="aspect-video rounded-lg overflow-hidden bg-muted">
                  <img
                    src={getPublicUrl(img.storage_path)}
                    alt={img.alt_text}
                    className="w-full h-full object-cover"
                  />
                </div>
                <Input
                  defaultValue={img.alt_text}
                  placeholder="Alt text"
                  className="text-xs"
                  onBlur={(e) => updateAlt(img.id, e.target.value)}
                />
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => deleteImage(img.id, img.storage_path)}
                  className="text-xs text-destructive hover:text-destructive w-full"
                >
                  <Trash2 className="h-3 w-3 mr-1" /> Remove
                </Button>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Upload */}
      <div className="border border-dashed border-border rounded-lg p-6 space-y-4">
        <h3 className="font-serif text-lg text-foreground flex items-center gap-2">
          <Plus className="h-5 w-5 text-gold" /> Upload Image
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Label className="text-sm text-muted-foreground">Section</Label>
            <Input
              value={newSection}
              onChange={(e) => setNewSection(e.target.value)}
              placeholder="e.g. hero, gallery"
              className="text-sm"
            />
          </div>
          <div>
            <Label className="text-sm text-muted-foreground">Alt Text</Label>
            <Input
              value={newAlt}
              onChange={(e) => setNewAlt(e.target.value)}
              placeholder="Describe the image"
              className="text-sm"
            />
          </div>
          <div>
            <Label className="text-sm text-muted-foreground">File</Label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setNewFile(e.target.files?.[0] ?? null)}
              className="block w-full text-sm text-muted-foreground file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-gold/10 file:text-gold hover:file:bg-gold/20"
            />
          </div>
        </div>
        <Button onClick={handleUpload} disabled={uploading} variant="outline" size="sm" className="gap-1">
          <Upload className="h-4 w-4" /> {uploading ? "Uploading..." : "Upload"}
        </Button>
      </div>
    </div>
  );
};

export default AdminImageEditor;
