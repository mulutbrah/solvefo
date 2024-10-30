import { Button } from "@/components/ui/button";
import { SignOutButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Button>
        <SignOutButton>Log Out</SignOutButton>
      </Button>
    </div>
  );
}
