import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import './animations.css';

interface PortfolioPoint {
  risk: number;
  return: number;
  isOptimal: boolean;
  id: string;
}

interface FrontierPoint {
  risk: number;
  return: number;
}

const EfficientFrontierAnimation: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);

  const width = 600;
  const height = 400;
  const margin = { top: 40, right: 40, bottom: 60, left: 80 };
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  // Generate sample portfolio data
  const generatePortfolioData = (): PortfolioPoint[] => {
    const data: PortfolioPoint[] = [];
    for (let i = 0; i < 20; i++) {
      data.push({
        risk: Math.random() * 0.3 + 0.05,
        return: Math.random() * 0.2 + 0.06,
        isOptimal: i < 5,
        id: `portfolio-${i}`
      });
    }
    return data;
  };

  // Generate efficient frontier curve
  const generateFrontierData = (): FrontierPoint[] => {
    const points: FrontierPoint[] = [];
    for (let i = 0; i <= 50; i++) {
      const risk = (i / 50) * 0.35 + 0.08;
      const ret = 0.05 + 0.4 * risk + 0.2 * risk * risk;
      points.push({ risk, return: ret });
    }
    return points;
  };

  const portfolioData = generatePortfolioData();
  const frontierData = generateFrontierData();

  const setupChart = () => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove(); // Clear previous content

    // Create scales
    const xScale = d3.scaleLinear()
      .domain([0, 0.4])
      .range([0, innerWidth]);

    const yScale = d3.scaleLinear()
      .domain([0, 0.3])
      .range([innerHeight, 0]);

    // Create main group
    const g = svg.append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    // Add axes
    g.append('g')
      .attr('class', 'x-axis')
      .attr('transform', `translate(0,${innerHeight})`)
      .call(d3.axisBottom(xScale).tickFormat(d => `${(+d * 100).toFixed(0)}%`));

    g.append('g')
      .attr('class', 'y-axis')
      .call(d3.axisLeft(yScale).tickFormat(d => `${(+d * 100).toFixed(0)}%`));

    // Add axis labels
    g.append('text')
      .attr('class', 'axis-label')
      .attr('text-anchor', 'middle')
      .attr('x', innerWidth / 2)
      .attr('y', innerHeight + 50)
      .text('Risk (Volatility %)');

    g.append('text')
      .attr('class', 'axis-label')
      .attr('text-anchor', 'middle')
      .attr('transform', 'rotate(-90)')
      .attr('x', -innerHeight / 2)
      .attr('y', -50)
      .text('Expected Return (%)');

    return { svg, g, xScale, yScale };
  };

  const animatePortfolioPoints = async (g: d3.Selection<SVGGElement, unknown, null, undefined>, xScale: d3.ScaleLinear<number, number>, yScale: d3.ScaleLinear<number, number>) => {
    const points = g.selectAll('.portfolio-point')
      .data(portfolioData)
      .enter()
      .append('circle')
      .attr('class', d => `portfolio-point ${d.isOptimal ? 'optimal' : ''}`)
      .attr('cx', d => xScale(d.risk))
      .attr('cy', d => yScale(d.return))
      .attr('r', 0)
      .style('opacity', 0)
      .style('fill', d => d.isOptimal ? '#0A382C' : '#CCCCCC')
      .style('stroke', d => d.isOptimal ? '#FFFFFF' : '#0A382C')
      .style('stroke-width', d => d.isOptimal ? 2 : 1)
      .style('cursor', 'pointer');

    // Animate points appearing with staggered timing
    return new Promise<void>((resolve) => {
      points.each(function(d, i) {
        d3.select(this)
          .transition()
          .delay(i * 100 + 500)
          .duration(800)
          .ease(d3.easeElasticOut.amplitude(1).period(0.8))
          .attr('r', 4)
          .style('opacity', 1)
          .on('end', () => {
            if (i === portfolioData.length - 1) resolve();
          });
      });
    });
  };

  const animateEfficientFrontier = async (g: d3.Selection<SVGGElement, unknown, null, undefined>, xScale: d3.ScaleLinear<number, number>, yScale: d3.ScaleLinear<number, number>) => {
    const line = d3.line<FrontierPoint>()
      .x(d => xScale(d.risk))
      .y(d => yScale(d.return))
      .curve(d3.curveBasis);

    const path = g.append('path')
      .datum(frontierData)
      .attr('class', 'frontier-curve')
      .attr('d', line)
      .style('fill', 'none')
      .style('stroke', '#0A382C')
      .style('stroke-width', 3)
      .style('stroke-linecap', 'round');

    const totalLength = (path.node() as SVGPathElement).getTotalLength();

    path
      .attr('stroke-dasharray', totalLength + ' ' + totalLength)
      .attr('stroke-dashoffset', totalLength);

    return new Promise<void>((resolve) => {
      path
        .transition()
        .duration(2000)
        .ease(d3.easeQuadInOut)
        .attr('stroke-dashoffset', 0)
        .on('end', resolve);
    });
  };

  const animateOptimalPoints = async () => {
    return new Promise<void>((resolve) => {
      d3.selectAll('.portfolio-point.optimal')
        .transition()
        .duration(800)
        .ease(d3.easeBackOut.overshoot(1.7))
        .attr('r', 6)
        .transition()
        .duration(400)
        .attr('r', 4)
        .on('end', function(d, i) {
          if (i === 0) resolve(); // Resolve on first element end
        });
    });
  };

  const addContinuousAnimation = () => {
    const breathe = () => {
      d3.selectAll('.portfolio-point.optimal')
        .transition()
        .duration(3000)
        .ease(d3.easeSinInOut)
        .attr('r', 5)
        .transition()
        .duration(3000)
        .ease(d3.easeSinInOut)
        .attr('r', 4)
        .on('end', breathe);
    };
    breathe();
  };

  const startAnimation = async () => {
    if (isAnimating) return;
    setIsAnimating(true);

    const chartElements = setupChart();
    if (!chartElements) return;

    const { g, xScale, yScale } = chartElements;

    try {
      // Phase 1: Animate portfolio points
      await animatePortfolioPoints(g, xScale, yScale);
      
      // Phase 2: Draw efficient frontier
      await animateEfficientFrontier(g, xScale, yScale);
      
      // Phase 3: Highlight optimal portfolios
      await animateOptimalPoints();
      
      // Phase 4: Add continuous breathing animation
      addContinuousAnimation();
      
      setAnimationComplete(true);
    } catch (error) {
      console.error('Animation error:', error);
    } finally {
      setIsAnimating(false);
    }
  };

  const resetAnimation = () => {
    if (!svgRef.current) return;
    
    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();
    setAnimationComplete(false);
    setIsAnimating(false);
    
    setTimeout(() => startAnimation(), 100);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isAnimating && !animationComplete) {
            startAnimation();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [isAnimating, animationComplete]);

  return (
    <div 
      ref={containerRef}
      className="hero-animation-container relative flex items-center justify-center min-h-[500px] bg-gradient-to-br from-[#F5F5F7] to-[#E8E8EA] rounded-2xl overflow-hidden"
    >
      <div className="chart-wrapper relative max-w-full">
        <svg
          ref={svgRef}
          width={width}
          height={height}
          viewBox={`0 0 ${width} ${height}`}
          className="w-full h-auto filter drop-shadow-lg"
        >
          {/* SVG content will be populated by D3 */}
        </svg>
        
        <div className="chart-controls absolute bottom-4 right-4">
          <button
            onClick={resetAnimation}
            className="px-4 py-2 bg-white/80 hover:bg-white border border-[#0A382C]/20 text-[#0A382C] rounded-lg text-sm font-medium transition-all hover:scale-105 backdrop-blur-sm"
            disabled={isAnimating}
          >
            {isAnimating ? 'Animating...' : '▶ Replay'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EfficientFrontierAnimation;
