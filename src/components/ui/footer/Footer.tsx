import { Github, Linkedin } from "lucide-react"
import Link from "next/link"
export const Footer = () => {
    return (
        <footer className="bg-blue-800 dark:bg-blue-900 w-full h-full mt-20 py-6">
            <div className="block md:flex justify-around mx-10 md:mx-20 lg:mx-40">
                {/* Start of grid */}
                <div>
                    <h3 className="text-xl md:text-2xl font-bold text-slate-200">Find Me On</h3>
                    <div className="text-base text-slate-200 mt-2">
                        <span className="flex mt-2">
                            <Github />
                            <Link href="https://github.com/MindElectric" target="_blank" className="ml-2 underline underline-offset-2">GitHub</Link>
                        </span>
                        <span className="flex mt-4">
                            <Linkedin />
                            <Link href="https://www.linkedin.com/in/kevrey08" target="_blank" className="ml-2 underline underline-offset-2">LinkedIn</Link>
                        </span>
                    </div>
                </div>

                <div className="mt-10 md:mt-0">
                    <h3 className="text-xl md:text-2xl font-bold text-slate-200">Contact Me</h3>
                    <div className="text-base text-slate-200 mt-2">kevin2801@outlook.com</div>
                </div>
            </div>
            <div className="text-center text-xs text-slate-200 mt-6">
                © 2024 Kevin Reyes. All rights reserved.
            </div>
        </footer>
    )
}
