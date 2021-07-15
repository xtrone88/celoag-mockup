import Assets from "../assets/assets";

const Footer = () => {
    return (
        <div className="text-white" style={{ backgroundColor: '#021F8B' }}>
            <div className="px-4 lg:mx-16 py-20">
                <div className="grid grid-cols-2">
                    <div className="col-span-2 md:col-span-1">
                        <div className="flex flex-col md:flex-row px-4">
                            <div className="pr-5"><img src={Assets.images.svgLogo3} alt="Logo"></img></div>
                            <div className="flex flex-col">
                                <div className="py-1">Stampfenbachstrasse 57</div>
                                <div className="py-1">8006 Zürich</div>
                                <div className="py-1">Schweiz</div><br />
                                <div className="py-1">Tel: +41 43 542 95 24</div>
                                <div className="py-1">Email: info@cleoag.ch</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2 md:col-span-1 grid grid-cols-2 pt-4 md:pt-0">
                        <div className="px-4">
                            <div className="text-lg font-mont-semibold py-1">
                                <a href='/#WerWirSind'>Wer wir Sind</a>
                            </div>
                            <div className="py-1">
                                <a href='/career/#Karriere'>Karriere</a>
                            </div>
                            <div className="py-1">
                                <a href='/#Experten'>Unsere Experten</a></div>
                            <div className="py-1">
                                <a href='/contact/#Kontakt'>Kontakt</a>
                            </div>
                            <div className="py-1">
                                <a href='/#Management'>Management</a>
                            </div>
                        </div>
                        <div className="px-4">
                            <div className="text-lg font-mont-semibold py-1">Contact</div>
                            <a href="https://www.linkedin.com/company/cleoag/" className="py-1">Linkedln</a> <br />
                            <a href="mailto:info@cleoag.ch" className="py-1">Email</a> <br />
                            <a href="tel:+41435429524" className="py-1">Phone</a> <br />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;