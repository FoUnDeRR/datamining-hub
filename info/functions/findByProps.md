#### What is `findByProps`?

findByProps isn't the only one out there, there are some others like;
- `findByCode`
- `findByCodeLazy`
- `findByPropsLazy`
- `findByComponent`
- `findByComponentLazy`

Let's start with findByProps, It is widely used to locate functions and modules inside Discord's webpack.
For example,

```js
findByProps("getUser").getUser("<user id>");
```

#### Structure explained;

`getUser` is a store. Discord has variety of stores to store their information on relative categories. In this case, `getUser` is a store called `UserStore`, **get** is a definition of receiving information about that store.

`.getUser` is to confirm that we are about to execute this function. Functions in Discord are often called as **Props**.
