angular.module('directoryApp', ['ngAnimate', 'ui.router'])
	.config(function($stateProvider, $urlRouterProvider){
		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: 'static/home.html',
				controller: 'directoryController as dirList'
			})
			.state('about', {
				url: '/about',
				templateUrl: 'static/about.html',
				controller: 'directoryController as dirList'
			});
	})
	.controller('directoryController', function(){

		var dirList = this;

		dirList.toggle = false;

		dirList.list = [
			{name: 'Sam', age: 30, img: 'sam-emerson.jpg'}, 
			{name: 'Star', age: 32, img: 'star-emerson.jpg'}, 
			{name:'Lydia', age: 75, img: 'lydia-deetz.jpg'}, 
			{name:'Truffle', age: 64, img: 'lawrence-cohen.jpg'}, 
			{name:'Molly', age: 28, img: 'claire-standish.jpg'}
		];
		dirList.addPerson = function(){
			dirList.list.push({name: dirList.name, age: dirList.age});
			dirList.name = '';
			dirList.age = 0; 		
		};
	

	});

