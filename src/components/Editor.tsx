import {
  useEditor,
  EditorContent,
  FloatingMenu,
  BubbleMenu,
} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { initialContent } from "./initialContent";
export interface EditorProps {}

export function Editor() {
  const extensions = [StarterKit];

  const content = initialContent;

  const editor = useEditor({
    extensions,
    content,
  });

  return (
    <>
      <EditorContent
        className="max-w-[700px] mx-auto pt-16 prose prose-emerald"
        editor={editor}
      />
      <FloatingMenu editor={editor}>This is the floating menu</FloatingMenu>
      <BubbleMenu editor={editor}>This is the bubble menu</BubbleMenu>
    </>
  );
}
