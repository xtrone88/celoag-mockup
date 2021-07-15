import Assets from "../assets/assets";
import AboutCartList from "../assets/aboutcartlist";
import Abstract from "../sections/Abstract";
import useMetaTags from "react-metatags-hook";

const AboutUs = () => {

    useMetaTags({
        title: `CLEO AG | About Us`,
        description: `Die CLEO AG stellt massgeschneiderte IT-Services zur Verfügung und unterstützt bei der Umsetzung komplexer digitaler Produktideen. Unser kompetentes Team steht jederzeit für Change Prozesse, Innovations-Gespräche oder -Workshops rund um die IT-Themen eines Unternehmens oder einer Organisation zur Seite.`
    });

    return (
        <>
            <Abstract header="About Us" content="Die CLEO AG stellt massgeschneiderte IT-Services zur Verfügung und unterstützt bei der Umsetzung komplexer digitaler Produktideen. Unser kompetentes Team steht jederzeit für Change Prozesse, Innovations-Gespräche oder -Workshops rund um die IT-Themen eines Unternehmens oder einer Organisation zur Seite. " />
            <div className="text-center">
                <div className="text-2xl md:text-4xl py-10 md:py-16">WAS WIR KÖNNEN</div>
                <div className="flex md:flex-row md:px-16 pb-16 flex-wrap justify-center">
                    {
                        AboutCartList.map((item, index) => (
                            <div className="px-8" key={index}>
                                <img src={item.src} alt="Logo" />
                                <div className="text-lg md:text-xl font-mont-semibold pt-4 pb-10">{item.name}</div>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className="bg-gray-100 pb-20 md:pb-28">
                <div className=" md:px-10 xl:px-16">
                    <div className="grid grid-cols-2 pt-10 md:pt-32 pb-12 px-4 md:px-7">
                        <div className="col-start-1 md:col-start-2 col-span-2 md:col-span-1 z-10">
                            <div className="pl-3 md:pl-7 text-3xl md:text-4xl lg:text-6xl border-l-8 border-indigo font-mont-semibold">Bedarfsanalyse</div>
                            <div className="py-10 box-max-width">Wir bieten Ihnen unsere volle Unterstützung bei der Entwicklung neuer Strategien sowie die Umsetzung digitaler Produktideen. Wir wissen, dass für den Erfolg dieser Vorhaben häufig komplexe Changeprozesse im Unternehmen initialisiert und umgesetzt werden müssen. Für die Umsetzung dieser sensiblen Massnahmen blicken wir auf langjährige Erfahrungen zurück und bieten dazu intelligente Innovationsgespräche oder -Workshops an. Produktanalysen, die Konzeption von Produkten, Prozessanalysen und -optimierungen gehören dabei genauso zu unserem Tagesgeschäft, wie die professionelle Beratung bei «Move to cloud»-Konzepten. Sprechen Sie und unverbindlich an - wir bieten fachlich fundierte Unterstützung.</div>
                        </div>
                        <div className="col-span-2 -mt-52 hidden md:block z-0">
                            <img className="w-full" src={Assets.images.aboutImage1} alt="Logo" />
                        </div>
                        <div className="col-span-2 -mt-32 block md:hidden z-0">
                            <img className="" src={Assets.images.aboutImage2} alt="Logo" />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between bg-white ">
                    <div className="flex-1 px-4 md:px-20 pt-4 pb-2 md:pt-10 md:pb-5 box-max-width">
                        <div className="py-4 font-mont-semibold">SOFTWAREENTWICKLUNG</div>
                        <div>Ob agil oder klassisch als Wasserfall - im Vorfeld der Zusammemarbeit definieren Sie gemeinsam mt den Spezialisten der  CLEO AG Ihre Anforderungen an die Software in Form von Epics und User Stories. Während die agile Softwareentwicklung bei der CLEO AG ohne ein detailliertes Pflichtenheft, aber mit detaillierten Anforderungen während des Prozesses dynamisch funktioniert, kann ein Wasserfall-Konzept dafür sorgen, dass ein Plus an Transparenz bei den einzelnen Programmierungsschritten gewährleistet wird. </div>
                    </div>
                    <div className="flex-1 px-4 md:px-20 pt-4 pb-2 md:pt-10 md:pb-5 box-max-width">
                        <div className="py-4 font-mont-semibold">PROJEKTMANAGEMENT</div>
                        <div>Wir begleiten Ihr Projekt von A bis Z, denn unsere Profis beherrschen das Projektmanagement mit HERMES, Wasserfallmodell, SCRUM oder Agile Factory. Ein professionelles Projektmanagement ist erfahrungsgemäss zu einem großen Teil verantwortlich für den Erfolg. Wir überlassen niemals das ein Projekt allein dem Zufall, dem Kunden oder unseren Spezialisten. Das umfasst selbstverständlich auch die Planung, diverse Analysen sowie das Anforderungs- und Qualitätsmanagement. Denn ein professionelles Projektmanagement reduziert Kosten und steigert die Qualität.</div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between bg-white ">
                    <div className="flex-1 px-4 md:px-20 pt-4 pb-2 md:pt-10 md:pb-5 box-max-width">
                        <div className="py-4 font-mont-semibold">PROZESSHARMONISIERUNG UND -STANDARDISIERUNG</div>
                        <div>Sie möchten Ihre Leistungen zentralisieren oder verlagern? Unsere Prozess-Spezialisten stehen Ihnen professionell zur Seite. Gemeinsam mit Ihnen analysieren sie Ihre IST-Situation. Sie bringen ein hohes Mass an Erfahrung in den Bereichen IT-Logistik, Produktionsprozessen und Durchlaufzeitenoptimierung mit. Zusammen mit Ihnen entwickeln und optimieren wir Ihr Prozessmodell, um Kosten zu minimieren, die Qualität zu erhöhen und optimal Zeit einzusparen. Anschliessend übernehmen unsere Spezialisten die Aufgaben und setzen sie - ressourcenschonend - um.</div>
                    </div>
                    <div className="flex-1 px-4 md:px-20 pt-4 pb-2 md:pt-10 md:pb-5 box-max-width">
                        <div className="py-4 font-mont-semibold">KNOW-HOW DEVELOPMENT</div>
                        <div>Wir unterstützen Sie professionell bei der Entscheidungsfindung sowie dem Ressourcenmanagement und sorgen mit Workshops und Weiterbildungen für Know-how-Transfer. Die Einhaltung der gesetzlichen, unternehmensinternen und vertraglichen Regelungen im Bereich der IT ist für uns unabdingbar. Hinsichtlich der Anforderungen bei Informationssicherheit, Verfügbarkeit, Datenaufbewahrung und Datenschutz gewährleisten wir bewährte Verfahren, Prozesse und Regelungen – zertifiziert und regelmässig unabhängig überprüft.</div>
                    </div>
                </div>
            </div>

            <div className="grid">
                <div className="justify-self-center">
                    <img className="pt-10 pb-0" src={Assets.images.aboutManager} alt="logo" />
                </div>
            </div>
        </>
    );
};

export default AboutUs;