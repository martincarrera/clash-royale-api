# [Clash Royale API](http://www.clashapi.xyz/)
[![Codeship Status for martincarrera/clash-royale-api](https://codeship.com/projects/4f412dd0-0006-0134-4d8c-1e95689fe79f/status?branch=master)](https://codeship.com/projects/153028) [![Coverage Status](https://coveralls.io/repos/github/martincarrera/clash-royale-api/badge.svg?branch=master)](https://coveralls.io/github/martincarrera/clash-royale-api?branch=master) [![bitHound Overall Score](https://www.bithound.io/github/martincarrera/clash-royale-api/badges/score.svg)](https://www.bithound.io/github/martincarrera/clash-royale-api) [![bitHound Dependencies](https://www.bithound.io/github/martincarrera/clash-royale-api/badges/dependencies.svg)](https://www.bithound.io/github/martincarrera/clash-royale-api/master/dependencies/npm) [![bitHound Dev Dependencies](https://www.bithound.io/github/martincarrera/clash-royale-api/badges/devDependencies.svg)](https://www.bithound.io/github/martincarrera/clash-royale-api/master/dependencies/npm) [![bitHound Code](https://www.bithound.io/github/martincarrera/clash-royale-api/badges/code.svg)](https://www.bithound.io/github/martincarrera/clash-royale-api)
<span class="badge-patreon"><a href="http://patreon.com/martincarrera" title="Donate to this project using Patreon"><img src="https://img.shields.io/badge/patreon-donate-yellow.svg" alt="Patreon donate button" /></a></span>

A [Clash Royale](http://supercell.com/en/games/clashroyale/) API that provides information about the game.

> If you develop an app using this API, please submit a pull request adding it to the [apps table](#apps-that-use-this-api).

## Content

1. [How to use](#how-to-use)
    1. [Endpoints](#endpoints)
    2. [Images](#images)
2. [Want to help](#want-to-help)
3. [Development](#development)
    1. [Install](#install)
    2. [Run](#run)
    3. [Test](#test)
4. [Apps that use this API](#apps-that-use-this-api)

## How to use?

Consume the API to get all the information you need from these routes.

### Endpoints

[Base route](http://www.clashapi.xyz).

| Route | HTTP Verb | Description |
|---|---|---|
| [`/api/arenas`][1] | `GET` | All Arenas information |
| `/api/arenas/:id` | `GET` | Single Arena information |
| `/api/arenas/:idName` | `GET` | Single Arena information |
| [`/api/cards`][2] | `GET` | All Cards information |
| `/api/cards/:id` | `GET` | Single Card information |
| `/api/cards/:idName` | `GET` | Single Card information |
| [`/api/chests`][3] | `GET` | All Chests information |
| `/api/chests/:id` | `GET` | Single Chest information |
| `/api/chests/:idName` | `GET` | Single Chest information |
| [`/api/leagues`][4] | `GET` | All Leagues information |
| `/api/leagues/:id` | `GET` | Single League information |
| `/api/leagues/:idName` | `GET` | Single League information |
| [`/api/players`][5] | `GET` | All Players levels information |
| `/api/players/:id` | `GET` | Player level information |
| `/api/players/:idName` | `GET` | Player level information |
| [`/api/random-deck`][6] | `GET` | Get a Random deck! |

[1]: http://www.clashapi.xyz/api/arenas
[2]: http://www.clashapi.xyz/api/cards
[3]: http://www.clashapi.xyz/api/chests
[4]: http://www.clashapi.xyz/api/leagues
[5]: http://www.clashapi.xyz/api/players
[6]: http://www.clashapi.xyz/api/random-deck

### Images

You can get the images too! Thank you [MaherFa](https://github.com/MaherFa)!

| Route | Description |
|---|---|
| [`/images/arenas/${idName}.png`][7] | Arenas images |
| [`/images/cards/${idName}.png`][8] | Cards images |
| [`/images/chests/${idName}.png`][9] | Chests images |
| [`/images/leagues/${idName}.png`][10] | Leagues images |

[7]: http://www.clashapi.xyz/images/arenas/royal-arena.png
[8]: http://www.clashapi.xyz/images/cards/arrows.png
[9]: http://www.clashapi.xyz/images/chests/super-magical-chest.png
[10]: http://www.clashapi.xyz/images/leagues/ultimate-champion.png

## Want to help?

If you like the API, please star this repository.

If you create an app using the API, please mention this repository and add it in the table below.

If you want to contribute to the API, feel free to create a pull request.

If you :heart: the API, [help me pay the hosting](http://patreon.com/martincarrera)!

## Development

Make sure you have installed all these prerequisites on your development machine.

* [Node.js](https://nodejs.org/en/download/)
* [MongoDB](https://www.mongodb.org/)
* [Nodemon](https://nodemon.io/)

### Install

``` bash
$ git clone https://github.com/martincarrera/clash-royale-api.git
$ cd clash-royale-api
$ npm install
```

### Run

``` bash
$ mongod
$ cd clash-royale-api
$ npm run dev
```

If you don't have `Nodemon` installed

``` bash
$ mongod
$ cd clash-royale-api
$ npm i -g nodemon
$ npm run dev
```

### Test

``` bash
$ npm test
```

## Apps that use this API

| APP | Description | Link |
|:---:|:---:|:---:|
| Randeck | Simple web app that generates random decks. | [Go!](http://randeck.xyz) |
| Donate | Website for clash royale clan called Donate. |[Go!](http://donate.kloud51.com/)|
| BarrePolice | A Telegram Bot based on plugins written in Lua |[Go!](https://t.me/BarrePolice_Bot) _& send /cr_ |
| Clashapi | NPM package to consume this API | [Go!](https://www.npmjs.com/package/clashapi) |

Made with :heart: by clash fans.

----------
This content is not affiliated with, endorsed, sponsored, or specifically approved by Supercell and Supercell is not responsible for it. For more information see [Supercell’s Fan Content Policy](http://www.supercell.com/fan-content-policy).
