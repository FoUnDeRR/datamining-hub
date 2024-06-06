![DISCORD DATAMINING HUB](src/assets/github/readme-banner.png)

# 🐰 DISCORD DATAMINING WIKI & RESOURCES

![uwu](https://img.shields.io/badge/just%20bunnies%20owo-FFB6C1)


- Here you can find the basics of `findByProps` and `discord webpack` to get started on Datamining. Contributions such as <kbd>[Pull Requests](https://github.com/FoUnDeRR/datamining-hub/pulls)</kbd> are welcomed, but make sure it is worth using.

> [!IMPORTANT]
> This is a small project I thought to start for people who don't know about **Datamining**. So nothing serious.

---

### Table of Content

- [Getting Started](#getting-started)
- [Basics of the Basics](#basics-of-the-basics)
- [Major Functions](#major-functions)

---

## Getting started

### Prerequisites

1. A good knowledge about JavaScript & TypeScript
2. Familiarility with [findByProps](src/util/utils.js), functions, modules, strings, experiments

### Basics of the Basics

> `CTRL + SHIFT + I` to open Chrome Developer Tools, or since it's Discord, **DevTools**.
> As the start, we only do stuff in the `Console` tab.

> [!WARNING] 
> **DO NOT** try to do experiments in your stable Discord client unless you know what you are doing. There are many chances that you will either break your client or get your account disabled. Instead, use [Discord Public Test Build](https://ptb.discord.com/download) or [Discord Canary Build](https://canary.discord.com/download)

### Major Functions

#### What is `findByProps`?

It is widely used to locate functions and modules inside Discord's webpack.
For example,

```js
findByProps("getUser").getUser("<user id>");
```

#### Structure explained;

`getUser` is a store. Discord has variety of stores to store their information on relative categories. In this case, `getUser` is a store called `UserStore`, **get** is a definition of receiving information about that store.

`.getUser` is to confirm that we are about to execute this function. Functions in Discord are often called as **Props**.

#### MORE COMING SOON!

![Alt](https://repobeats.axiom.co/api/embed/fcf2fef4e7d7cd7a0f286a1230bc30de407a81f8.svg "Repobeats analytics image")
