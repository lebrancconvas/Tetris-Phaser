import Phaser from 'phaser';

export default class BootingScene extends Phaser.Scene {
	private titlefont;

	constructor() {
		super('booting');
	}

	preload() {
		this.load.bitmapFont('fontwhite', './assets/font/RedHat_White.png', './assets/font/RedHat_White.xml');
		this.load.bitmapFont('fontblack', './assets/font/RedHat_Black.png', './assets/font/RedHat_Black.xml');
	}

	create() {
		this.titlefont = this.add.bitmapText(100, 300, 'fontwhite', 'Loading...', 50);
		this.scene.start('title');
	}

	update() {
		
	}
}