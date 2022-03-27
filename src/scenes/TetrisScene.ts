import Phaser from 'phaser';
import { createWorld, addEntity, addComponent } from 'bitecs';

export default class TetrisScene extends Phaser.Scene {
	private HUD;
	private rect;
	
	constructor() {
		super('tetris');
	}

	create() {
		this.HUD = this.add.rectangle(700, 300, 400, 1200, 0xd4e1f4);
	}

	update() {
		
	}
}