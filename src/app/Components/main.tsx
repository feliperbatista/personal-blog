import { ReactNode } from 'react';

export default function Main({ children }: { children: ReactNode }) {
  return <div className="grid grid-cols-1 md:grid-cols-2">{children}</div>;
}
