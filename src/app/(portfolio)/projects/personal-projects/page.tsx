import { ColumnCards } from "../../components/personal-card/ColumnCards";


export const metadata = {
    title: 'Personal Projects',
    description: 'Personal Projects by Kevin Reyes',
    keywords: ['Personal Projects', 'Kevin Reyes', 'Portfolio'],
};

export default function PersonalPage() {
    return (
        <div className="mt-12">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold  md:px-12">
                Personal Projects
            </h1>

            <section className="mt-14  md:px-0 w-full">
                <ColumnCards />
            </section>
        </div>
    );
}
