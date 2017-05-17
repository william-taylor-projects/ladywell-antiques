
var map = {
    'build': 'build', 
    '@angular': 'node_modules/@angular',
    'rxjs': 'node_modules/rxjs'
};

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

function packUmd(pkgName) {
    packages['@angular/' + pkgName] = { main: '/bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
}

var setPackageConfig = packUmd;
ngPackageNames.forEach(setPackageConfig);
System.config({ map: map, packages: packages });
System.import("build/app.boot").catch(function(err) {
    console.error(err);
});