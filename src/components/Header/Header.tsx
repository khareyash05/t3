import { UserButton } from "@clerk/nextjs";

import Image from 'next/image'

import Logo from "~/assets/logo.png"

export default function Header(){
    return (
        <header className="w-full absolute left-0 top-0 p-6 lg:p-32">
            <div className="flex justify-between">
                <div>
                    <Image 
                        src={Logo} 
                        alt="Sample logo"
                        width={100}
                        height={70}
                        className="flex-initial"
                    />
                    <span>Design is everything...</span>
                </div>
            
                <div>
                    <ul className="flex">
                    <li className="ml-24">
                        <a href="">
                        <div className="flex items-center justify-end">
                            <div className="w-10 border-b border-solid border-white"></div>
                            <h1 className="ml-3 text-3xl font-bold">1</h1>
                        </div>
                        <div className="text-right">TailWind CSS</div>
                        </a>
                    </li>
                    <li className="ml-24">
                        <a href="">
                        <div className="flex items-center justify-end">
                            <div className="w-10 border-b border-solid border-white"></div>
                            <h1 className="ml-3 text-3xl font-bold">2</h1>
                        </div>
                        <div className="text-right">Components</div>
                        </a>
                    </li>
                    <li className="ml-24">
                        <a href="">
                        <div className="flex items-center justify-end">
                            <div className="w-10 border-b border-solid border-white"></div>
                            <h1 className="ml-3 text-3xl font-bold">3</h1>
                        </div>
                        <div className="text-right">CSS Modules</div>
                        </a>
                    </li>

                    <li className="ml-24">
                        <a href="">
                        <div className="flex items-center justify-end">
                            <div className="w-10 border-b border-solid border-white"></div>
                            <h1 className="ml-3 text-3xl font-bold">4</h1>
                        </div>
                        <div className="text-right">Build & Deploy</div>
                        </a>
                    </li>
                    <li className="ml-24">
                        <a href="">
                        <div className="flex items-center justify-end">
                            <UserButton afterSignOutUrl="/"/>
                        </div>
                        <div className="text-right">Logout</div>
                        </a>
                    </li>
                    </ul>
                </div>
            </div>
        </header>
    )    
}
