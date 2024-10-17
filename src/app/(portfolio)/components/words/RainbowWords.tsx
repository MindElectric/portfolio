
interface textProps {
    text: string
}


export const RainbowWords = ({ text }: textProps) => {

    return (
        <div>
            {text.split('').map((letter, index) => (
                <span
                    key={index}
                    className={`animate-bounce inline-block animation-delay-${index % 10} motion-reduce:animate-none`}
                    style={{
                        animationDelay: `${index * 0.1}s`,
                        color: `hsl(${(index * 36) % 360}, 100%, 50%)`,
                    }}
                >
                    {letter}
                </span>
            ))}
        </div>
    )
}
