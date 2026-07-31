#### 1. `Photobooth Cute / README.md`

# 📸 Photobooth Cute

An accessible, browser-based photobooth web application that captures camera feeds and generates customizable photo strips directly in the browser.

---

## ✨ Features

* **Live Camera Stream:** Connects seamlessly to user device cameras via native Web APIs.
* **Photo Strip Rendering:** Captures snapshots and lays them out into printable/downloadable strips.
* **Accessibility First:** Built with keyboard navigation and screen reader support in mind.

---

## 🛠️ Tech Stack & Key Concepts

* **React.js:** Component architecture for camera viewports, strip previews, and controls.
* **Web APIs:** `navigator.mediaDevices.getUserMedia` for video stream capture.
* **HTML5 Canvas:** Merging video frames into a unified image strip for download.
* **CSS3:** Custom styling for layout slots, framing, and responsive viewport sizing.

---

## 💡 Technical Insights

* **Media Stream Handling:** Managed camera stream lifecycle inside React hooks to properly clean up tracks when components unmount, preventing memory/hardware leaks.