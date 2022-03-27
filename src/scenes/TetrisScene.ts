import Phaser from 'phaser';
import { createWorld, addEntity, addComponent } from 'bitecs';

export default class TetrisScene extends Phaser.Scene {
	private HUDtextlevel;
	private HUDtextnext;
	private HUDtextscore;
	private level;
	private score;
	private rect;
	
	constructor() {
		super('tetris');
	}

	create() {
		this.score = 0;

		this.add.rectangle(700, 300, 400, 1200, 0xd4e1f4);
		this.add.bitmapText(570, 30, 'fontblack', 'Level', 20);
		this.HUDtextlevel = this.add.bitmapText(610, 70, 'fontblack', '1-1', 20);
		this.add.bitmapText(570, 160, 'fontblack', 'Next', 20);
		this.HUDtextnext = this.add.bitmapText(610, 250, 'fontblack', 'Next', 20);
		this.add.bitmapText(570, 370, 'fontblack', 'Score', 20);
		this.HUDtextscore = this.add.bitmapText(610, 410, 'fontblack', `${this.score}`, 20);

	}

	update() {
		
	}
}