declare var angular: any;

module TestPassword.ListPasswords {
    'use strict'; 

    var pList = angular.module("TestPassword.ListPasswords", ["ui.router"]);

    class PasswordList {
        private list: any;
        private http: any;
    	constructor($http){
             this.http = $http;
             this.loadData();             
    	}

        public loadData(){
            this.http.get("list.json").success((data: any) => this.list = data.list);
        }

    	public removeItem(elem: string){
    		for(let i = 0, max = this.list.length; i < max; i++) {
    			
    			if (this.list[i].post == elem) {
    				this.list.splice(i, 1);
    				break;
    			}                

    		}
    		
    	}
    }

    pList.controller("passwordList", PasswordList);
}