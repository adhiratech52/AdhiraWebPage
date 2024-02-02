import { Disclosure } from '@headlessui/react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import React from 'react';
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import Signdialog from "./Signdialog";
import Registerdialog from "./Registerdialog";


interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
}

const navigation: NavigationItem[] = [
    { name: 'Our Team', href: 'team', current: false },
    { name: 'Pricing', href: 'pricing', current: false },
    { name: 'Products', href: 'products', current: false },
    { name: 'Blog', href: 'blog', current: true },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const Navbar = () => {

    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <Disclosure as="nav" className="navbar">
            <>
                <div className="mx-auto max-w-6xl px-6 md:py-0 lg:px-10 ">
                    <div className="relative flex h-20 items-center justify-between">
                        <div className="flex items-center sm:items-stretch sm:justify-start" >

                            <div className="flex flex-shrink-0 items-center">
                                <Link href={'/'}>
                                <h1 className='text-black text-4xl text-center lg:text-start md:text-30xl lh-133'>Adhira</h1>
                                </Link>
                            </div>
                        </div>
                        <div className="hidden lg:block ml-20">
                            <div className="flex space-x-8">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className={classNames(
                                            item.current ? ' text-black hover:opacity-75' : 'hover:text-black hover:opacity-75',
                                            'px-3 py-4 text-lg font-normal text-black space-links'
                                        )}
                                        aria-current={item.href ? 'page' : undefined}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-shrink-0 items-center">
                        <div className='pt-0 mx-auto lg:mx-0'>
                            <Link href={'/login'}>
                            <button className="text-white text-md font-medium py-3 px-10 rounded-full transition duration-150 ease-in-out bg-electricblue hover:text-white hover:bg-blue">
                                Log In
                            </button>
                            </Link>
                        </div>
                        </div>
                        <div className='block lg:hidden'>
                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" onClick={() => setIsOpen(true)} />
                        </div>
                        <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
                            <Drawerdata />
                        </Drawer>

                    </div>

                </div>
            </>
        </Disclosure>
    )
}

export default Navbar;
