import Phaser from 'phaser';

export default class BootingScene extends Phaser.Scene {
	private titlefont;

	constructor() {
		super('booting');
	}

	preload() {
		this.load.bitmapFont('font', './assets/font/RedHat_White.png', './assets/font/RedHat_White.xml');
	}

	create() {
		this.titlefont = this.add.bitmapText(100, 300, 'font', 'Loading...', 50);
		this.scene.start('title');
	}

	update() {
		
	}
}