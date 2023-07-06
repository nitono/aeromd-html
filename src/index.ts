import { writeFileSync } from 'fs';
import { cwd } from 'process';
import { HTMLPageTemplate } from './templates/html_page.template';
import { MarkdownParser } from '@nitonodev/aeromd';
export class GenerateHTMLPage {
	constructor(public markdown: string) {}
	generateStyles = () => {
		writeFileSync(cwd() + '\\md-theme.css', "@import 'node_modules/@nitonodev/aeromd/lib/styles/md-theme.css'");
	};

	generateHTMLPage = () => {
		const parsedMarkdown = new MarkdownParser(this.markdown).parse();
		this.generateStyles();
		const HTMLPage = HTMLPageTemplate({
			parsedMarkdown: parsedMarkdown
		});
		writeFileSync(cwd() + '\\md.html', HTMLPage);
		return HTMLPage;
	};
}

