import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-full min-h-screen bg-background dark:bg-zinc-900">
      <Sidebar />
      <div className="h-screen w-full grow lg:pb-2 lg:pr-2 lg:pt-2">
        <div className="h-full divide-border overflow-clip border-border bg-zinc-50 bg-clip-border ring-border dark:bg-zinc-950 md:border-l lg:rounded-lg lg:border">
          <div className="no-scrollbar flex h-full flex-col overflow-y-auto">
            <Header />
            <div className="mx-auto h-full w-full max-w-screen-2xl px-4 md:px-6">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
