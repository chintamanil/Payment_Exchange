

# PayPal Exchange Client

This is the Angular App for client  for PayPal

# Installation
```
>npm install
```

# Run Test
```
>npm test
```
`npm run test:check-coverage` for coverage report

# Run for prompt 
`>gulp` Runs default gulp task to start app

In the `To` field for `Send Money` form use `'bird.gonzales@flumbo.name` for success.
See `users.js` Any of those emails should validate correctly.

##Stack

* Angular
* ng-message
* angular sanitize (this is needed to dispay html codes in angular to unescape)

## Features

- [x] Rest api for transactions items & users
- [x] Using bluebird promises instead of Async (They are a bit faster )


#To Do
- [ ] CFull unit tests
- [ ] on user scroll  changes 
- [ ] PayPal History with Oauth

