import React from "react";
import { SidebarContainer } from "@/components/Base/SidebarContainer";
import ChatList from "@/components/Chats/ChatList";
import NewGroup from "./NewGroup";

const ChatSidebar = () => {
  return (
    <SidebarContainer title="Chats" trigger={<NewGroup />}>
      <ChatList />
    </SidebarContainer>
  );
};

export default ChatSidebar;
