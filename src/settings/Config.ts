import Phaser from 'phaser';
import BootingScene from '../scenes/BootingScene';
import TitleScene from '../scenes/TitleScene';
import TetrisScene from '../scenes/TetrisScene';

export const Config: Phaser.Types.Core.GameConfig = {
	type: Phaser.AUTO,
	width: 800,
	height: 600,
	physics: {
		default: 'arcade',
		arcade: {
			debug: false
		}
	},
	scene: [BootingScene, TitleScene, TetrisScene]
}