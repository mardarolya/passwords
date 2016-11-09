declare var angular: any;

module TestPassword.EditPasswords {
    'use strict'; 

    var pList = angular.module("TestPassword.EditPasswords", ["ui.router"]);

    class PasswordEdit {
    	private id: number;
    	private name: string;
    	private description: string;
    	private password: string;    
    	private list: any;    
    	private http: any;
    	constructor($stateParams, $http){
            this.id = $stateParams.passwordId;
			this.http = $http;
            this.http.get("list.json").success((data: any) => this.findRecord(data.list));            	

    	}

    	public findRecord(data: any) {
    		 this.list = data;
    		 for(let i = 0, max = this.list.length; i < max; i++) {
    			if (this.list[i].id == this.id) {
    				this.name = this.list[i].post;
    				this.description = this.list[i].description;
    				this.password = this.list[i].password;
    				break;
    			}
    		}
    	}

        public saveRecord() {
            var data = {id: this.id, post: this.name, description: this.description, password: this.password}
            alert("There are must be PUT!");
        }
    	
    }

    pList.controller("passwordEdit", PasswordEdit);
}