import Nav from "../Nav";

function Header() {
    return (
        <header>
            <div className="flex justify-between my-6">
                <h1 className="text-xl font-bold ml-4">AD Consulting</h1>
                <Nav />
            </div>
        </header>
    )
}

export default Header;