link: https://gsap-project-ruby.vercel.app/
# 🚗 Scroll Animation Project (GSAP + ScrollTrigger)

This is a small experimental project where I explored **GSAP** and its powerful **ScrollTrigger** plugin.

The idea was simple:
Create a scroll-based animation where a car moves across the screen, and statistic cards appear during the movement.

---

## ✨ What Happens in This Project?

- The section gets pinned when scrolling starts.
- A car moves horizontally across the screen.
- As the car progresses, cards slide in and fade into view.
- Everything is controlled using a GSAP timeline synced with scroll.

---

## 🛠️ Tech Used

- React
- GSAP
- ScrollTrigger
- @gsap/react

---

## 🧠 What I Learned

- How to create a `gsap.timeline()`
- How `ScrollTrigger` works with `pin` and `scrub`
- How to control animation timing using timeline positions
- How to synchronize multiple animations
- How scroll distance maps to animation progress

---

## 🚀 Key Concepts Practiced

- Scroll-based animations
- Pinned sections
- Timeline sequencing
- Coordinated motion effects
- Controlled reveal animations

---

## 📦 Installation

```bash
npm install
npm install gsap
npm install @gsap/react
npm run dev