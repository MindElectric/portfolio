
export default function HomePage() {
    return (
        <>
            <div className="block md:flex md:min-h-96 justify-between items-center">
                <div>
                    <div className="text-xl md:text-2xl lg:text-3xl">My Name is</div>
                    <div className="text-4xl md:text-5xl lg:text-6xl">Kevin Reyes</div>
                </div>
                <div className="mt-8">
                    Carousel here
                </div>
            </div>

            <div className="h-1/2">
                <div className="text-xl md:text-2xl lg:text-3xl">My Projects</div>
            </div>
        </>
    );
}
