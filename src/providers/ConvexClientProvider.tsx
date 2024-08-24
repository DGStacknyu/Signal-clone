"use client";

import { FC, ReactNode } from "react";
import { ClerkProvider, useAuth } from "@clerk/clerk-react";
import { ConvexReactClient } from "convex/react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { Authenticated, Unauthenticated } from "convex/react";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import { FaSignalMessenger } from "react-icons/fa6";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ConvexClientProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const convex = process.env.NEXT_PUBLIC_CONVEX_URL!;
  const convexPublishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!;

  return (
    <ClerkProvider publishableKey={convexPublishableKey}>
      <ConvexProviderWithClerk
        client={new ConvexReactClient(convex)}
        useAuth={useAuth}
      >
        <Authenticated>{children}</Authenticated>
        <Unauthenticated>
          <div className="bg-slate-900 w-svw h-dvh grid place-content-center">
            <div className="grid place-content-center mb-5">
              <FaSignalMessenger size={100} className="text-primary-main" />
            </div>

            <Card className="bg-slate-800 w-[350px] border-none shadow-xl text-center">
              <CardHeader>
                <CardTitle className="text-white">Authenticate</CardTitle>
              </CardHeader>
              <CardContent className="text-white">
                <SignInButton />
              </CardContent>
            </Card>
          </div>
        </Unauthenticated>
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
};
export default ConvexClientProvider;
