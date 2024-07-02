# Algorithms Repository

This repository contains solutions to various algorithms and data structures problems, including LeetCode challenges. Initially, solutions are provided in Go and TypeScript.

## Installation

To run the solutions in this repository using Docker, follow these steps:

1. Clone the repository:
    ```bash
    git clone <repository-url>
    cd algorithms
    ```

2. Build the Docker images for Go and TypeScript:
    ```bash
    docker build -t go-algorithms -f Dockerfile.goapp .
    docker build -t typescript-algorithms -f Dockerfile.typescript .
    ```

## Usage

### Running Go Solutions

To run tests for Go solutions inside the Docker container:

```bash
docker run -it --rm go-algorithms go test ./...
```

To run tests for TypeScript solutions inside the Docker container:
```bash
docker run -it --rm typescript-algorithms npm test
```
