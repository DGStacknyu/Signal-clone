"use client";

import NavigationBar from "@/components/Base/NavigationBar";
import { MeetingRoom } from "@/components/Call/MeetingRoom";
import { FC } from "react";

const Room: FC<{ params: { room: string } }> = ({ params: { room } }) => {
  return (
    <>
      <NavigationBar trigger={null} />
      <MeetingRoom chatId={room} />
    </>
  );
};

export default Room;
