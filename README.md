# 🎬 CineStream (Next.js Movie App)

CineStream is a modern movie browsing web application built using **Next.js (App Router)**.
Users can explore popular movies, search for titles, view detailed information, and save their favorite movies.

---

## 🚀 Live Demo

🔗 https://cine-stream-next-3xi4.vercel.app/

---

## 📸 Screenshots

### 🏠 Home Page (Popular Movies)

![Home](![alt text](image.png))

### 🔍 Search Page

![Search](![alt text](image-1.png))

### 📄 Movie Details

![Details](![alt text](image-2.png))

### ❤️ Favorites Page

![Favorites](![alt text](image-3.png))

---

## 🚀 Features

* 🎥 Browse **Popular Movies**
* 🔍 Search movies by name
* 📄 View **Movie Details**
* ❤️ Add/Remove **Favorites**
* ♾️ Infinite Scroll for smooth browsing
* ⚡ Fast performance using Next.js
* 🎨 Clean and responsive UI

---

## 🛠️ Tech Stack

* **Frontend:** Next.js, React
* **Styling:** CSS / Tailwind (if used)
* **API:** TMDB (The Movie Database)
* **State Handling:** React Hooks
* **Storage:** LocalStorage (for favorites)

---

## 📁 Project Structure

```
cine-stream-next/
│
├── app/
│   ├── page.js              # Home (Popular Movies)
│   ├── movie/
│   │   ├── page.js          # Movie list
│   │   └── [id]/page.js     # Movie details
│   ├── search/page.js       # Search page
│   ├── favorites/page.js    # Favorites page
│   └── layout.js            # Layout (Navbar etc.)
│
├── components/
│   ├── Navbar.jsx
│   ├── MovieCard.jsx
│   ├── MovieList.jsx
│   ├── SearchBar.jsx
│   ├── Favorites.jsx
│   └── Loader.jsx
│
├── lib/
│   ├── tmdb.js              # API calls
│   └── Favorites.js         # LocalStorage logic
│
├── public/
├── .env.local               # API key
└── package.json
```

---

## 🔑 Environment Variables

Create a `.env.local` file in the root folder:

```
NEXT_PUBLIC_TMDB_KEY=your_api_key_here
```

---

## 📦 Installation & Setup

1. Clone the repository:

```
git clone <your-repo-link>
```

2. Install dependencies:

```
npm install
```

3. Run the development server:

```
npm run dev
```

4. Open in browser:

```
http://localhost:3000
```

---

## 🔗 API Used

* TMDB API (The Movie Database)
* Used for fetching:

  * Popular movies
  * Search results
  * Movie details

---

## ⚠️ Important Notes

* `localStorage` is handled only on the client side to avoid SSR issues.
* Infinite scroll is implemented using page-based API fetching.
* Favorites are stored locally in the browser.

---

## 🎯 Future Improvements

* Pagination controls
* Dark/Light mode toggle
* User authentication
* Watchlist feature
* Better error handling UI

---

## 👩‍💻 Author

**Deepa Bhatt**
Frontend Developer

* GitHub: https://github.com/Deepabhatt18
* LinkedIn: https://www.linkedin.com/in/deepa-bhatt-96951a2b7

---

## ⭐ Acknowledgements

* TMDB for providing free movie API
* Next.js for powerful full-stack framework

---

## 📌 Conclusion

CineStream demonstrates practical use of **Next.js App Router**, API integration, and client-side state handling.
It reflects real-world frontend development practices including performance optimization and clean UI design.

---
