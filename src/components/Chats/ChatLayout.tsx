"use client";

import { FC, ReactNode } from "react";
import SharedLayout from "@/components/Base/SharedLayout";
import ChatSidebar from "./ChatSidebar";

type ChatsLayoutProps = {
  children: ReactNode;
};

export const ChatsLayout: FC<ChatsLayoutProps> = ({ children }) => {
  return (
    <SharedLayout SidebarComponent={() => <ChatSidebar />}>
      {children}
    </SharedLayout>
  );
};
