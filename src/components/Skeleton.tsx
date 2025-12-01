interface SkeletonProps {
  className?: string;
  width?: string | number;
  height?: string | number;
  variant?: 'text' | 'circular' | 'rectangular';
}

export const Skeleton: React.FC<SkeletonProps> = ({ 
  className = '', 
  width, 
  height, 
  variant = 'rectangular' 
}) => {
  const baseStyles = "animate-pulse bg-gray-200 dark:bg-gray-700";
  const variantStyles = {
    text: "rounded-md",
    circular: "rounded-full",
    rectangular: "rounded-xl"
  };

  return (
    <div 
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      style={{ width, height }}
    />
  );
};
