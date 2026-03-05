import { useState, useEffect } from "react";
import { useContent, useUpsertContent } from "@/hooks/useContent";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { Save, Plus, Trash2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface ContentRow {
  id?: string;
  page: string;
  section: string;
  field: string;
  value: string;
}

const AdminContentEditor = ({ page }: { page: string }) => {
  const { data: rows, isLoading } = useContent(page);
  const upsert = useUpsertContent();
  const [editedRows, setEditedRows] = useState<ContentRow[]>([]);
  const [newSection, setNewSection] = useState("");
  const [newField, setNewField] = useState("");

  useEffect(() => {
    if (rows) setEditedRows(rows.map((r) => ({ ...r })));
  }, [rows]);

  const updateValue = (index: number, value: string) => {
    setEditedRows((prev) => prev.map((r, i) => (i === index ? { ...r, value } : r)));
  };

  const saveRow = async (row: ContentRow) => {
    try {
      await upsert.mutateAsync({ page: row.page, section: row.section, field: row.field, value: row.value });
      toast({ title: "Saved", description: `${row.section} → ${row.field} updated.` });
    } catch {
      toast({ title: "Error", description: "Failed to save. Please try again.", variant: "destructive" });
    }
  };

  const saveAll = async () => {
    try {
      for (const row of editedRows) {
        await upsert.mutateAsync({ page: row.page, section: row.section, field: row.field, value: row.value });
      }
      toast({ title: "All changes saved", description: `${editedRows.length} fields updated.` });
    } catch {
      toast({ title: "Error", description: "Some changes failed to save.", variant: "destructive" });
    }
  };

  const addField = async () => {
    if (!newSection.trim() || !newField.trim()) return;
    try {
      await upsert.mutateAsync({ page, section: newSection.trim(), field: newField.trim(), value: "" });
      setNewSection("");
      setNewField("");
      toast({ title: "Field added" });
    } catch {
      toast({ title: "Error", description: "Failed to add field.", variant: "destructive" });
    }
  };

  const deleteRow = async (row: ContentRow) => {
    if (!row.id) return;
    const { error } = await supabase.from("site_content").delete().eq("id", row.id);
    if (error) {
      toast({ title: "Error", description: "Failed to delete.", variant: "destructive" });
    } else {
      setEditedRows((prev) => prev.filter((r) => r.id !== row.id));
      toast({ title: "Deleted" });
    }
  };

  // Group by section
  const sections = editedRows.reduce<Record<string, ContentRow[]>>((acc, row) => {
    (acc[row.section] = acc[row.section] || []).push(row);
    return acc;
  }, {});

  if (isLoading) return <p className="text-muted-foreground">Loading content...</p>;

  return (
    <div className="space-y-8 max-w-3xl">
      {Object.keys(sections).length === 0 && (
        <p className="text-muted-foreground">No content entries yet. Add fields below to get started.</p>
      )}

      {Object.entries(sections).map(([section, fields]) => (
        <div key={section} className="border border-border rounded-lg p-6 space-y-4">
          <h3 className="font-serif text-lg text-foreground capitalize">{section}</h3>
          {fields.map((row, i) => {
            const globalIndex = editedRows.indexOf(row);
            const isLong = row.value.length > 100;
            return (
              <div key={row.id || `${row.section}-${row.field}`} className="space-y-1">
                <div className="flex items-center justify-between">
                  <Label className="text-sm text-muted-foreground capitalize">{row.field.replace(/_/g, " ")}</Label>
                  <div className="flex gap-1">
                    <Button size="sm" variant="ghost" onClick={() => saveRow(row)} className="h-7 px-2 text-xs">
                      <Save className="h-3 w-3 mr-1" /> Save
                    </Button>
                    <Button size="sm" variant="ghost" onClick={() => deleteRow(row)} className="h-7 px-2 text-xs text-destructive hover:text-destructive">
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
                {isLong ? (
                  <Textarea
                    value={row.value}
                    onChange={(e) => updateValue(globalIndex, e.target.value)}
                    rows={4}
                    className="text-sm"
                  />
                ) : (
                  <Input
                    value={row.value}
                    onChange={(e) => updateValue(globalIndex, e.target.value)}
                    className="text-sm"
                  />
                )}
              </div>
            );
          })}
        </div>
      ))}

      {/* Add new field */}
      <div className="border border-dashed border-border rounded-lg p-6 space-y-4">
        <h3 className="font-serif text-lg text-foreground">Add New Field</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label className="text-sm text-muted-foreground">Section</Label>
            <Input
              value={newSection}
              onChange={(e) => setNewSection(e.target.value)}
              placeholder="e.g. hero, intro, cta"
              className="text-sm"
            />
          </div>
          <div>
            <Label className="text-sm text-muted-foreground">Field</Label>
            <Input
              value={newField}
              onChange={(e) => setNewField(e.target.value)}
              placeholder="e.g. heading, body, tagline"
              className="text-sm"
            />
          </div>
        </div>
        <Button onClick={addField} variant="outline" size="sm" className="gap-1">
          <Plus className="h-4 w-4" /> Add Field
        </Button>
      </div>

      {editedRows.length > 0 && (
        <Button onClick={saveAll} className="bg-gold text-navy hover:bg-gold-light gap-2 uppercase tracking-wider font-semibold">
          <Save className="h-4 w-4" /> Save All Changes
        </Button>
      )}
    </div>
  );
};

export default AdminContentEditor;
