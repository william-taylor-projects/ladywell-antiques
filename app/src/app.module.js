
var app = window.app || (window.app = {});

app.AppModule = ng.core.NgModule({
    imports: [ ng.platformBrowser.BrowserModule ],
    declarations: [ app.AppComponent ],
    bootstrap: [ app.AppComponent ]
}).Class({
    constructor: function() {}
});