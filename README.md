# loms-cli
LOMS Development CLI
![icon](https://raw.githubusercontent.com/SkyHarp/LegendOfMountainSea/master/LOMS.png)

## Installing

```
$ npm install loms-cli -g
```

Setting your project in current directory
```
$ loms init
```
- Windows might get `node-gyp rebuild` error, open Powershell as admin and run
```
$ npm install -g windows-build-tools
```
 

## Getting started LOMS

Navigating to **"./LOMS"** folder
```
$ cd ./LOMS
```
**Run game on web browser without NW.js Client**
```
$ loms run-dev
```
**Run game on Windows or macOS with NW.js Client**
```
$ loms run-client
```

## Getting started LOMS-Server

Navigating to **"./LOMS-Server"** folder
```
$ cd ./LOMS-Server
$ loms run-server
```

## Requirement
Node.js **version 9.2.0 or higher**

## License
GPL-2.0
