import { Extension } from 'resource:///org/gnome/shell/extensions/extension.js';
import Shell from "gi://Shell";
import * as Main from "resource:///org/gnome/shell/ui/main.js";
import System from 'system';

let tray;

export default class HideTrayiconsExtension extends Extension {
	enable() {
		tray = new Shell.TrayManager();
		tray.connect("tray-icon-added", () => {});
		tray.manage_screen(Main.panel);
	}

	disable() {
		tray = null;
		System.gc();
	}
}
