import SideNavigation from '@/components/profile/SideNavigation';
import React from 'react';

export default function AccountLayout({
  children,
}: Readonly<{ children: React.ReactElement }>) {
  return (
    <div className="grid h-full grid-cols-[16rem_1fr] gap-10">
      <SideNavigation />
      <div className="py-1">{children}</div>
    </div>
  );
}
