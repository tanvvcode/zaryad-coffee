import React from 'react';
import { cn } from '../../lib/utils';

export interface SurfaceProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Surface: React.FC<SurfaceProps> = ({ className, children, ...props }) => (
  <div className={cn('rounded-2xl border border-black/10 dark:border-white/10', className)} {...props}>
    {children}
  </div>
);
