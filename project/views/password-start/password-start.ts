declare var angular: any;

module TestPassword.StartPage {
    'use strict'; 

    var startPageApp = angular.module("TestPassword.StartPage", ["ui.router"]);

    class StartPageApp {
    	constructor(){

    	}
    }

    startPageApp.controller("startPageApp", StartPageApp);
}