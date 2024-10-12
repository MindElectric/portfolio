import telmex from '../../../../../public/imgs/logos/company-logos/Telmex-Logo.png'
import capufe from '../../../../../public/imgs/logos/company-logos/logo_capufe.png'
import grupoCruces from '../../../../../public/imgs/logos/company-logos/logo_grupo_cruces.png'
import pequeño from '../../../../../public/imgs/logos/company-logos/Pequeños_logo.png'
import Image from 'next/image'

const logos = [
    telmex,
    capufe,
    grupoCruces,
    pequeño
]

export const LogoScroll = () => {
    return (
        <div className=" w-[25rem] xs:w-[34rem] md:w-full inline-flex flex-nowrap overflow-hidden bg-gray-200 [mask - image: _linear - gradient(to_right, transparent_0, _black_128px, _black_calc(100 % -200px), transparent_100 %)]">
            <ul className="flex items-center  justify-center md:justify-start [&_li]:mx-[90px] [&_img]:max-w-none animate-infinite-scroll">
                {logos.map((logo, index) => (
                    <li key={index}>

                        <Image
                            src={logo}
                            alt={`Logo ${index}`}
                            className='w-40 md:w-48 opacity-35'

                        />
                    </li>
                ))}
            </ul>
            <ul className="flex items-center  justify-center md:justify-start [&_li]:mx-[90px] [&_img]:max-w-none animate-infinite-scroll">
                {logos.map((logo, index) => (
                    <li key={index}>

                        <Image
                            src={logo}
                            alt={`Logo ${index}`}
                            className='w-40 md:w-48 opacity-35'

                        />
                    </li>
                ))}
            </ul>
        </div>
    )
}
