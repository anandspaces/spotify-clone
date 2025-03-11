import React from "react";

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const Avatar: React.FC<AvatarProps> = ({ className, children, ...props }) => {
  return (
    <div
      className={`relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

interface AvatarImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
}

const AvatarImage: React.FC<AvatarImageProps> = ({ className, ...props }) => {
  return (
    <img
      className={`aspect-square h-full w-full object-cover ${className}`}
      {...props}
    />
  );
};

interface AvatarFallbackProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const AvatarFallback: React.FC<AvatarFallbackProps> = ({ className, children, ...props }) => {
  return (
    <div
      className={`flex h-full w-full items-center justify-center rounded-full bg-zinc-700 text-white font-medium ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export { Avatar, AvatarImage, AvatarFallback };
