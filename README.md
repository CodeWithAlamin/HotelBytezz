<div align="center">

  <img src="./public/logo.png" alt="logo" width="90" height="auto">

  <h1>HotelBytezz - Booking</h1>

  <h3>
    <a href="https://hotelbytezz-alamin.vercel.app">
      <strong>Live Site</strong>
    </a>
  </h3>

  <div align="center">
    <a href="https://hotelbytezz-alamin.vercel.app">View website</a>
    •
    <a href="https://github.com/CodeWithAlamin/HotelBytezz/issues">Report Bug</a>
    •
    <a href="https://github.com/CodeWithAlamin/HotelBytezz/pulls">Request Feature</a>
  </div>

  <hr>

</div>

<!-- Badges -->
<div align="center">

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/CodeWithAlamin)
[![Twitter Follow](https://img.shields.io/twitter/follow/CodeWithAlamin?style=for-the-badge&logo=x)](https://x.com/CodeWithAlamin)

![status](https://img.shields.io/badge/Status-Completed-success?style=flat)

</div>

<!-- Brief -->
<p align="center">
Welcome to <b>HotelBytezz</b>! This is the customer version of the <a href="https://github.com/CodeWithAlamin/HotelBytezz-admin">HotelBytezz admin</a> web app, where users can view and book rooms based on availability, manage their bookings, and update their profiles. This project was a great learning experience for me as I explored Next.js, Auth.js (NextAuth), and many other advanced techniques.
</p>

<!-- Screenshot -->
<a align="center" href="https://hotelbytezz-alamin.vercel.app">

![Screenshot](./public/thumbnail.jpeg)

</a>

## Live Site

Check out the live app here: [HotelBytezz](https://hotelbytezz-alamin.vercel.app/)

## Admin Version

I also built an **admin version** of this app for hotel employees to manage rooms, bookings, and guests. The repository is [here](https://github.com/CodeWithAlamin/HotelBytezz-admin), and the live site is [here](https://hotelbytezz-admin-alamin.vercel.app).

## Features

- View all available rooms with descriptions and images.
- Book a room based on available dates and select the number of guests.
- Sign in with Google to manage bookings.
- View your booked rooms, edit them, or cancel if needed.
- Update your profile information.
- Fully responsive on all devices (I made sure to make it mobile-friendly!).

## Technologies Used

- **Next.js** (App Router)
- **Tailwind CSS** for styling
- **Supabase** for the database (shared with the admin app)
- **NextAuth.js** for authentication (Google sign-in)
- **Date-fns** for date handling

## What I Learned

This project deepened my knowledge of Next.js (especially the App Router) and introduced me to using libraries like NextAuth.js. I learned to build a fully functional booking system, integrate user authentication, and ensure the app is responsive on all devices.

## Setup Instructions

To run this project locally:

1. Clone the repo:
   ```bash
   git clone https://github.com/CodeWithAlamin/HotelBytezz.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   - You’ll need to configure Supabase and NextAuth (Google sign-in). Add your environment variables in a `.env.local` file. Check out the `.env.local.example` for what you need to include.
4. Run the development server:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) to see the app.

### Author

<b>👤 Alamin</b>

- LinkedIn - [@CodeWithAlamin](https://www.linkedin.com/in/CodeWithAlamin)
- Twitter - [@CodeWithAlamin](https://www.twitter.com/CodeWithAlamin)
- GitHub - [@CodeWithAlamin](https://github.com/CodeWithAlamin)

Feel free to contact me with any questions or feedback!
