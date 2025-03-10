Here is a detailed README for the ONDC-Official/automation-api-service repository:

# ONDC Automation API Service

## Overview

The ONDC Automation API Service is a firewall for the ONDC protocol, providing various validations to ensure the integrity and compliance of transactions within the ONDC network. This service is written in TypeScript and includes both L0 and L1 validation modules.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Development](#development)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Features

- **L0 Validations:** Initial checks for basic compliance.
- **L1 Validations:** Advanced validations for deeper integrity checks.
- **Transaction Logging:** Detailed logging of transaction actions and responses.
- **Cache Management:** Efficient handling of session and transaction data using Redis.

## Installation

To install the dependencies and set up the project, follow these steps:

1. Clone the repository:
   ```sh
   git clone https://github.com/ONDC-Official/automation-api-service.git
   cd automation-api-service
   ```

2. Install the dependencies:
   ```sh
   npm install
   ```

3. Build the project:
   ```sh
   npm run build
   ```

## Usage

To start the service, use the following command:
```sh
npm run start
```

### Docker

A Dockerfile is provided to build and run the service in a containerized environment:
```sh
docker build -t automation-api-service .
docker run -p 3000:3000 automation-api-service
```

## Configuration

The service can be configured using environment variables. Key configurations include:

- `SIGN_PRIVATE_KEY`: Private key for signing transactions.
- `SUBSCRIBER_ID`: Subscriber ID for the ONDC network.
- `UKID`: Unique Key ID for the ONDC network.
- `REDIS_URL`: URL for the Redis instance.

## Development

For development purposes, you can use the following commands:

- **Run the service in development mode:**
  ```sh
  npm run dev
  ```

- **Run tests:**
  ```sh
  npm test
  ```

- **Lint the code:**
  ```sh
  npm run lint
  ```

## Testing

The service includes various test cases for validating API responses. Tests are located under the `src/validations/L1-validations/api-tests` directory. You can run the tests using:
```sh
npm test
```

## Contributing

We welcome contributions to the project. To contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch with a descriptive name.
3. Make your changes and commit them with clear messages.
4. Push your changes to your fork.
5. Create a pull request to the main repository.

Please ensure your code follows the project's coding standards and passes all tests.

## License

This project is licensed under the MIT License. For more details, see the [LICENSE](LICENSE) file.

---

For detailed information on specific validations and their conditions, refer to the individual markdown and TypeScript files within the repository.

### Example Validation Conditions

- **Condition validate_tag_1_ROUTE_INFO:**
  ```markdown
  every element of $.message.catalog.providers[*].fulfillments[*].tags[?(@.descriptor.code=='ROUTE_INFO')].list[*].descriptor.code must be in ["ROUTE_ID", "ROUTE_DIRECTION"]
  ```

- **Condition validate_tag_1_TICKET_INFO:**
  ```markdown
  every element of $.message.catalog.providers[*].fulfillments[*].tags[?(@.descriptor.code=='TICKET_INFO')].list[*].descriptor.code must be in ["NUMBER"]
  ```

- **Condition validate_tag_1_TRIP_DETAILS:**
  ```markdown
  every element of $.message.catalog.providers[*].fulfillments[*].tags[?(@.descriptor.code=='TRIP_DETAILS')].list[*].descriptor.code must be in ["AVAILABLE_TRIPS", "UTILIZED_TRIPS"]
  ```

For further details, refer to the [instruct.md](https://github.com/ONDC-Official/automation-api-service/blob/main/public/instruct.md) file. 

This README is based on the gathered information from the repository's code and documentation. Adjustments may be necessary based on specific implementation details and updates to the codebase.
