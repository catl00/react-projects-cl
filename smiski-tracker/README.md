# 🧸 Smiski Tracker

A fan-made interactive web application for tracking personal collections of Smiski blind box figure series. 

Additional features that can be added:
* Save the data to track the checklist
* Continue adding more collections to make the checklist up-to-date


---

## ✨ Features

* **Series Directory:** Browse figures categorized by series.
* **Collection Management:** Mark individual figures as owned/unowned with real-time UI updates.
* **Interactive UI:** Smooth visual feedback when toggling items in your collection.

---

## 🛠️ Tech Stack & Key Concepts

* **React.js:** Dynamic rendering and state preservation.
* **State Management:** Immutable array updates using React state (`useState`) to handle item toggles.
* **CSS Grid / Flexbox:** Responsive gallery layout adapted for varying device screen sizes.

---

## 💡 Technical Insights

* **State Immutability:** Focused on clean state updates when modifying nested objects/arrays inside the collection list, ensuring efficient React re-renders.