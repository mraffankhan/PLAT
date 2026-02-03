import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  children, 
  icon,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-display uppercase tracking-wider transition-all duration-300 transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed clip-path-slant";
  
  const variants = {
    primary: "bg-nexus-blue text-black hover:bg-white hover:shadow-[0_0_20px_rgba(0,240,255,0.5)] font-bold skew-x-[-10deg]",
    secondary: "bg-nexus-card text-white hover:bg-nexus-dark border border-nexus-blue/30 hover:border-nexus-blue font-semibold skew-x-[-10deg]",
    outline: "border-2 border-nexus-blue text-nexus-blue hover:bg-nexus-blue hover:text-black font-bold skew-x-[-10deg]",
    ghost: "text-nexus-gray hover:text-white font-medium"
  };

  const sizes = {
    sm: "text-sm px-4 py-1",
    md: "text-base px-6 py-2",
    lg: "text-lg px-8 py-3"
  };

  // Revert skew for content so text isn't slanted
  const contentSkew = variant !== 'ghost' ? "skew-x-[10deg]" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      <span className={`flex items-center gap-2 ${contentSkew}`}>
        {icon && <span className="w-5 h-5">{icon}</span>}
        {children}
      </span>
    </button>
  );
};

export default Button;
