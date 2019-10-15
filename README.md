[![CircleCI](https://circleci.com/gh/angular-seattle/angular-seattle.svg?style=svg)](https://circleci.com/gh/angular-seattle/angular-seattle)
[![Netlify Status](https://api.netlify.com/api/v1/badges/8dec2248-f76e-449e-ab35-1132c7bdb6c7/deploy-status)](https://app.netlify.com/sites/angular-seattle/deploys)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

# Angular Seattle

![Angular Seattle](docs/img/ng-seattle.png)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8.

## Current Features

- ✅ Angular 8
- ✅ PWA
- ✅ CI/CD (CircleCI and Netlify)
- ✅ Angular Material
- ✅ Event Information
- ✅ Past talks
- ✅ Twitter

## Future Feature Ideas

- Contact sharing
- Talk proposals
- Industry tools (Universal, Nx, Greenkeeper, etc...)
- Blog
- Other social media (Slack)
- Job Board
- Whatever YOU want  
  [Open an issue with a feature request!](https://github.com/angular-seattle/angular-seattle/issues/new?assignees=bniedermeyer&labels=enhancement&template=feature_request.md&title=%5BFEATURE%5D+)

Please see our [CONTRIBUTING.md](CONTRIBUTING.md) for how to contribute to the project. Please review our [Code of Conduct](CODE_OF_CONDUCT.md) prior to contributing.

## Adding an event

To add an event to the calendar, open a pull request to update `src/assets/events/events.json`. Add an event in the below format:

```json
{
  "id": 2, // increment id by one
  "name": "My Cool Event",
  "date": "2019-08-31T19:30:00", // Date must be in ISO8601 format
  "venue": {
    "name": "My Venue",
    "address": "123 Event street",
    "city": "Seattle",
    "country": "USA"
  },
  "link": "https://place-to-rsvp.com", // this can be any link that you want to direct users to. Usually where they should go to RSVP to the event.
  "description": "This is my super fancy Angular Seattle event. It will have these talks: 1. Getting Started 2. Going Above and Beyond with Angular 3. Making a Pizza with Angular"
}
```
