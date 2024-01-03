/**
 * @license Copyright (c) 2014-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import { ClassicEditor } from "@ckeditor/ckeditor5-editor-classic";
import { Alignment } from "@ckeditor/ckeditor5-alignment";
import { Autoformat } from "@ckeditor/ckeditor5-autoformat";
import {
	Bold,
	Italic,
	Subscript,
	Superscript,
	Underline,
} from "@ckeditor/ckeditor5-basic-styles";
import { BlockQuote } from "@ckeditor/ckeditor5-block-quote";
import { Essentials } from "@ckeditor/ckeditor5-essentials";
import { Font } from "@ckeditor/ckeditor5-font";
import { GeneralHtmlSupport } from "@ckeditor/ckeditor5-html-support";
import { Heading } from "@ckeditor/ckeditor5-heading";
import { Highlight } from "@ckeditor/ckeditor5-highlight";
import { HorizontalLine } from "@ckeditor/ckeditor5-horizontal-line";
import {
	AutoImage,
	Image,
	ImageCaption,
	ImageInsert,
	ImageResize,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
} from "@ckeditor/ckeditor5-image";
import { Indent, IndentBlock } from "@ckeditor/ckeditor5-indent";
import { AutoLink, Link, LinkImage } from "@ckeditor/ckeditor5-link";
import { DocumentList, DocumentListProperties } from "@ckeditor/ckeditor5-list";
import { MediaEmbed } from "@ckeditor/ckeditor5-media-embed";
import { Paragraph } from "@ckeditor/ckeditor5-paragraph";
import { PasteFromOffice } from "@ckeditor/ckeditor5-paste-from-office";
import { SourceEditing } from "@ckeditor/ckeditor5-source-editing";
import { Style } from "@ckeditor/ckeditor5-style";
import {
	Table,
	TableCaption,
	TableCellProperties,
	TableColumnResize,
	TableProperties,
	TableToolbar,
} from "@ckeditor/ckeditor5-table";
import { TextTransformation } from "@ckeditor/ckeditor5-typing";

class Editor extends ClassicEditor {}

// Plugins to include in the build.
Editor.builtinPlugins = [
	Alignment,
	AutoImage,
	Autoformat,
	AutoLink,
	BlockQuote,
	Bold,
	Essentials,
	Font,
	GeneralHtmlSupport,
	Heading,
	Highlight,
	HorizontalLine,
	Image,
	ImageCaption,
	ImageInsert,
	ImageResize,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	Indent,
	Italic,
	Link,
	LinkImage,
	DocumentList,
	DocumentListProperties,
	MediaEmbed,
	Paragraph,
	PasteFromOffice,
	SourceEditing,
	Style,
	Subscript,
	Superscript,
	Table,
	TableToolbar,
	TableCaption,
	TableCellProperties,
	TableColumnResize,
	TableProperties,
	TextTransformation,
	Underline,
];

// Editor configuration.
Editor.defaultConfig = {
	toolbar: {
		items: [
			"heading",
			"|",
			"fontSize",
			"fontColor",
			"fontBackgroundColor",
			"|",
			"bold",
			"italic",
			"underline",
			{
				label: "Formatting",
				icon: "text",
				items: [
					"strikethrough",
					"subscript",
					"superscript",
					"code",
					"horizontalLine",
					"|",
					"removeFormat",
				],
			},
			"link",
			"bulletedList",
			"numberedList",
			"|",
			"alignment",
			"outdent",
			"indent",
			"|",
			{
				label: "Insert",
				icon: "plus",
				items: ["highlight", "blockQuote", "mediaEmbed", "codeBlock"],
			},
			"insertTable",
			"imageInsert",
			"|",
			"undo",
			"redo",
		],
		shouldNotGroupWhenFull: true,
	},
	language: "en",
	image: {
		toolbar: [
			"imageTextAlternative",
			"toggleImageCaption",
			"imageStyle:inline",
			"imageStyle:block",
			"imageStyle:side",
			"linkImage",
		],
	},
	list: {
		properties: {
			styles: true,
			startIndex: true,
			reversed: true,
		},
	},
	table: {
		contentToolbar: [
			"tableColumn",
			"tableRow",
			"mergeTableCells",
			"tableProperties",
			"tableCellProperties",
			"toggleTableCaption",
		],
	},
	style: {
		definitions: [
			{
				name: "Article category",
				element: "h3",
				classes: ["category"],
			},
			{
				name: "Title",
				element: "h2",
				classes: ["document-title"],
			},
			{
				name: "Subtitle",
				element: "h3",
				classes: ["document-subtitle"],
			},
			{
				name: "Info box",
				element: "p",
				classes: ["info-box"],
			},
			{
				name: "Side quote",
				element: "blockquote",
				classes: ["side-quote"],
			},
			{
				name: "Marker",
				element: "span",
				classes: ["marker"],
			},
			{
				name: "Spoiler",
				element: "span",
				classes: ["spoiler"],
			},
			{
				name: "Code (dark)",
				element: "pre",
				classes: ["fancy-code", "fancy-code-dark"],
			},
			{
				name: "Code (bright)",
				element: "pre",
				classes: ["fancy-code", "fancy-code-bright"],
			},
		],
	},
};

export default Editor;
