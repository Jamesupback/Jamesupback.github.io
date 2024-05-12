function Nav(){
    return (
        <nav className='bg-nicegreen overflow-hidden fixed w-full z-50'>
            <ul className='flex justify-center p-2 md:justify-end'>
                <li className='text-xl p-2 mx-2 md:mx-12 font-semibold'><a href="#projects">Projects</a></li>
                <li className='text-xl p-2 mx-2 md:mx-12 font-semibold'><a href='#certifications'>Certifications</a></li>
                <li className='text-xl p-2 mx-2 md:mx-12 font-semibold'><a href='#footer'>Contact</a></li>
            </ul>
        </nav>
    )
}

export default Nav