"use client";

import NavigationBar from "@/components/Base/NavigationBar";
import CallContent from "@/components/Call/CallContent";
import NewGroup from "@/components/Chats/NewGroup";

const Calls = () => {
  return (
    <>
      <NavigationBar trigger={<NewGroup />} />
      <CallContent />
    </>
  );
};

export default Calls;
