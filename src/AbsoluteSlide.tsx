import React, { useState } from 'react';
import './AbsoluteSlide.css';

type Props = {
  value?: number;
  min?: number;
  max?: number;
  step?: number;
  onChange: (value: number) => void;
  children: React.ReactNode;
};

const AbsoluteSlide: React.FC<Props> = ({value, min=-50, max=100, step=1, onChange, children}) => {
  const [mousePressed, setMousePressed] = useState(false);
  let _startX = 0;

  const handleMouseUp = () => {
    setMousePressed(false);
    
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.button !== 0 ) return
    event.preventDefault();
    setMousePressed(true);
    _startX = event.clientX;

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = (event: MouseEvent) => {
    if (onChange) {
      const newValue = calculateNewValue(event.clientX);
      onChange(newValue);
    }
  };

  const calculateNewValue = (currentX: number) => {
    const deltaX = currentX - _startX;
    const changeUnit = deltaX * step;
    let newValue = value ? value + changeUnit : changeUnit;

    if (min && newValue < min) {
      if ((!value || value < min)) newValue = min + changeUnit;
      newValue = Math.max(newValue, min);
    }

    if (max && newValue > max) {
      if ((!value || value > max)) newValue = max + changeUnit;
      newValue = Math.min(newValue, max);
    }

    if (min && max) {
        newValue = Math.max(min, Math.min(newValue, max));
    }

    return newValue;
  };

  const cx = [
    'ASlide',
    mousePressed ? 'isPressed' : undefined
  ].filter(Boolean).join(' ')

  return(
    <span className={cx} onMouseDown={handleMouseDown} >
      {children}
    </span>
  )
}

export default AbsoluteSlide;