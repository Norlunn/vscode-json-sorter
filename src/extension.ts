import * as vscode from 'vscode';
import * as jsonSorter from './jsonSorter';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	const commands = [
		vscode.commands.registerCommand('json-sorter.randomize', jsonSorter.randomize)
	]

	commands.forEach(command => context.subscriptions.push(command));
}

// This method is called when your extension is deactivated
export function deactivate() {}
