# Windsurf Implementation Prompt: Interactive Financial Animation System

## 🎯 **Objective**
Create a sophisticated, interactive animation system for our alternative asset management landing page featuring an **animated efficient frontier chart** as the hero focal point.

## 🎨 **Visual Concept**
Build an animation inspired by **Anime.js** that shows a **"Portfolio Discovery Journey"**:
1. Empty financial chart appears
2. Portfolio points fade in with staggered timing (like stars appearing)
3. Efficient frontier curve draws progressively (smooth line animation)
4. Optimal portfolios highlight and gently pulse
5. Hover interactions reveal portfolio details

## 🛠️ **Technical Stack**
- **Primary:** Anime.js (14KB, lightweight)
- **Data Viz:** D3.js for SVG chart creation
- **Scroll Effects:** GSAP ScrollTrigger
- **Performance:** Intersection Observer API

## 📋 **Implementation Steps**

### Step 1: Install Dependencies
Add these to your HTML `<head>`:
```html
<script src="https://unpkg.com/animejs@3.2.1/lib/anime.min.js"></script>
<script src="https://d3js.org/d3.v7.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
```

### Step 2: HTML Structure
Place in your hero section (next to hero text):
```html
<div class="hero-animation-container">
  <div class="chart-wrapper">
    <svg id="portfolio-chart" width="600" height="400" viewBox="0 0 600 400">
      <!-- Animation will populate this -->
    </svg>
    <div class="chart-controls">
      <button id="replay-btn" class="btn-outline">▶ Replay</button>
    </div>
  </div>
</div>
```

### Step 3: Core CSS (Add to your stylesheet)
```css
/* Animation Container */
.hero-animation-container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 500px;
  background: linear-gradient(135deg, #F5F5F7 0%, #E8E8EA 100%);
  border-radius: 20px;
  overflow: hidden;
}

.chart-wrapper {
  position: relative;
  max-width: 100%;
  filter: drop-shadow(0 10px 25px rgba(10, 56, 44, 0.1));
}

#portfolio-chart {
  width: 100%;
  height: auto;
}

/* Chart Elements */
.frontier-curve {
  fill: none;
  stroke: #0A382C;
  stroke-width: 3;
  stroke-linecap: round;
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
}

.portfolio-point {
  fill: #CCCCCC;
  stroke: #0A382C;
  stroke-width: 1;
  opacity: 0;
  cursor: pointer;
  transition: all 0.3s ease;
}

.portfolio-point.optimal {
  fill: #0A382C;
  stroke: #FFFFFF;
  stroke-width: 2;
}

.portfolio-point:hover {
  fill: #0A382C;
  transform: scale(1.4);
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .hero-animation-container {
    min-height: 400px;
    margin: 2rem 1rem;
  }
}

/* Accessibility */
@media (prefers-reduced-motion: reduce) {
  .portfolio-point, .frontier-curve {
    animation: none !important;
    transition: none !important;
  }
}
```

### Step 4: JavaScript Animation Controller
Create a new file `efficient-frontier-animation.js`:

