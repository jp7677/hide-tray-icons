const Main				= imports.ui.main;
const Shell				= imports.gi.Shell;
const Me				= imports.misc.extensionUtils.getCurrentExtension();
const System			= imports.system;

var HideTrayIconsClass = new imports.lang.Class({
	Name: 'Hide Tray Icons',

	_init() {
		this.tray       = new Shell.TrayManager();
		this.tray.connect('tray-icon-added', () => {});
		this.tray.manage_screen(Main.panel);
	},

	_destroy() {
		this.tray = null;
		System.gc();
	}
});

let TrayIcons;

class Extension {
    enable() {
		TrayIcons = new HideTrayIconsClass();
    }

    disable() {
		TrayIcons._destroy();
	}
}

function init() {
    return new Extension();
}