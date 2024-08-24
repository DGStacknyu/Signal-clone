import { FC, ReactNode, useEffect, useState } from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { useSidebarWidth } from "@/hooks/UseSidebarWidth";

type SharedLayoutProps = {
  children: ReactNode;
  SidebarComponent: FC<any>;
  SidebarProps?: any;
};
const SharedLayout: FC<SharedLayoutProps> = ({
  children,
  SidebarComponent,
  SidebarProps,
}) => {
  const [isRendered, setIsRendered] = useState(false);
  const { setSidebarWidth, sidebarWidth } = useSidebarWidth();

  useEffect(() => {
    setIsRendered(true);
  }, []);

  if (!isRendered) return null;
  return (
    <>
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel
          maxSize={40}
          minSize={20}
          onResize={(width) => setSidebarWidth(width)}
          defaultSize={sidebarWidth}
        >
          <SidebarComponent {...SidebarProps} />
        </ResizablePanel>
        <ResizableHandle
          className="border-r border-r-gray-400 dark:border-r-gray-800"
          withHandle
        />
        <ResizablePanel className="!overflow-y-auto my-20">
          <div className="h-full hidden md:block">{children}</div>
        </ResizablePanel>
      </ResizablePanelGroup>
      <div className="md:hidden">{children}</div>
    </>
  );
};

export default SharedLayout;
