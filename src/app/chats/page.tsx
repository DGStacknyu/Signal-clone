"use client";
import NavigationBar from "@/components/Base/NavigationBar";
import { MobileChatContent } from "@/components/Chats/MobileChatContent";
import NewGroup from "@/components/Chats/NewGroup";
import { FaSignalMessenger } from "react-icons/fa6";

const ChatPage = () => {
  return (
    <>
      <NavigationBar trigger={<NewGroup />} />
      <div className="hidden md:grid h-full max-w-56 text-center mx-auto place-content-center">
        <FaSignalMessenger className="mx-auto text-primary-main" size={200} />
        <p className="text-sm mt-5 text-primary-main">
          Welcome to messenger! Start a new chat or select an existing one to
          get started.
        </p>
      </div>
      <div className="md:hidden flex flex-col space-y-2">
        <MobileChatContent />
      </div>
    </>
  );
};

export default ChatPage;
