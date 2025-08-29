import Nav from "../Nav";

function Header() {
    return (
        <header>
            <div className="flex justify-between my-6">
                <h1 className="text-2xl font-bold ml-4 uppercase">AD Consulting</h1>
                <Nav />
            </div>
        </header>
    )
}

export default Header;