"use client";

import NavigationBar from "@/components/Base/NavigationBar";
import { Id } from "../../../../convex/_generated/dataModel";
import ChatContent from "@/components/Chats/ChatContent";

const ChatId = ({
  params: { chatId },
}: {
  params: { chatId: Id<"conversations"> };
}) => {
  return (
    <>
      <div className="hidden md:block">
        <NavigationBar trigger="" />
      </div>
      <ChatContent chatId={chatId} />
    </>
  );
};

export default ChatId;
