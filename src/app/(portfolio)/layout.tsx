import { ToggleDarkMode } from "@/components/ui/toggle-mode/ToggleDarkMode";
import { TopMenu } from "@/components/ui/top-menu/top-menu";

export default function PortfolioLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="min-h-screen  ">
            <header className="px-8 md:px-12">
                <TopMenu />
            </header>
            <div className="flex justify-end px-8 md:px-12 mt-3"><ToggleDarkMode /></div>
            <div className="pt-2 flex flex-col items-center md:block mb-20">{children}</div>
            {/* <footer className="mt-20"></footer> */}
        </main>
    );
}