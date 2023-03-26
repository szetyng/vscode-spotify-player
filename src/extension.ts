// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "spotifyplayer" is now active!');


	// register a command that is invoked when the status bar
    // item is clicked.
	const currSongClick = 'spotifyplayer.currSongClick';
	const prevSongClick = 'spotifyplayer.prevSongClick';
	const pauseSongClick = 'spotifyplayer.pauseSongClick';
	const nextSongClick = 'spotifyplayer.nextSongClick';

    context.subscriptions.push(vscode.commands.registerCommand(currSongClick, async () => {
        console.log('clickety click');
    }));
	context.subscriptions.push(vscode.commands.registerCommand(prevSongClick, async () => {
        console.log('clickety click prev');
    }));
	context.subscriptions.push(vscode.commands.registerCommand(pauseSongClick, async () => {
        console.log('clickety click');
    }));
	context.subscriptions.push(vscode.commands.registerCommand(nextSongClick, async () => {
        console.log('clickety click');
    }));
	
	const currSongItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 100000);
	currSongItem.text = `<Current Song> - <Current Artist>`;
	currSongItem.tooltip = "Hello Spotify!";
	currSongItem.command = currSongClick;

	const prevSongItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 50000);
	prevSongItem.text = `prev`;
	prevSongItem.tooltip = "Hello Spotify prev!";
	prevSongItem.command = prevSongClick;

	const pauseSongItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 40000);
	pauseSongItem.text = `pause`;
	pauseSongItem.tooltip = "Hello Spotify pause!";
	pauseSongItem.command = pauseSongClick;

	const nextSongItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 40000);
	nextSongItem.text = `next`;
	nextSongItem.tooltip = "Hello Spotify next!";
	nextSongItem.command = nextSongClick;

	context.subscriptions.push(currSongItem);
	currSongItem.show();
	context.subscriptions.push(prevSongItem);
	prevSongItem.show();
	context.subscriptions.push(pauseSongItem);
	pauseSongItem.show();
	context.subscriptions.push(nextSongItem);
	nextSongItem.show();

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	context.subscriptions.push(vscode.commands.registerCommand('spotifyplayer.creepyHello', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('Hello, you from SpotifyPlayer.');
	}));
}


// This method is called when your extension is deactivated
export function deactivate() {}
