# 🤖 PROMPTS & DEBUGGING LOG (CineStream Project)

This file documents the questions, errors, and debugging steps taken during the development of the CineStream project.
It reflects the real-world problem-solving process followed during the project.

---

## 🔹 1. Next.js Setup Issue

### ❓ Question

How to create a Next.js project using App Router?

### ⚠️ Issue

Confusion during setup options (TypeScript, Tailwind, App Router)

### ✅ Solution

Used:

```
npx create-next-app@latest
```

Selected recommended defaults with App Router enabled.

---

## 🔹 2. API Key Not Working

### ❓ Question

Why is TMDB API key not fetching data?

### ⚠️ Error

```
fetch failed / undefined API key
```

### 🧠 Reason

Environment variables were not properly configured.

### ✅ Solution

Created `.env.local` file:

```
NEXT_PUBLIC_TMDB_KEY=your_api_key
```

Restarted the server after adding it.

---

## 🔹 3. 500 Internal Server Error

### ❓ Question

Why is Next.js showing 500 error on fetch?

### ⚠️ Error

```
ConnectTimeoutError
```

### 🧠 Reason

Server-side fetch was failing due to network restrictions.

### ✅ Solution

Moved initial data fetching from Server Component to Client Component using `useEffect`.

---

## 🔹 4. Infinite Scroll Not Working

### ❓ Question

Why infinite scroll is not triggering?

### ⚠️ Issue

Scroll event was not firing properly.

### 🧠 Reason

* Page height was too small
* Incorrect scroll condition

### ✅ Solution

* Adjusted scroll logic
* Added proper condition:

```
window.innerHeight + window.scrollY >= document.body.offsetHeight - 200
```

---

## 🔹 5. localStorage is not defined

### ❓ Question

Why localStorage error occurs in Next.js?

### ⚠️ Error

```
localStorage is not defined
```

### 🧠 Reason

Next.js runs on server where localStorage is unavailable.

### ✅ Solution

Added check:

```
if (typeof window === "undefined") return;
```

---

## 🔹 6. Hydration Error

### ❓ Question

Why hydration mismatch occurs?

### ⚠️ Error

```
Server rendered ❤️ but client rendered 🤍
```

### 🧠 Reason

Server and client rendered different UI due to localStorage usage.

### ✅ Solution

Moved logic inside `useEffect`:

```
useEffect(() => {
  setFav(isFavorite(movie.id));
}, []);
```

---

## 🔹 7. Route.js Not Working

### ❓ Question

How to use route.js in Next.js?

### ⚠️ Issue

Tried to run it as a command.

### 🧠 Reason

Misunderstanding of API routes.

### ✅ Solution

Used it via fetch:

```
fetch("/api/movies?page=1")
```

---

## 🔹 8. Import / Export Error

### ❓ Question

Why component not importing?

### ⚠️ Error

```
Export default doesn't exist
```

### 🧠 Reason

Used named export instead of default export.

### ✅ Solution

Fixed export:

```
export default Favorites;
```

---

## 🔹 9. Network Fetch Failed

### ❓ Question

Why fetch fails in server but works in browser?

### ⚠️ Error

```
fetch failed (ConnectTimeoutError)
```

### 🧠 Reason

Server environment network issue.

### ✅ Solution

Shifted data fetching to client-side temporarily.

---

## 📌 Conclusion

This project involved solving multiple real-world issues related to:

* Next.js SSR vs CSR
* API integration
* State management
* Browser vs server differences

These debugging steps improved understanding of:

* React lifecycle
* Next.js architecture
* Real-world frontend problem solving

---
