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
import {
  RxFontBold,
  RxFontItalic,
  RxStrikethrough,
  RxCode,
  RxChevronDown,
  RxChatBubble,
} from "react-icons/rx";
import { BubbleButton } from "./BubbleButton";

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
        className="max-w-[700px] mx-auto pt-16 prose prose-invert prose-violet"
        editor={editor}
      />
      <FloatingMenu editor={editor}>This is the floating menu</FloatingMenu>
      {editor && (
        <BubbleMenu
          className="bg-zinc-700 shadow-xl border border-zinc-600 shadow-black/20 rounded-lg overflow-hidden flex divide-x divide-zinc-600"
          editor={editor}
        >
          <BubbleButton>
            Text
            <RxChevronDown className="w-4 h-4" />
          </BubbleButton>
          <BubbleButton>
            Comment
            <RxChatBubble className="w-4 h-4" />
          </BubbleButton>
          <div className="flex items-center">
            <BubbleButton>
              <RxFontBold className="w-4 h-4" />{" "}
            </BubbleButton>

            <BubbleButton>
              <RxFontItalic className="w-4 h-4" />{" "}
            </BubbleButton>

            <BubbleButton>
              <RxStrikethrough className="w-4 h-4" />{" "}
            </BubbleButton>

            <BubbleButton>
              <RxCode className="w-4 h-4" />
            </BubbleButton>
          </div>
        </BubbleMenu>
      )}
    </>
  );
}
