import React, { useRef, useEffect } from "react";

const SpiralAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const context = canvas.getContext("2d");
    if (!context) return;
    
    let time = 0,
      velocity = 0.1,
      velocityTarget = 0.1,
      width,
      height,
      lastX,
      lastY;
    const MAX_OFFSET = 400;
    const SPACING = 4;
    const POINTS = MAX_OFFSET / SPACING;
    const PEAK = MAX_OFFSET * 0.25;
    const POINTS_PER_LAP = 6;
    const SHADOW_STRENGTH = 6;

    function resize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }

    function clear() {
      if (!context) return;
      context.clearRect(0, 0, width, height);
    }

    function render() {
      if (!context) return;
      
      let x, y,
        cx = width / 2,
        cy = height / 2;
      context.globalCompositeOperation = "lighter";
      context.strokeStyle = "rgba(10, 56, 44, 0.1)"; // Match the brand color with low opacity
      context.shadowColor = "rgba(10, 56, 44, 0.2)"; // Match the brand color with slightly higher opacity
      context.lineWidth = 3;
      
      // Save the current state
      context.save();
      
      // Flip the entire context horizontally
      context.translate(width, 0);
      context.scale(-1, 1);
      
      context.beginPath();
      for (let i = POINTS; i > 0; i--) {
        let value = i * SPACING + (time % SPACING);
        let ax = Math.sin(value / POINTS_PER_LAP) * Math.PI,
          ay = Math.cos(value / POINTS_PER_LAP) * Math.PI;
        x = ax * value;
        y = ay * value * 0.35;
        let o = 1 - Math.min(value, PEAK) / PEAK;
        y -= Math.pow(o, 2) * 200;
        y += (200 * value) / MAX_OFFSET;
        y += (x / cx) * width * 0.1;
        context.globalAlpha = 1 - value / MAX_OFFSET;
        context.shadowBlur = SHADOW_STRENGTH * o;
        
        // Adjust x-coordinate for the flipped context
        let flippedX = cx + x;
        context.lineTo(flippedX, cy + y);
        context.stroke();
        context.beginPath();
        context.moveTo(flippedX, cy + y);
      }
      context.lineTo(cx, cy - 200);
      context.lineTo(cx, 0);
      context.stroke();
      
      // Restore the original state
      context.restore();
    }

    function step() {
      time += velocity;
      velocity += (velocityTarget - velocity) * 0.3;
      clear();
      render();
      requestAnimationFrame(step);
    }

    function onMouseDown(event: MouseEvent) {
      lastX = event.clientX;
      lastY = event.clientY;
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    }

    function onMouseMove(event: MouseEvent) {
      let vx = (event.clientX - lastX) / 100;
      let vy = (event.clientY - lastY) / 100;
      if (event.clientY < height / 2 && event.clientX > width / 2) vy *= -1;
      velocityTarget = vx + vy;
      lastX = event.clientX;
      lastY = event.clientY;
    }

    function onMouseUp() {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    }

    function onTouchStart(event: TouchEvent) {
      event.preventDefault();
      lastX = event.touches[0].clientX;
      lastY = event.touches[0].clientY;
      document.addEventListener("touchmove", onTouchMove);
      document.addEventListener("touchend", onTouchEnd);
    }

    function onTouchMove(event: TouchEvent) {
      let vx = (event.touches[0].clientX - lastX) / 100;
      let vy = (event.touches[0].clientY - lastY) / 100;
      if (event.touches[0].clientY < height / 2 && event.touches[0].clientX > width / 2) vy *= -1;
      velocityTarget = vx + vy;
      lastX = event.touches[0].clientX;
      lastY = event.touches[0].clientY;
    }

    function onTouchEnd() {
      document.removeEventListener("touchmove", onTouchMove as EventListener);
      document.removeEventListener("touchend", onTouchEnd);
    }

    resize();
    step();
    window.addEventListener("resize", resize);
    window.addEventListener("mousedown", onMouseDown);
    document.addEventListener("touchstart", onTouchStart as EventListener);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("touchstart", onTouchStart as EventListener);
    };
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
      <canvas 
        ref={canvasRef} 
        className="w-full h-full"
        style={{ display: 'block', position: 'absolute', top: 0, left: 0 }}
      />
      <div className="sr-only">Interactive spiral animation</div>
    </div>
  );
};

export default SpiralAnimation;
