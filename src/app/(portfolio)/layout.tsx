import { TopMenu } from "@/components/ui/top-menu/top-menu";

export default function PortfolioLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="min-h-screen px-12">
            <TopMenu />
            <div className="pt-2">{children}</div>
        </main>
    );
}