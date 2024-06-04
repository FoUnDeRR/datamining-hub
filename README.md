# 🐰 DISCORD DATAMINING WIKI & RESOURCES

- Here you can find the basics of `findByProps` and `discord webpack` to get started on Datamining. Contributions such as **pull-requests of code** are welcomed, but make sure it is worth using.

> [!IMPORTANT]
> This is a small project I thought to start for people who don't know about **Datamining**. So nothing serious.

## Getting started

### Prequisities

1. A good knowledge about JavaScript & TypeScript
2. Familiarility with functions (..props), modules, strings, experiments

### Basics of the Basics

> `CTRL + SHIFT + I` to open Chrome Developer Tools, or since it's Discord, **DevTools**.
> As the start, we only do stuff in the `Console` tab.

> [!WARNING]
> DO NOT try experiments and codes in your stable Discord client unless you know what you are doing. Instead, use [Discord Public Test Build](https://ptb.discord.com/download) or [Discord Canary Build](https://canary.discord.com/download)

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

#### More coming soon!
