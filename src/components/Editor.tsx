import {
  useEditor,
  EditorContent,
  FloatingMenu,
  BubbleMenu,
} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import { initialContent } from "./initialContent";
import { createLowlight } from "lowlight";
import js from "highlight.js/lib/languages/javascript";
import "highlight.js/styles/obsidian.min.css";

const lowlight = createLowlight();

lowlight.register("js", js);

export function Editor() {
  const editor = useEditor({
    extensions: [
      StarterKit,
      CodeBlockLowlight.configure({
        lowlight,
      }),
    ],
    content: initialContent,
    editorProps: {
      attributes: {
        class: "outline-none",
      },
    },
  });

  return (
    <>
      <EditorContent
        className="max-w-[700px] mx-auto pt-16 prose prose-emerald"
        editor={editor}
      />
      <FloatingMenu editor={editor}>This is the floating menu</FloatingMenu>
      { editor && (
      <BubbleMenu className="" editor={editor}><button>Bold</button></BubbleMenu>
      )}
    </>
  );
}
