# Write an HTTP interceptor Service

## Objectives

- Integrate an HTTP Interceptor for global error handling

## Instructions

Make sure you run `stubby -d config.yml` to mock our backend.

In this repo we've got a mocked backend with an endpoint that returns an error. Our service is currently calling that endpoint.

Make a HTTP interceptor that alerts the user if there is an error!
