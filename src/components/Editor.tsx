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
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import * as Popover from "@radix-ui/react-popover";
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
      {editor && (
        <FloatingMenu
          editor={editor}
          className="bg-zinc-700 py-2 px-1 shadow-xl border gap-1 border-zinc-600 shadow-black/20 rounded-lg overflow-hidden flex flex-col divide-x divide-zinc-600"
          shouldShow={({ state }) => {
            const { $from } = state.selection;
            const currentLineText = $from.nodeBefore?.textContent;
            return currentLineText === "/";
          }}
        >
          <button className="flex items-center gap-2 p-1 rounded min-w-[200px] hover:bg-zinc-600">
            <img
              src="http://www.notion.so/images/blocks/text/en-US.png"
              alt="Text"
              className="w-12 bnorder border-zinc-600 rounded "
            />
            <div className="flex flex-col text-left">
              <span className="text-sm">Text</span>
              <span className="text-xm text-zinc-400">
                Just start writing with plain text.
              </span>
            </div>
          </button>

          <button
            className="flex items-center gap-2 p-1 rounded min-w-[200px] hover:bg-zinc-600"
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 1 }).run()
            }
          >
            <img
              src="http://www.notion.so/images/blocks/header.57a7576a.png"
              alt="Heading"
              className="w-12 bnorder border-zinc-600 rounded "
            />
            <div className="flex flex-col text-left">
              <span className="text-sm">Heading 1</span>
              <span className="text-xm text-zinc-400">Big section heading.</span>
            </div>
          </button>
        </FloatingMenu>
      )}
      {editor && (
        <BubbleMenu
          className="bg-zinc-700 shadow-xl border border-zinc-600 shadow-black/20 rounded-lg overflow-hidden flex divide-x divide-zinc-600"
          editor={editor}
        >
          <BubbleButton>
            <Popover.Root>
              <Popover.Trigger className="flex items-center gap-1">
                Text
                <RxChevronDown className="w-4 h-4" />
              </Popover.Trigger>
              <Popover.Portal>
                <Popover.Content className="bg-zinc-200 shadow-xl border border-zinc-600 shadow-black/20 rounded-lg overflow-hidden flex divide-x divide-zinc-600 p-2">
                  Some more info…
                  <Popover.Arrow className="fill-current text-zinc-200" />
                </Popover.Content>
              </Popover.Portal>
            </Popover.Root>
          </BubbleButton>
          <BubbleButton>
            <RxChatBubble className="w-4 h-4" />
            Comment
          </BubbleButton>
          <ToggleGroup.Root
            type="multiple"
            className="flex items-center space-x-1"
          >
            <ToggleGroup.Item
              value="bold"
              onClick={() => editor.chain().focus().toggleBold().run()}
              className={`${
                editor.isActive("bold") ? "bg-zinc-600" : ""
              } p-1 rounded`}
            >
              <RxFontBold className="w-4 h-4" />
            </ToggleGroup.Item>
            <ToggleGroup.Item
              value="italic"
              onClick={() => editor.chain().focus().toggleItalic().run()}
              className={`${
                editor.isActive("italic") ? "bg-zinc-600" : ""
              } p-1 rounded`}
            >
              <RxFontItalic className="w-4 h-4" />
            </ToggleGroup.Item>
            <ToggleGroup.Item
              value="strike"
              onClick={() => editor.chain().focus().toggleStrike().run()}
              className={`${
                editor.isActive("strike") ? "bg-zinc-600" : ""
              } p-1 rounded`}
            >
              <RxStrikethrough className="w-4 h-4" />
            </ToggleGroup.Item>
            <ToggleGroup.Item
              value="code"
              onClick={() => editor.chain().focus().toggleCode().run()}
              className={`${
                editor.isActive("code") ? "bg-zinc-600" : ""
              } p-1 rounded`}
            >
              <RxCode className="w-4 h-4" />
            </ToggleGroup.Item>
          </ToggleGroup.Root>
        </BubbleMenu>
      )}
    </>
  );
}
