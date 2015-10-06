var exec = require("cordova/exec");

function NativeSettings() {
}

NativeSettings.prototype.open = function(onsucess, onfail, packageId) {
	exec(onsucess, onfail, "NativeSettings", "open", [packageId || "unknown"]);
};

NativeSettings.prototype.openSetting = function(settingName, onsucess, onfail, packageId) {
	exec(onsucess, onfail, "NativeSettings", settingName, [packageId || "unknown"]);
};

var NativeSettings = new NativeSettings();
module.exports = NativeSettings;
