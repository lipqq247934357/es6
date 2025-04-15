import React, {
	useMemo,
	useCallback,
	forwardRef,
	useImperativeHandle,
} from "react";
import {
	Transforms,
	createEditor,
	Element as SlateElement,
	Text,
	Editor,
	Node,
	Descendant
} from "slate";
import {
	Slate,
	Editable,
	ReactEditor,
	withReact,
	RenderElementProps,
	RenderLeafProps,
	RenderPlaceholderProps
} from "slate-react";
import { withHistory } from 'slate-history';
import { css } from "@emotion/css";
import { ElementMap } from "./utils/const";
import { PlainTextElement, OptionElement, TailElement } from "./components";
import {
	CustomElement,
	PlainTextTemplateElement,
	OptionTemplateElement
} from "./custom-types";

import withTemplate from "./plugins/withTemplate";

export type { RenderPlaceholderProps };
export interface ExtendedRenderElementProps extends RenderElementProps {
	mode: "template" | "editor";
}
export interface PromptEditorProps {
	mode: "template" | "editor";
	placeholder?: string;
	CustomPlaceholder?: React.ComponentType<{ children: React.ReactNode }>;
	placeholderSlot: (props: RenderPlaceholderProps) => React.ReactNode;
	initialValue: Descendant[],
	onChange?: ()=>void;
}


