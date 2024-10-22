import Link from 'next/link'

export default function NotFound() {
    return (
        <div className='flex flex-col justify-center items-center h-screen'>
            <div className='text-center'>
                <h2 className='text-[10rem] pb-9'>🤨</h2>
                <p className='text-xl md:text-3xl mb-4'>...What are you doing here?</p>
                <Link href="/" className='text-lg'>Return Home</Link>
            </div>
        </div>
    )
}