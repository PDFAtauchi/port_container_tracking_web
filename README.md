<h1 align="center">
  <a href="https://github.com/dec0dOS/amazing-github-template">
    <img src="https://images.unsplash.com/photo-1494412552100-42e4e7a74ec6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Logo" width="300" height="150">
  </a>
</h1>

<div align="center">
  <h1> Port Container Tracking Project </h1>
  <br />
  <br />

</div>

# Context

For context go to : [backend repo](https://github.com/PDFAtauchi/port_container_tracking_backend)

# Setup

## Prerequisites

- Node
- npm

## Additional

create .env.development.local and .env.test.local file in root of project, and put this in the files.
```yaml
REACT_APP_PORT_CONTAINER_TRACKING_BACKEND_URL=http://localhost:8080
```

## Usage

- Clone repo
- To install dependencies = yarn install
- To start app = yarn start
- To run linter = yarn lint
- To run formatter = yarn format
- To run tests = yarn test
- To run coverage = yarn coverage

## Stack

- Reactjs
- PrimeReact
- axios
- formik
- yup

## Improvements

- Implement Update, Detail, Delete, List pages
- Add Features flags
- Configure Sentry to monitoring errors in production
- E2E tests using e.g. cypress
