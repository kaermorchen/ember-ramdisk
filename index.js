/* jshint node: true */
'use strict';

var fs = require('fs-extra');
var cp = require('child_process');

module.exports = {
  name: 'ember-ramdisk',

  preBuild: function () {
    var driveSize = '300M';
    var driveLetter = 'X:';
    var tempDir = driveLetter + '/tmp';
    var showImdiskOutput = false;

    cp.spawnSync('imdisk', ['-D', '-m', driveLetter]);

    var imdisk = cp.spawnSync('imdisk', ['-a', '-s', driveSize, '-m', driveLetter, '-p', '/fs:ntfs /q /y /v:ember-cli-ramdisk'], { encoding : 'utf8' });

    if (showImdiskOutput) {
      console.log('imdisk: \n' + imdisk.stdout);
    }

    fs.mkdirSync(tempDir);
    cp.execSync('rmdir tmp');
    fs.symlinkSync(tempDir, './tmp', 'dir');

    return this._super.preBuild.apply(this, arguments);
  },
};
