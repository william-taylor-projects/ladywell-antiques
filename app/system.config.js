
var map = {
    'build': 'build', 
    '@angular': 'node_modules/@angular',
    'rxjs': 'node_modules/rxjs'
};

// packages tells the System loader how to load when no filename and/or no extension
var packages = {
    'build': { main: 'app.boot.js', defaultExtension: 'js' },
    'rxjs': { defaultExtension: 'js' }
};

var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'forms',
    'http',
    'platform-browser',
    'platform-browser-dynamic',
    'router',
    'upgrade',
];

// Bundled (~40 requests):
function packUmd(pkgName) {
    packages['@angular/' + pkgName] = { main: '/bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
}

// Most environments should use UMD; some (Karma) need the individual index files
var setPackageConfig = packUmd;
ngPackageNames.forEach(setPackageConfig);
System.config({ map: map, packages: packages });