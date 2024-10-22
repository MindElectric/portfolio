import { WorkCardGrid } from "../../components/work-card/WorkCardGrid";

export const metadata = {
    title: 'Work Projects',
    description: 'Work Projects by Kevin Reyes',
    keywords: ['Work Projects', 'Kevin Reyes', 'Portfolio'],
};

export default function WorkPage() {
    return (
        <div className="mt-12">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold px-8 md:px-12">
                Work Projects
            </h1>

            <section className="mt-14 px-8 md:px-12">
                <WorkCardGrid />
            </section>
        </div>
    );
}
