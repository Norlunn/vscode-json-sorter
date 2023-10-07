import * as vscode from 'vscode';

export function randomize() {
  const textEditor = vscode.window.activeTextEditor
  if (!textEditor) {
    return undefined
  }

  let list: object = {}
  try {
    list = JSON.parse(textEditor.document.getText())
  } catch {
    vscode.window.showErrorMessage("The current file does not contain valid JSON")
  }

  if (!Array.isArray(list)) {
    vscode.window.showErrorMessage("The current file does not contain only a JSON list")
    return undefined
  }

  let currentIndex = list.length, randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [list[currentIndex], list[randomIndex]] = [list[randomIndex], list[currentIndex]];
  }

  let startLine = 0
  let endLine = textEditor.document.lineCount - 1
  
  textEditor.edit(builder => {
    const range = new vscode.Range(startLine, 0, endLine, textEditor.document.lineAt(endLine).text.length);
    builder.replace(range, JSON.stringify(list, undefined, 2));
  });
}