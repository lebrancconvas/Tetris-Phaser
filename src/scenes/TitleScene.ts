import Phaser from 'phaser';

export default class TitleScene extends Phaser.Scene {
	private titletext;
	private entergameKey;
	constructor() {
		super('title');
	}

	create() {
		this.titletext = this.add.bitmapText(67.5, 210, 'font', 'Tetris: Phaser Edition\nPressed ENTER to Start', 50, 1);
		this.entergameKey = this.input.keyboard.addKey('ENTER');

	}
	
	update() {
		if(this.entergameKey.isDown) {
			this.scene.start('tetris');
		}
	}
}