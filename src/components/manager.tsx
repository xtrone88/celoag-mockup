type managerProps = {
    name: string,
    jobtitle: string,
    image: string
}

const Manager = ({ name, jobtitle, image }: managerProps) => {
    return (
        <div className="md:col-span-3">
            <div className="cart-width md:-mt-16 mx-5 my-4 md:my-16 p-5 bg-gray-50 shadow-2xl relative has-overlay">
                <div className="">
                    <img className="w-full" src={image} alt="Chief Executive Officer" />
                    <div className="mt-5 text-lg">{name}</div>
                    <div className="mt-5 text-lg font-mont-semibold">{jobtitle}</div>
                </div>
                <div className="flex flex-row absolute top-0 left-0 w-full h-full overflow-auto bg-indigo-800 text-white px-2 sm:px-8 md:px-2 lg:px-8 py-12 md:py-4 lg:py-12 opacity-0">
                    <div>
                        <div className="text-xl md:text-md lg:text-xl my-4">MELANIE MERZ</div>
                        <div className="font-mont-semibold text-xl md:text-md lg:text-xl my-4">Human Resource Managerin</div>
                        <div className="text-lg md:text-sm lg:text-md">Bietet intelligente Consulting-Dienstleistungen und Software-Lösungen sowie auf den Kunden zugeschnittene Designs in der Softwareentwi cklung für Enterprise-Kunden. Unser Portfolio beginnt beim IT-Consulting und endet bei der Programmierung, dem Testing und der Integration modernster Enterprise Anwendungen. Gemeinsam mit Ihnen diskutieren und konzeptionieren wir </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Manager;