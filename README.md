## 🏕️ Camperly App

A modern full-stack web application for managing and discovering campsites, inspired by platforms like Airbnb, yelp. Camperly enables users to explore, add, and review campground locations, with user authentication, interactive maps, and visually appealing design.

## 🔗 Project Description

This project lets users:

- Browse a catalog of campgrounds
- View detailed campground information and reviews
- Register, log in, and manage their own accounts
- Add new campgrounds and upload images
- Leave and manage reviews for each campground
- See locations visualized with interactive maps

Built using:

- **Node.js** & **Express.js** for the backend server
- **MongoDB** & **Mongoose** for data storage and modeling
- **ejs** for frontend rendering
- **Bootstrap** for modern, utility-based styling
- **MapTiler** for robust, responsive interactive maps

## Demo

[https://final-camperly.onrender.com](https://final-camperly.onrender.com)

## 🚀 Getting Started

### Clone the Repository

```bash
git clone https://github.com/asthaaaa-aa/final-camperly.git
cd final-camperly
```

### Install Dependencies

```bash
npm install
```

### Environment Variables

Create a `.env` file in the root directory and include necessary API keys (MongoDB URI, session secrets, Maptiler token, etc).

### Run the App Locally

```bash
npm run dev
```

## 🧩 Features

- Account registration and authentication (login/signup/session)
- Browse, search, and filter campground listings
- Add, edit, and delete campgrounds (with image uploads)
- Interactive Mapbox-powered maps for location context
- Leave, edit, and delete reviews
- Responsive, modern UI with Tailwind CSS
- Error handling, data validation, and security best practices

## 💡 Inspiration

Inspired by [YelpCamp](https://www.yelpcamp.com/), Camperly was built to learn and demonstrate full-stack engineering skills—focusing on authentication, data relationships, RESTful principles, and rich map interactivity.

## 🛠 Tech Stack

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/) with [Mongoose](https://mongoosejs.com/)
- [Bootstrap](https://getbootstrap.com/)
- [MapTiler SDK](https://docs.maptiler.com/sdk-js/)

## 🧪 Potential Improvements

- Enhanced search/filter options (by location, price, amenities)
- User profiles and public favorites
- Real-time chat or Q&A for each campground
- Advanced moderation & reporting tools
- Dark mode and more theme customization
- Progressive Web App (PWA) support
- Deployment automation (CI/CD)

