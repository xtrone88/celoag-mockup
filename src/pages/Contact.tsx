import useMetaTags from "react-metatags-hook";
import MapComponent from "../components/MapComponent";

const Contact = () => {
    useMetaTags({
        title: `CLEO AG | Contact`,
        description: `So finden Sie uns in Zürich.`
    });
      
    return (
        <>
            <div className="pb-10">
                <div>
                    <MapComponent style={{width: "100%", height: "400px"}}></MapComponent>
                </div>
            </div>
            <div className="py-5 px-4 md:px-16 lg:px-20">
                <div id="Kontakt" className="text-xl md:text-2xl bg-indigo font-mont-semibold">Kontakt</div>
                <div className="py-5 text-6xl font-mont-semibold">Wir freuen uns auf Sie</div>
                <div className="grid lg:grid-cols-2">
                    <div className="py-4">
                        <div className="py-4">
                            <input type="text" className="w-full text-sm rounded-sm border-b-1 border-t-0 border-r-0 border-l-0" placeholder="Name" />
                        </div>
                        <div className="py-4">
                            <input type="text" className="w-full text-sm rounded-sm border-b-1 border-t-0 border-r-0 border-l-0" placeholder="Email" />
                        </div>
                        <div className="py-4">
                            <textarea className="w-full h-60 text-sm rounded-sm border-b-1 border-t-0 border-r-0 border-l-0" placeholder="Message"></textarea>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row py-0 order-first lg:order-last lg:px-20">
                        <div className="flex flex-col md:col-span-1 pr-8">
                            <p className="text-2xl font-mont-semibold py-8">Adresse</p>
                            <p>Stampfenbachstrasse 57</p>
                            <p>8006 Zürich</p>
                            <p>Schweiz</p>
                        </div>
                        <div className="flex flex-col md:col-span-1">
                            <p className="text-2xl font-mont-semibold py-8">Kontakt</p>
                            <p>Tel: +41 43 542 95 24</p>
                            <p>Email: info@cleoag.ch</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;