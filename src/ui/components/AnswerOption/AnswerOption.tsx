import React from 'react';

import type { IProps } from './types/IProps';

const checkSvg = (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <circle cx="16" cy="16" r="16" fill="url(#paint0_linear)" />
    <path
      d="M10 17L15 22L22 13"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient
        id="paint0_linear"
        x1="0"
        y1="0"
        x2="32"
        y2="31"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#CA81FF" />
        <stop offset="1" stopColor="#995AFE" />
      </linearGradient>
    </defs>
  </svg>
);

const AnswerOption: React.FC<IProps> = ({
  label,
  value,
  selected,
  onChange,
  disabled = false,
  className,
}) => (
  <div
    style={{
      display: 'inline-block',
      border: '2px dashed #A881FE',
      borderRadius: '16px',
      padding: '24px 36px',
      background: '#272436',
      boxSizing: 'border-box',
    }}
    className={className}
  >
    <label
      style={{
        display: 'flex',
        alignItems: 'center',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
        fontWeight: selected ? 700 : 500,
        fontSize: selected ? 28 : 24,
        color: selected ? '#CA81FF' : '#7A6BA3',
        borderRadius: '12px',
        background: selected ? 'rgba(202,129,255,0.06)' : 'transparent',
        gap: 16,
        transition: 'background 0.2s, color 0.2s',
        minWidth: 220,
        minHeight: 64,
      }}
      aria-disabled={disabled}
    >
      <input
        type="radio"
        checked={selected}
        onChange={() => onChange(value)}
        value={value}
        disabled={disabled}
        style={{ display: 'none' }}
        aria-label={label}
      />
      <span
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 50,
          height: 50,
          borderRadius: '50%',
          background: selected
            ? 'linear-gradient(135deg, #CA81FF 0%, #995AFE 100%)'
            : 'transparent',
          border: selected ? 'none' : '2px solid #7A6BA3',
          marginRight: 16,
        }}
      >
        {selected ? checkSvg : null}
      </span>
      <span>{label}</span>
    </label>
  </div>
);

export default AnswerOption;
