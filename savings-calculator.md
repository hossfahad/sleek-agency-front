```markdown
# 🧮 AI Automation Savings Calculator - Feature Spec for Enhanced Points

## 🎯 Overview
This calculator helps small business owners understand how much time and money they can save by automating repetitive tasks like calls, form fills, and scheduling — with Enhanced Points.

Inspired by the Yonder design — clean, interactive, and lead-conversion focused.

---

## 📐 Layout Overview

**2-column layout:**

| Left Panel (Inputs)                           | Right Panel (Results)                           |
|-----------------------------------------------|-------------------------------------------------|
| - Sliders / inputs for task estimation         | - Dynamic calculated monthly savings             |
| - Helper text (“Explain Like I’m 5”)           | - Work hours saved + dollar savings              |
| - CTA: Talk to Us                              | - With vs Without Enhanced Points comparison     |

---

## 🧾 Input Fields (with ELI5 Tooltips)

### 1. How many employees?
- `type`: slider or number input
- `infotip`:  
  > "This helps us understand how big your team is. More people = more repetitive tasks."

---

### 2. Average hourly wage ($)
- `type`: number input (default to $25 if blank)
- `infotip`:  
  > "How much do you pay per hour on average? We'll use $25/hr if you’re not sure."

---

### 3. Number of repetitive tasks per day
- `type`: number input
- `infotip`:  
  > "Think about the repeating stuff you or your team does — like answering calls, emails, scheduling, etc."

---

### 4. Average time per task (minutes)
- `type`: number input
- `infotip`:  
  > "Roughly how long does each task take? Like one phone call or email — 2, 5, maybe 10 minutes?"

---

## 🧠 Calculation Logic

```js
const workdaysPerMonth = 20;

const minutesSavedPerMonth = tasksPerDay * timePerTask * workdaysPerMonth;
const hoursSaved = minutesSavedPerMonth / 60;
const monthlySavings = hoursSaved * hourlyWage;
const workdaysSaved = hoursSaved / 8;
```

---

## 📊 Results Panel

### 💚 With Enhanced Points
- “You could save **X hours/month**”
- “Worth about **$X/month**”
- “That’s like getting back **X full workdays**”

### ❌ Without Enhanced Points
- "0 saved"
- "X hours lost to manual work"
- Style this card with lower contrast (e.g., dim gray)

---

## 🎨 Design Guidelines

- **Style:** Inspired by Yonder — clean, modern, deep green background (`#0F3D3E`)
- **Fonts:** Inter, Space Grotesk, or similar
- **UI:** Rounded sliders, soft shadows, hover states
- **CTA Button:** “Talk to Us” – white or light green, rounded
- **Animations:** Soft slide or fade-in as numbers change
- **Responsiveness:** Works on mobile and desktop

---

## 📈 Amplitude Tracking

### Track this event on form submit:
```js
amplitude.getInstance().logEvent("CalculatorCompleted", {
  teamSize,
  hourlyWage,
  tasksPerDay,
  timePerTask,
  hoursSaved,
  monthlySavings,
  workdaysSaved,
  industry: userInput.industry || null
});
```

- Track field interactions: focus/blur
- Track CTA click: “Talk to Us”
- UTM/source tagging (if present)

---

## ✅ Output Example

> 🧠 You could save **33.3 hours/month**  
> 💰 That’s about **$832/month**  
> ⏳ Equivalent to **4 full workdays/month**  
>  
> [Talk to Us →]

---

## 📎 Future Enhancements
- Allow exporting savings report (PDF or email)
- Add use case presets (e.g., Hotels, Clinics, etc.)
- Embed into landing pages or product demos

```

---
Design requirements:
## Enhanced Points – AI Cost Savings Calculator UI Prompt

Create a **clean, modern web interface** for an AI automation cost savings calculator by a startup called **Enhanced Points**. 

### 🎨 Design
- **Background:** Deep green (#0F3D3E), inspired by Yonder’s style
- **Layout:** Bento grid (2x2), fully **responsive** across desktop, tablet, and mobile
- **Style:** Glassmorphism with:
  - Frosted glass card elements
  - Gradient-to-transparent overlays
  - Rounded corners and subtle shadows
- **Typography:** Modern sans-serif (e.g., *Inter* or *Space Grotesk*)

---

### 📥 Input Section (Left Column – Bento Grid)
**Card 1**
- **Label:** “How many employees?”
- **Element:** Slider with number above thumb
- **Helper Text:** _“Just a guess is fine!”_

**Card 2**
- **Label 1:** “How many repetitive tasks per day?”
- **Label 2:** “How long does each task take?” (in minutes)
- **Element:** Numeric inputs or sliders
- **Helper Text:** _“Think: how long does one call take?”_

---

### 📊 Results Section (Right Column – Bento Grid)
**Card 3: With Enhanced Points**
- **$1040/month saved**
- **42 hours saved**
- **Equivalent to 5 workdays**

**Card 4: Without Enhanced Points**
- **$0 saved**
- **Time wasted each month: 42 hours**

---

### 🔘 Call-to-Action
- Button: **“Talk to Us”**
- Style: Rounded, light green or white
- Placement: Top-right on desktop; stacks below content on mobile
- Hover: Slight scale and shadow animation

---

### 🧠 Animations
- Input elements respond with **smooth transitions** on hover/focus
- Sliders dynamically update result cards with **subtle easing**
- Cards **fade in or scale up** slightly on load (duration: 0.2–0.4s)
- Button interaction includes hover animation (scale and soft shadow)

---

### 📱 Responsiveness
- **Desktop:** 2x2 bento grid
- **Tablet:** Left inputs stacked, right results stacked beside
- **Mobile:** All cards stacked vertically with generous padding
- All interactive elements should be optimized for touch and clarity

---

### 🎯 Vibe
- **Tone:** Professional, elegant, slightly playful
- **Feel:** Trustworthy SaaS product with friendly UX