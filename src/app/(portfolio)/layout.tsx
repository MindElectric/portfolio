import { TopMenu } from "@/components/ui/top-menu/top-menu";

export default function PortfolioLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="min-h-screen">
            <TopMenu />
            <div>{children}</div>
        </main>
    );
}