import * as vscode from "vscode";

export class MiniPlayer{
    constructor(private context: vscode.ExtensionContext) {
        
    // register a command that is invoked when the status bar item is clicked.
	const currSongClick = 'spotifyplayer.currSongClick';
	const prevSongClick = 'spotifyplayer.prevSongClick';
	const pauseSongClick = 'spotifyplayer.pauseSongClick';
	const nextSongClick = 'spotifyplayer.nextSongClick';

    context.subscriptions.push(vscode.commands.registerCommand(currSongClick, async () => {
        console.log('clickety click');
    }));
	context.subscriptions.push(vscode.commands.registerCommand(prevSongClick, async () => {
        this.prevSong();
    }));
	context.subscriptions.push(vscode.commands.registerCommand(pauseSongClick, async () => {
        this.pauseSong();
    }));
	context.subscriptions.push(vscode.commands.registerCommand(nextSongClick, async () => {
        this.nextSong();
    }));
	
	const currSongItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 100000);
	currSongItem.text = `<Current Song> - <Current Artist>`;
	currSongItem.tooltip = "Hello Spotify!";
	currSongItem.command = currSongClick;

	// TODO: icons https://code.visualstudio.com/api/references/icons-in-labels 
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
    }

    private pauseSong() {
        console.log('song paused');
    }

    private nextSong() {
        console.log('next song');
    }

    private prevSong() {
        console.log('prev song');
    }
}
