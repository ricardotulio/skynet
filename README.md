<img src="https://pbs.twimg.com/media/DV6W875XcAUEWH5.jpg" width="110px" align="left"/>

# Skynet

A simple chatbot for Skype.

## Getting Started

### Prerequisites

- Node.js 8.9+

### Installing locally

```bash
$ git clone https://github.com/ricardotulio/skynet
$ cd skynet
$ yarn install
$ yarn start
```

### Using docker

```
$ docker run -d -p 80:80 -v $(pwd)/.env:/skynet/.env ricardotulio/skynet
```

### Configuring

Edit `.env` file setting up your MicrosoftApp credentials.

## Running the tests

To run tests, use `yarn test`.

## Run linter

To run linter, use `yarn lint`.

## Building

To build the project, use `yarn build`.

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
