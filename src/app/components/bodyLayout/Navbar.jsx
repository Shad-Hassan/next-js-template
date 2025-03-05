

const Navbar = () => {
    return (
        <>
            <NavbarContainer>

                <NavFlexBreaker>

                    <ul className="flex justify-end gap-3 ">
                        <li>Menu 1</li>
                        <li>Menu 2</li>
                        <li>Menu 3</li>
                    </ul>

                </NavFlexBreaker>

            </NavbarContainer>
        </>
    );
};

export default Navbar;


const NavbarContainer = ({ children }) => {
    return (
        <>
            <nav className="bg-black fixed z-100 top-0 right-0 w-full h-16">
                {children}
            </nav>
        </>
    )
}

const NavFlexBreaker = ({ children }) => {
    return (
        <>
            <div className="flex justify-between border border-white rounded-full py-4 px-2">
                {children}
            </div>
        </>
    )
}
