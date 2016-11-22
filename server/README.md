

# PayPal Exchange Server

This is the node server for PayPal

# Installation
```
>npm install
sudo mongod 
redis-server
```

# Run Test
```
>npm test
```
`npm run test:check-coverage` for coverage report

# Run for prompt in 3 different terminals 
```
> npm start
> sudo mongod
> redis-server
```

##Stack

* MongoDB
* Redis
* Node.js

## Features

- [x] Rest api for transactions items & users
- [x] Using bluebird promises instead of Async (They are a bit faster )
- [x] Full unit test


#To Do
- [ ] Caching with Redis
- [ ] on user scroll api changes 

https://spion.github.io/posts/why-i-am-switching-to-promises.html
