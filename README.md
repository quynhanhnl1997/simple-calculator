# simple-calculator

A simple calculator

## API endpoints

| Endpoint       | Request Header                | Sample Request Body      | Sample Response Body                              |
| -------------- | ----------------------------- | ------------------------ | ------------------------------------------------- |
| POST /register | none                          | JSON: { "user": "john" } | { "token": "0.2817006201979373", "user": "john" } |
| POST /login    | none                          | JSON: { "user": "john" } | { "token": "0.2817006201979373", "user": "john" } |
| GET /me        | Authorization: Bearer <token> | none                     | { "john" }                                        |
| POST /me       | Authorization: Bearer <token> | { "user": "james" }      | { "james" }                                       |
| GET /logout    | Authorization: Bearer <token> | none                     | none                                              |
