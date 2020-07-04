const System = imports.system;
const Main = imports.ui.main;
const Shell = imports.gi.Shell;

let tray;

function enable() {
	tray = new Shell.TrayManager();
	tray.connect("tray-icon-added", () => {});
	tray.manage_screen(Main.panel);
}

function disable() {
	tray = null;
	System.gc();
}
