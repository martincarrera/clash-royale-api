# [Clash Royale API](http://www.clashapi.xyz/) 
[![Codeship Status for martincarrera/clash-royale-api](https://codeship.com/projects/4f412dd0-0006-0134-4d8c-1e95689fe79f/status?branch=master)](https://codeship.com/projects/153028) [![Coverage Status](https://coveralls.io/repos/github/martincarrera/clash-royale-api/badge.svg?branch=master)](https://coveralls.io/github/martincarrera/clash-royale-api?branch=master) [![bitHound Overall Score](https://www.bithound.io/github/martincarrera/clash-royale-api/badges/score.svg)](https://www.bithound.io/github/martincarrera/clash-royale-api) [![bitHound Dependencies](https://www.bithound.io/github/martincarrera/clash-royale-api/badges/dependencies.svg)](https://www.bithound.io/github/martincarrera/clash-royale-api/master/dependencies/npm) [![bitHound Dev Dependencies](https://www.bithound.io/github/martincarrera/clash-royale-api/badges/devDependencies.svg)](https://www.bithound.io/github/martincarrera/clash-royale-api/master/dependencies/npm) [![bitHound Code](https://www.bithound.io/github/martincarrera/clash-royale-api/badges/code.svg)](https://www.bithound.io/github/martincarrera/clash-royale-api)
<span class="badge-patreon"><a href="http://patreon.com/martincarrera" title="Donate to this project using Patreon"><img src="https://img.shields.io/badge/patreon-donate-yellow.svg" alt="Patreon donate button" /></a></span>

A [Clash Royale](http://supercell.com/en/games/clashroyale/) API that provides information about the game.

## How to use?

Get all the information you need from this routes:

#### [Arenas](http://www.clashapi.xyz/api/arenas)
#### [Cards](http://www.clashapi.xyz/api/cards)
#### [Chests](http://www.clashapi.xyz/api/chests)
#### [Players](http://www.clashapi.xyz/api/players)

Also, you can get the information of a specific object:

##### [By id](http://www.clashapi.xyz/api/cards/574de12cc7f71c0f00e4a73a)
##### [By idName](http://www.clashapi.xyz/api/cards/arrows)

Want to try a random deck? No problem!

##### [Random deck!](http://www.clashapi.xyz/api/random-deck)

You can get the images too!

#### [Arenas](http://www.clashapi.xyz/images/arenas/royal-arena.png)
#### [Cards](http://www.clashapi.xyz/images/cards/arrows.png)
#### [Chests](http://www.clashapi.xyz/images/chests/super-magical-chest.png)

## Want to help?

If you like the API, please star this repository.

If you create an app using the API, please mention this repository and add it in the table below.

If you want to contribute to the API, feel free to create a pull request.

If you :heart: the API, [help me pay the hosting](http://patreon.com/martincarrera)! 

## Prerequisites
Make sure you have installed all these prerequisites on your development machine.
* [Node.js](https://nodejs.org/en/download/)
* [MongoDB](https://www.mongodb.org/)

### Install
```
$ git clone https://github.com/martincarrera/clash-royale-api.git
$ cd clash-royale-api
$ npm install
```

### Run
```
$ mongod
$ cd clash-royale-api
$ npm run dev
```

### Test
```
$ npm test
```

## Some apps that use this API

If you create an app and get the information from this API, please submit a pull request and add it to the following table.

| APP | Description | Link |
|---|---|---|
| Randeck | Simple web app that generates random decks. | [Go!](http://randeck.xyz) |

Made with :heart: by a clash fan.

----------
This content is not affiliated with, endorsed, sponsored, or specifically approved by Supercell and Supercell is not responsible for it. For more information see [Supercell’s Fan Content Policy](www.supercell.com/fan-content-policy).