```javascript
class EfficientFrontierAnimation {
  constructor() {
    this.svg = d3.select('#portfolio-chart');
    this.width = 600;
    this.height = 400;
    this.margin = { top: 40, right: 40, bottom: 60, left: 80 };
    
    // Sample data (replace with real data later)
    this.portfolioData = this.generateSampleData();
    this.frontierData = this.generateFrontierCurve();
    
    this.init();
  }
  
  init() {
    this.setupChart();
    this.setupIntersectionObserver();
    this.bindEvents();
  }
  
  generateSampleData() {
    // Generate 20 sample portfolio points
    const data = [];
    for (let i = 0; i < 20; i++) {
      data.push({
        risk: Math.random() * 0.3 + 0.05,
        return: Math.random() * 0.2 + 0.06,
        isOptimal: i < 5 // First 5 are "optimal"
      });
    }
    return data;
  }
  
  generateFrontierCurve() {
    // Generate efficient frontier curve points
    const points = [];
    for (let i = 0; i <= 50; i++) {
      const risk = (i / 50) * 0.35 + 0.08;
      const ret = 0.05 + 0.4 * risk + 0.2 * risk * risk;
      points.push({ risk, return: ret });
    }
    return points;
  }
  
  setupChart() {
    const g = this.svg.append('g')
      .attr('transform', `translate(${this.margin.left},${this.margin.top})`);
    
    // Scales
    this.xScale = d3.scaleLinear()
      .domain([0, 0.4])
      .range([0, this.width - this.margin.left - this.margin.right]);
      
    this.yScale = d3.scaleLinear()
      .domain([0, 0.3])
      .range([this.height - this.margin.top - this.margin.bottom, 0]);
    
    // Axes
    g.append('g')
      .attr('transform', `translate(0,${this.height - this.margin.top - this.margin.bottom})`)
      .call(d3.axisBottom(this.xScale).tickFormat(d => `${(d*100).toFixed(0)}%`));
    
    g.append('g')
      .call(d3.axisLeft(this.yScale).tickFormat(d => `${(d*100).toFixed(0)}%`));
    
    // Labels
    g.append('text')
      .attr('text-anchor', 'middle')
      .attr('x', (this.width - this.margin.left - this.margin.right) / 2)
      .attr('y', this.height - this.margin.top - this.margin.bottom + 40)
      .text('Risk (%)');
    
    g.append('text')
      .attr('text-anchor', 'middle')
      .attr('transform', 'rotate(-90)')
      .attr('x', -(this.height - this.margin.top - this.margin.bottom) / 2)
      .attr('y', -50)
      .text('Expected Return (%)');
  }
  
  async startAnimation() {
    const g = this.svg.select('g');
    
    // Step 1: Animate portfolio points
    await this.animatePortfolioPoints(g);
    
    // Step 2: Draw efficient frontier
    await this.animateEfficientFrontier(g);
    
    // Step 3: Highlight optimal portfolios
    await this.animateOptimalPoints(g);
    
    // Step 4: Add breathing animation
    this.addContinuousAnimation();
  }
  
  async animatePortfolioPoints(g) {
    const points = g.selectAll('.portfolio-point')
      .data(this.portfolioData)
      .enter()
      .append('circle')
      .attr('class', d => `portfolio-point ${d.isOptimal ? 'optimal' : ''}`)
      .attr('cx', d => this.xScale(d.risk))
      .attr('cy', d => this.yScale(d.return))
      .attr('r', 4)
      .style('opacity', 0);
    
    return anime({
      targets: '.portfolio-point',
      opacity: [0, 1],
      scale: [0, 1],
      duration: 800,
      delay: anime.stagger(100, {start: 500}),
      easing: 'easeOutElastic(1, .8)'
    }).finished;
  }
  
  async animateEfficientFrontier(g) {
    const line = d3.line()
      .x(d => this.xScale(d.risk))
      .y(d => this.yScale(d.return))
      .curve(d3.curveBasis);
    
    const path = g.append('path')
      .datum(this.frontierData)
      .attr('class', 'frontier-curve')
      .attr('d', line);
    
    return anime({
      targets: '.frontier-curve',
      strokeDashoffset: [1000, 0],
      duration: 2000,
      easing: 'easeInOutQuart'
    }).finished;
  }
  
  async animateOptimalPoints(g) {
    return anime({
      targets: '.portfolio-point.optimal',
      scale: [1, 1.3, 1],
      duration: 800,
      delay: anime.stagger(150),
      easing: 'easeOutBack'
    }).finished;
  }
  
  addContinuousAnimation() {
    anime({
      targets: '.portfolio-point.optimal',
      scale: [1, 1.1, 1],
      duration: 3000,
      loop: true,
      direction: 'alternate',
      easing: 'easeInOutSine',
      delay: anime.stagger(500)
    });
  }
  
  setupIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.startAnimation();
          observer.unobserve(entry.target); // Run once
        }
      });
    }, { threshold: 0.3 });
    
    observer.observe(document.querySelector('.hero-animation-container'));
  }
  
  bindEvents() {
    document.getElementById('replay-btn')?.addEventListener('click', () => {
      this.resetAndReplay();
    });
  }
  
  resetAndReplay() {
    // Reset animation state
    this.svg.selectAll('.portfolio-point, .frontier-curve').remove();
    anime.remove('.portfolio-point, .frontier-curve');
    
    // Restart
    setTimeout(() => this.startAnimation(), 100);
  }
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', () => {
  new EfficientFrontierAnimation();
});
```

### Step 5: Integration Instructions

1. **Add the HTML** to your hero section (next to your existing hero text)
2. **Include the CSS** in your main stylesheet
3. **Add the JavaScript file** and link it in your HTML
4. **Test on mobile** - the animation should scale properly
5. **Customize colors** to match your brand (currently using your dark green #0A382C)

## 🎯 **Expected Result**

You'll have a professional, engaging animation that:
- ✅ Demonstrates portfolio optimization visually
- ✅ Maintains institutional credibility
- ✅ Works on all devices
- ✅ Respects accessibility preferences
- ✅ Loads quickly and performs smoothly

## 🔧 **Customization Options**

- **Data Source:** Replace sample data with real portfolio data
- **Colors:** Adjust to match your exact brand colors
- **Timing:** Modify animation durations in the JavaScript
- **Interactions:** Add tooltips or additional hover effects
- **Size:** Adjust chart dimensions for your layout

## 📱 **Mobile Considerations**

The animation automatically:
- Scales appropriately on smaller screens
- Reduces complexity on mobile for performance
- Respects user motion preferences
- Maintains touch interactions

This implementation will create a sophisticated, professional animation that showcases your AI capabilities while maintaining the credibility essential for institutional finance clients.