import { TopMenu } from "@/components/ui/top-menu/top-menu";

export default function PortfolioLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="min-h-screen flex flex-col items-center md:block ">
            <header className="px-8 md:px-12">
                <TopMenu />
            </header>
            <div className="pt-2">{children}</div>
            <footer className="mt-20">© 2022 Kevin Reyes. All rights reserved.</footer>
        </main>
    );
}