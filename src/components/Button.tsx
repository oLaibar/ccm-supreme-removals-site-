import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import React from "react";

interface ButtonProps {
  children?: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  icon?: React.ReactNode;
  fullWidth?: boolean;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  icon,
  fullWidth,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full active:scale-95 min-h-[44px]";
  
  const variants = {
    primary: "bg-gradient-to-r from-brand-accent to-[#E53E3E] text-white shadow-md hover:shadow-premium-hover hover:-translate-y-0.5",
    secondary: "bg-gradient-to-r from-brand-navy to-brand-blue text-white shadow-md hover:shadow-premium-hover hover:-translate-y-0.5",
    outline: "border-2 border-brand-navy/20 text-brand-navy hover:border-brand-navy hover:bg-brand-navy hover:text-white hover:shadow-premium-hover hover:-translate-y-0.5",
    ghost: "text-brand-navy hover:bg-slate-100 hover:text-brand-accent",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${fullWidth ? "w-full" : ""} ${className}`;

  const content = (
    <>
      {children}
      {icon && <span className="ml-2">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <Link to={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={classes}
      {...props}
    >
      {content}
    </motion.button>
  );
}
