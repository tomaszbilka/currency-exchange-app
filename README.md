## About

This is an application consisting of two parts: a **backend** written in Nest.js and a **frontend** using Next.js.

**Backend**: the API sends a request to DUMMY_API every minute to fetch the exchange rate value from EUR to PLN. This value is cached on the server during that time, and when a request for currency exchange comes from the frontend, it uses this cached value (it also saves basic transaction data in the database). There are two endpoints: `POST /transactions` for performing calculations and saving data, and `GET /transactions/current-rate` for retrieving the current exchange rate.

**Frontend**: The home page uses SSG, rebuilt every 60 seconds (the user must refresh the page to see the new exchange rate, gaining speed in page delivery to the browser at the cost of potentially outdated data; this approach can, of course, be adjusted depending on the needs). Users can navigate to the exchange tab, where they can send a request to calculate the exchange value.

## Installation

> node version: v20.15.0

```bash
#go to /backend
$ npm install

#go to /frontend
$ npm install
```

## Running the frontend app

1. go to `/frontend` folder

2. copy `.env.example` to `.env` and fill the values if needed

3. run the app

```bash
# development
$ npm run dev

# production mode
$ npm run build
$ npm run start
```

## Running the backend app

1. go to `/backend` folder

2. copy `.env.example` to `.env` and fill the values if needed

3. create data base with name from `.env` file

4. run migration:

```bash
# inside /backend folder
$ npm run db:migrate
```

5. run the app

```bash
$ npm run start
```

## migrations

```bash
# run migration
npm run db:migrate

# drop data base
npm run db:drop

# create migration
npm run db:create src/migrations/<file_name>
```
