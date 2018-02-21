#!/usr/bin/env node
const exec = require('child_process').exec;

const program = require('commander');
const download = require('download');
const path = require('path');
const Spinner = require('cli-spinner').Spinner;

program
	.version('1.0.1')
	.description('LOMS Development CLI');

program
	.command('init')
	.description('Setup project.')
	.action(function () {
		const downloadingStr = new Spinner('download nwjs client to local %s');
		downloadingStr.setSpinnerString(18);
		downloadingStr.start();
		
		let downloadURL = null;
		
		if(/^win/.test(process.platform)){
			downloadURL = 'https://dl.nwjs.io/v0.27.0/nwjs-v0.27.0-win-x64.zip';
		}else {
			downloadURL = 'https://dl.nwjs.io/v0.27.0/nwjs-v0.27.0-osx-x64.zip';
		}
		
		download(downloadURL, path.join(process.cwd(), 'LOMS'),{ extract: true, headers: { accept: 'application/zip' } } ).then(() => {
			downloadingStr.stop();
			console.log(' download finished!');
			
			const initloadingStr = new Spinner('install project %s');
			initloadingStr.setSpinnerString(18);
			initloadingStr.start();
			
			exec('cd ./LOMS && npm i && cd ../LOMS-Server && npm i', function(error, npmInitLog, npmError) {
				initloadingStr.stop();
				console.log('install finished!');
				
				console.log(npmInitLog, npmError);
				
				console.log('Project is ready for development!');
				
				if (error !== null) {
					console.log('exec error: ' + error);
				}
			});
		}).catch(error => {
			console.log('download error: ' + error);
		});
	});

program
	.command('run-dev')
	.description('debug game with web.')
	.action(function () {
		exec('npm run dev', function(error, npmInitLog, npmError) {
			
			console.log(npmInitLog, npmError);
			
			if (error !== null) {
				console.log('exec error: ' + error);
			}
		});
	});

program
	.command('run-client')
	.description('debug game with nwjs client.')
	.action(function () {
		let platform = null;
		
		if(/^win/.test(process.platform)){
			platform = 'win';
		}else {
			platform = 'mac';
		}
		
		exec('npm run start-'+ platform, function(error, npmInitLog, npmError) {
			
			console.log(npmInitLog, npmError);
			
			if (error !== null) {
				console.log('exec error: ' + error);
			}
		});
	});

program
	.command('run-server')
	.description('debug game server.')
	.action(function () {
		exec('npm run server', function(error, npmInitLog, npmError) {
			
			console.log(npmInitLog, npmError);
			
			if (error !== null) {
				console.log('exec error: ' + error);
			}
		});
	});

program.parse(process.argv);