// 定义组件的 ref 类型
export interface PromptEditorRef {
	insertPlainTextTemplate: (text: string) => void;
	getTextValue: () => void;
	insertOptionListTemplate: (text: string) => void;
	getValue: ()=>void;
	replaceContent: (content: Node | Node[]) => void;
	removeFirst: ()=>void;
	addNodes: (content: Node | Node[])=>void;
	addStart: (content: string)=>void;
	replaceEmptyParagraph: (content: string)=>void;
	replaceWCCommand: (newNumber: number)=>void;
	focus: ()=>void;
	addEnd: (content: string)=>void;
	updateTextNode: (featureStr: string, percent: number)=>void;
	clear: ()=>void;
	operate: ((editor: any) => void);
}
const PromptEditor = forwardRef<PromptEditorRef, PromptEditorProps>(
	(props, ref) => {
		const { mode, placeholder, placeholderSlot, initialValue } = props;
		useImperativeHandle(ref, () => ({
			getValue:()=>{
				if(editor) {
					return editor.children
				}
			},
			insertPlainTextTemplate: (templateText: string) => {
				if (editor) {
					const mention: PlainTextTemplateElement = {
						type: ElementMap.PLAINTEXT,
						template: templateText,
						content: "",
						children: [{ text: "" }],
					};
					Transforms.insertNodes(editor, mention);
					Transforms.move(editor);
					ReactEditor.focus(editor);
				}
			},
			getTextValue: () => {
				if(editor) {
					const tree = editor.children
					let text = '';
					tree.map(item => {
						if (SlateElement.isElement(item)) {
							const children = item.children
							text += children.map(node => {
								if(Text.isText(node)) {
									return node.text
								} else {
									return (node as CustomElement).content
								}
							}).join('')
						}
					})
					return text
				}
			},
			insertOptionListTemplate:(templateText: string) => {
				if (editor) {
					const mention: OptionTemplateElement = {
						type: ElementMap.OPTION,
						template: templateText,
						content: "",
						optionList: [],
						children: [{ text: "" }],
					};
					Transforms.insertNodes(editor, mention);
					Transforms.move(editor);
					ReactEditor.focus(editor);
				}
			},
			replaceContent(content: Node | Node[]) {
				this.clear();
				Transforms.removeNodes(editor, { at: [0] }); // 移除第一个paragraph
				Transforms.insertNodes(editor, content); // 添加后面的paragraph
			},
			// addContent(content: Node | Node[]) {
			// 	const newContent = [{ type: 'paragraph', children: [{ text: '要插入的内容' }] }];
			// 	// 1. 插入内容
			// 	Transforms.insertNodes(editor, newContent);
			// 	// 2. 选中插入的内容
			// 	const lastNode = editor.children[editor.children.length - 1];
			// 	const end = Editor.end(editor, []);
			// 	const path = end.path;
			// 	const range = { anchor: { path, offset: 0 }, focus: { path, offset: lastNode.text.length } };
			// 	Transforms.select(editor, range);
			// },
			// 插入内容
			addNodes(content: Node | Node[]) {
				Transforms.insertNodes(editor, content);
			},
			replaceEmptyParagraph(content: string) {
				const newContent = {
					"type": "paragraph",
					"children": [
						{
							"text": content
						},
					]
				};
				// 删除头一个空节点，否则内容会换行
				Transforms.removeNodes(editor, { at: [0] });
				if(newContent) {
					Transforms.insertNodes(editor, newContent, { at: [0] });
				}
			},
			// 给开头增加一段内容
			addStart(content: string) {
				const newContent = {
					"type": "paragraph",
					"children": [
						{
							"text": content
						},
					]
				};
				// 插入新节点到编辑器的开头
				Transforms.insertNodes(editor, newContent, { at: [0] });
				// const firstPath = [0, 0];  // 第一个段落的第一个位置
				// console.log();
				// Transforms.insertText(editor, content + editor.children[0].children[0].text, { at: firstPath });
			},
			addEnd(content: string) {
				// 给开头增加一段内容
				const newContent = {
					"type": "paragraph",
					"children": [
						{
							"text": content
						},
					]
				};
				// 插入新节点到编辑器的开头
				Transforms.insertNodes(editor, newContent, { at: [editor.children.length] });
			},
			// 匹配并替换 -cw 后的数字
			replaceWCCommand (newNumber: number) {
				// 遍历文本节点
				const [match] = Editor.nodes(editor, {
				match: n => Text.isText(n), // 查找文本节点
				at: [],
				});
			
				if (match) {
					const [node, path] = match;
				
					// 使用正则表达式匹配 -wc 后跟空格和数字的字符串
					const regex = /-wc \d+/g;
					const text = node.text;
					const newText = text.replace(regex, `-wc ${newNumber}`);
				
					// 如果匹配到，则更新节点中的文本内容
					if (text !== newText) {
						Transforms.delete(editor, { at: path })
						Transforms.insertText(editor, newText, { at: path })
					}
				}
				ReactEditor.focus(editor);
			},
			focus() {
				ReactEditor.focus(editor);
			},
			removeFirst() {
				Transforms.removeNodes(editor, { at: [0] });
			},
			// 查找并更新文本节点的函数
			updateTextNode(featureStr: string, percent: number) {
				// 定义正则表达式模式，匹配 '--cref oldFeatureStr --wc 100' 格式
				const pattern = /--cref (.+?) --cw \d{1,3}/;
				let flag = false;
				  // 保存当前的光标位置
				const originalSelection = editor.selection;
				// 遍历文档中的所有节点
				for (const [node, path] of Node.texts(editor)) {
					const { text } = node;
					console.log(text);
					// 检查节点文本是否包含符合正则表达式的部分
					if (pattern.test(text)) {
						// 使用 replace 方法进行替换
						const newText = text.replace(pattern, (_, oldFeatureStr) => {
							// 创建新的字符串
							const newFeatureStr = `${oldFeatureStr} ${featureStr}`;
							// 返回新格式的字符串
							return `--cref ${newFeatureStr} --cw ${percent}`;
						});
			
						// 删除旧文本
						Transforms.delete(editor, {
							at: {
								anchor: { path, offset: 0 },
								focus: { path, offset: text.length }
							}
						});
			
						// 插入新文本
						Transforms.insertText(editor, newText, {
							at: {
								path,
								offset: 0
							}
						});
						flag = true;
						return true;
					}
				}
				// 恢复光标位置
				if (flag && originalSelection) {
					Transforms.select(editor, originalSelection);
				}
				return flag;
			},
			// 删除文档中的所有内容
			clear() {
				Transforms.delete(editor, {
					at: {
						anchor: Editor.start(editor, []),
						focus: Editor.end(editor, []),
					},
				});
			},
			operate(func) {
				func(editor, Transforms, Editor);
			}
		}));
		const renderElement = useCallback(
			(props: RenderElementProps) => <Element {...props} mode={mode} />,
			[mode]
		);
		const renderLeaf = useCallback(
			(props: RenderLeafProps) => <Leaf {...props} />,
			[]
		);
		const editor = useMemo(
			() => withTemplate(withHistory(withReact(createEditor()))) as ReactEditor,
			[]
		);

		return (
			<Slate editor={editor} initialValue={initialValue} onChange={() => props.onChange && props.onChange()}>
				<Editable
					renderElement={renderElement}
					renderLeaf={renderLeaf}
					style={{
						width: "100%",
						height: "100%",
						border: "none",
						fontSize: "14px",
						textAlign: "left",
						outline: "none",
						lineHeight: "28px",
						// color: "#000000",
					}}
					placeholder={placeholder || " "}
					renderPlaceholder={(props:RenderPlaceholderProps) => placeholderSlot(props) as JSX.Element}
				/>
			</Slate>
		);
	}
);

const Leaf = ({ attributes, children }: RenderLeafProps) => {
	return <span {...attributes}>{children}</span>;
};

const Element = (props: ExtendedRenderElementProps) => {
	const { attributes, children, element } = props;
	switch ((element as unknown as CustomElement).type) {
		case ElementMap.TAIL:
			return (
				<TailElement
					{...props}
				/>
			);
		case ElementMap.PLAINTEXT:
			return (
				<PlainTextElement
					{...props}
					element={props.element as PlainTextTemplateElement}
				/>
			);
		case ElementMap.OPTION:
			return (
				<OptionElement
					{...props}
					element={props.element as OptionTemplateElement}
				/>
			);
		default:
			return (
				<div
					className={css`
						display: contents;
					`}
					{...attributes}
				>
					{children}
				</div>
			);
	}
};

export const emptyValue = [
	{
		type: "paragraph",
		children: [{ text: "" }],
	},
];

export default PromptEditor;
