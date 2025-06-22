import React from 'react';
import { useCounterAnimation } from '../hooks/useScrollAnimation';

interface CounterDisplayProps {
  endValue: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

const CounterDisplay: React.FC<CounterDisplayProps> = ({
  endValue,
  suffix = '',
  prefix = '',
  duration = 2500,
  className = ''
}) => {
  const { elementRef, count } = useCounterAnimation(endValue, duration, suffix);

  return (
    <span ref={elementRef} className={className}>
      {prefix}{count}
    </span>
  );
};

export default CounterDisplay;