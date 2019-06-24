# Kindur Exercise 1 - Rest API

This is a coding exercise to create a get and post API to hash a message using sha256 and return back the original message. If the hash does not match any original post message, send back a 404.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

- Node 8
- Git

### Installing

Clone the repo and install the dependencies.

```bash
git clone https://github.com/andrewywoo/kindur-exercise-1.git
cd kindur-exercise-1
```

```bash
npm install
```

To start the express server, run the following

```bash
npm run start
```

##How to use

The endpoints that can be reached after running the development server are:

GET http://localhost:8080/message/:hashkey
POST http://localhost:8080/message

## Running the tests

Run tests with jest with the following command

```bash
npm run test
```

## Test Cases

The following test cases run with Jest

- 404 on hash that does not exist
- Valid POST where message produces sha256 hash
- Valid GET where original message has been sent back
- Invalid Arguments

## Built With

- Node.js
- Express.js
- Body Parser

Dev Dependencies

- Nodemon
- Jest
- Supertest

## Authors

- **Andrew Woo** - _Initial work_ - [Andrew Woo](https://github.com/andrewywoo)
