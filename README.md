# React + Mobx Quick Starter project

The goal of this project is to provide a starting base for an mobx react project with OPTIONAL isomorphism.

Features:
+ `async/await` support
+ Isomorphic
+ CSS and SCSS compilation
+ MongoDB user auth / sessions
+ Decorators for accessing actions and state

Coming soon:
+ Hot reload _(broken atm)_


![Preview](https://raw.githubusercontent.com/nightwolfz/mobx-starter/master/preview.png)


## How to run

For development:

    npm run dev

For production:

    npm run prod

## Goals

We have one state object. That object can be accessed by any React component decorated with `@connect`.

If we want to update the state, we execute `actions` which are just namespaced functions _(namespace = action filename)_ that affect the state.

All the rendering is efficiently taken care by [MobX](https://github.com/mobxjs/mobx) so you can focus on two things:

`What to name your action?` and `what should it do?`

# F.A.Q.

#### How to add mongoose models ?

1. Goto `src/server/models`
2. Add `[Name].js`
3. Goto `src/helpers/database`
4. Add a new key to the `export default` and require your model there.

#### How to add a new action

Goto `src/client/actions`.

If you want to add a new action to an
existing file, just add a new method to one of the classes
ex: add `clearAll()` method to `todos.js`

If you want to add a new set of actions, create a new file
ex: `settings.js` and add a reference to that file to `const actions` in `index.js`

#### My components are not updating!

Make sure you added the `@connect` decorator to your component.

#### My stateless component doesn't have access to this.context !

You cannot use decorators on stateless components.
You should instead wrap your component like this:

```js
const MyStatelessComponent = connect(function(props, context) {
  return <p>{context.state.something} !</p>
})
````

#### How do I execute async actions on the server instead of client ?

Checkout `src/client/components/Home.js`.
The `fetchData` method there only runs on the server.


## Author

Ryan Megidov

https://github.com/nightwolfz/mobx-starter
