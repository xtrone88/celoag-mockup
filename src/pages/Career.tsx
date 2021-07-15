import Assets from "../assets/assets";
import Abstract from "../sections/Abstract";
import Cart from "../components/cart";
import JobExam from "../sections/JobExam";
import useMetaTags from "react-metatags-hook";

const LocationContent = [
    { title: "SOFTWARE SOLUTION ARCHITEKT IN ZÜRICH (W/M/D)", location: "Zürich, Remote", content: "Zur Verstärkung unseres Teams in Zürich suchen wir einen motivierten und kompetenten Software Solution Architekt." },
    { title: "SENIOR JAVA SOFTWARE ENTWICKLER (W/M/D)", location: "Zürich, Bern", content: "Zur Verstärkung unseres Teams in Zürich und Bern suchen wir einen motivierten und kompetenten Software Engineer, Java." },
    { title: "FRONTEND SOFTWARE ENGINEER (W/M/D)", location: "Zürich, Remote", content: "Zur Verstärkung unseres Teams in Zürich und Bern suchen wir einen motivierten und kompetenten Software Engineer, Java." },
    { title: "JAVA SOFTWARE ENTWICKLER (W/M/D)", location: "Zürich, Remote", content: "Zur Verstärkung unseres Teams in Zürich suchen wir einen motivierten und kompetenten Software Engineer, Fontend." },
];

const MediumCardContent = [
    { src: Assets.images.imgMediumCart1, title: "Jeder ist befugt, autonom zu arbeiten", content: "Wir vertrauen darauf, dass erstaunliche Menschen erstaunliche Dinge tun. Denn wir wissen, dass die Loyalität des Arbeitgebers und regelmäßiges Feedback die wichtigsten Faktoren für eine gesundheitsförderliche Unternehmenskultur sind. " },
    { src: Assets.images.imgMediumCart2, title: "Unsere Mitarbeitenden", content: "Unser Team ist so vielfältig wie die Bandbreite unserer Projekte. Diversität gilt bei CLEO nicht nur für Geschlecht, Herkunft oder Alter, sondern ebenso für den akademischen Hintergrund unserer Teammitglieder. denn ein Team ist mehr als die Summe seiner Mitglieder." },
    { src: Assets.images.imgMediumCart3, title: "Es gibt keinen inneren Kreis", content: "Jeder - von der C-Suite bis zum Praktikanten - teilt bei der CLEO AG Informationen, Wissen und Ideen. Radikal transparent zu sein, hilft uns allen, wie Gründer zu denken und uns darauf zu konzentrieren, praktikable und profitable Lösungen für unsere Kunden zu finden. " },
    { src: Assets.images.imgMediumCart4, title: "Unterschiedliche Perspektiven werden gefeiert", content: "Wir glauben, dass unterschiedliche Perspektiven die  CLEO AG zu einem besseren Unternehmen werden lässt. Wir setzen uns gemeinsam dafür ein, ein vielfältiges und integratives Umfeld zu schaffen, in dem du dich zugehörig fühlst und Dein Potenzial ausspielen kannst." },
];

const Career = () => {

    useMetaTags({
        title: `CLEO AG | Career`,
        description: `Im Leben geht es nicht um einen Job sondern um einen Zweck`
    });

    return (
        <div>
            <Abstract id="Karriere" header="KARRIERE" content="Im Leben geht es nicht um einen Job sondern um einen Zweck" />
            <div className="px-0 md:px-10 py-10 bg-gray-light">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-items-center">
                    {
                        LocationContent.map((item, index) => (
                            <Cart index={index} key={index} title={item.title} location={item.location} content={item.content} />
                        ))
                    }
                </div>
                <div>
                    <img className="-mt-40" src={Assets.images.cleo} alt="CLEO"></img>
                </div>
            </div>

            <div className="px-4 md:px-16 pt-16 md:pt-10 bg-gray-light">
                <div className="pl-3 md:pl-10 text-3xl md:text-6xl font-mont-semibold border-l-8 border-indigo">Was der Job bei uns Dir bietet</div>

                <div className="relative grid p-0 lg:pt-32 lg:pr-32 lg:pl-32 lg:pb-0">
                    <div className="justify-self-center -mr-40 z-20 hidden lg:block">
                        <img src={Assets.images.imgSuggestMerge} alt="Suggest" className="w-96"></img>
                    </div>
                    <div className="lg:absolute lg:top-1/4 right-1/2 transform -translate-x-90 translate-y-10 z-10">
                        <div className="grid text-left md:text-center lg:text-left">
                            <div className="py-4 block lg:hidden md:place-self-center">
                                <img src={Assets.images.imgSuggestPart1} alt="Suggest Part1"></img>
                            </div>
                            <div className="py-8 lg:py-0 text-2xl">Arbeitszeit</div>
                            <div className="hidden lg:block">
                                <img className="py-4" src={Assets.images.imgSplitter2} alt="splitter"></img>
                            </div>
                            <div className="text-sm leading-8">
                                Individuelle (Jahres)- Arbeitszeiten<br />
                                Teilzeitarbeit, mobiles Arbeiten und Homeoffice<br />
                                Mindestens 25 Ferientage<br />
                                Unbezahlte Urlaube (Sabbaticals) möglich<br />
                                Attraktives Bonussystem auf Kundenprojekten
                            </div>
                        </div>
                    </div>
                    <div className="lg:absolute top-full right-1/2 transform -translate-x-90 translate-y-16 lg:-translate-y-16 z-10">
                        <div className="grid text-left md:text-center lg:text-left">
                            <div className="block lg:hidden md:place-self-center">
                                <img className="py-4" src={Assets.images.imgSuggestPart2} alt="Suggest part2"></img>
                            </div>
                            <div className="py-8 lg:py-0 text-2xl">Mobilität und Verpflegung</div>
                            <div className="hidden lg:block">
                                <img className="py-4" src={Assets.images.imgSplitter2} alt="splitter"></img>
                            </div>
                            <div className="text-sm leading-8">
                                Getränke und Verpflegung im Office <br />
                                ÖV-Abonnement <br />
                                Team Aktivitäten (Wochenendtrips, Abendessen, Konzerte...)<br />
                                Hardware Auswahl (Apple)<br />
                            </div>
                        </div>
                    </div>
                    <div className="pt-32 lg:pt-4 lg:absolute lg:top-1/2 right-1/4 transform lg:translate-x-3/4 -translate-y-9 z-10">
                        <div className="grid text-left md:text-center lg:text-left">
                            <div className="block lg:hidden md:place-self-center">
                                <img className="py-4" src={Assets.images.imgSuggestPart3} alt="Suggest part3"></img>
                            </div>
                            <div className="py-8 lg:py-0 text-2xl lg:pl-36">Balance<br/> und Freizeit</div>
                            <div className="hidden lg:block -ml-24">
                                <img className="py-4 -mr-96" src={Assets.images.imgSplitter2} alt="splitter"></img>
                            </div>
                            <div className="lg:pl-36 lg:w-96 text-sm leading-8">
                                Grosszügige Unterstützung bei internen und externen Aus- und Weiterbildungen<br/>
                                Strukturiertes Einführungsprogramm <br/>
                                Funktionsbezogene Lernprogramme/ Weiterbildungen <br/>
                                Zertifizierungsmöglichkeiten (Srcum, Clean Architecture...)
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pt-4 md:pt-10 lg:pt-80 flex flex-col md:flex-row bg-gray-light">
                <div className="pl-4 md:pl-16">
                    <div className="pl-3 md:pl-10 text-3xl md:text-6xl border-l-8 font-mont-semibold border-indigo">Unsere Projekte</div>
                    <div className="pt-10 pb-5 text-md">Software Engineering steht bei der CLEO AG für Vielfalt. Banken, Medizintechnik und Gesundheit, Versicherungen, Industrie, Telekommunikation, Transport und Mobilität. Und diese Aufzählung umfasst noch längst nicht das gesamte Spektrum. </div>
                    <div className="pt-5 text-md font-mont-semibold">Wir bei CLEO AG leben eine Kultur, in der großartige Menschen (wie Du) ihre beste Arbeit leisten können.</div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 pt-4 pr-4 md:pr-20 pl-4 md:pl-10">
                    <div className="pb-8">
                        <img src={Assets.images.JobImg1} alt="Logo"></img>
                        <div className="w-3/4 pt-4">Die Bahn von morgen: <span className="font-mont-semibold">Smart-Rail</span> der Schweizer Bundesbahn</div>
                    </div>
                    <div className="pb-8">
                        <img src={Assets.images.JobImg2} alt="Logo"></img>
                        <div className="w-3/4 pt-4">Motorsport in Stuttgart; <span className="font-mont-semibold">Simulations-Software für Prototypen</span></div>
                    </div>
                    <div className="pb-8">
                        <img src={Assets.images.JobImg3} alt="Logo"></img>
                        <div className="w-3/4 pt-4">Der grösste Automobilhersteller der Welt; Wir modellieren die Mobilität der Zukunft mit <span className="font-mont-semibold">Carsharing</span></div>
                    </div>
                    <div className="pb-8">
                        <img src={Assets.images.JobImg4} alt="Logo"></img>
                        <div className="w-3/4 pt-4">Wir gestalten die neue Art von Banking.<br /><span className="font-mont-semibold">Smart-Rail</span> im ganzen DACH-Raum.</div>
                    </div>
                    <div className="pb-8">
                        <img src={Assets.images.JobImg5} alt="Logo"></img>
                        <div className="w-3/4 pt-4">Wir digitalisieren Versicherungen.<br /> <span className="font-mont-semibold">Online Versicherungen</span></div>
                    </div>
                    <div className="pb-8">
                        <img src={Assets.images.JobImg6} alt="Logo"></img>
                        <div className="w-3/4 pt-4">Nachhaltige Energie liegt uns am Herzen. Wir sind Teil der <span className="font-mont-semibold">Smart City </span>und entwickeln die Stadt der Zukunft mit.</div>
                    </div>
                </div>
            </div>

            <div className="pt-4 md:pt-40 bg-gray-light  px-0 md:px-10">
                <div className="grid md:grid-cols-2 m-4 md:m-6">
                    <div className="border-2 border-gray rounded-xl p-5 md:p-10">
                        <img className="py-3" src={Assets.images.imgMediumCart} alt="logo"></img>
                        <div className="py-4 text-lg font-mont-semibold">Entwicklung</div>
                        <div>CLEO investiert in erheblichem Umfang in Fort- und Weiterbildung. Deine Chance, beruflich weiterzukommen, beginnt bei uns am ersten Tag.<br />Wir bauen auf eine Unternehmenskultur, in der persönliches und berufliches Wachstum genauso wichtig ist, wie geschäftliches Wachstum. Deshalb haben wir den CLEO-Kulturcode erstellt. Jedes Teammitglied wird individuell von unserem Coach beim Wachsen unterstützt.</div>
                    </div>
                    <div className="order-first md:order-last md:p-10">
                        <div className="pl-4 md:pl-7 text-2xl md:text-5xl lg:text-6xl border-l-8 border-indigo">Unsere Investment</div>
                        <div className="py-5 md:p-10">Die vergangenen Monate der Krise haben einmal mehr bewiesen, wie wettbewerbs-entscheidend es ist, motivierte und engagierte Mitarbeiter an Bord zu haben. Für uns bei der CLEO AG konzentrieren wir uns auf unsere Unternehmenskultur und ihre korrekte Umsetzung. Wir haben die Arbeitsumgebung und -zeiten sowie die Kommunikation angepasst. Diese neue, gelebte Unternehmenskultur spiegelt sich sich in motivierten Mitarbeitern und - letztendlich - in höheren Leistungen.</div>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ml-4 md:ml-10">
                    {
                        MediumCardContent.map((item, index) => (
                            <div key={index} className="border-2 border-gray rounded-xl p-4 mr-2 md:mr-4 my-2">
                                <img className="py-4 px-4" src={item.src} alt="logo"></img>
                                <div className="py-4 text-lg font-mont-semibold">{item.title}</div>
                                <div>{item.content}</div>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className="lg:px-16 pt-4 lg:pt-24 bg-gray-light">
                <div className="pl-3 lg:pl-10 text-2xl lg:text-6xl text-indigo-800 text-center">Bewerbungsprozess</div>
                <div className="relative grid p-4 lg:p-32 overflow-hidden">
                    <div className="justify-self-center z-20 hidden lg:block">
                        <img src={Assets.images.imgSchrittMerge} alt="Suggest"></img>
                    </div>
                    <div className="lg:absolute top-0 right-1/2 transform lg:-translate-x-20 lg:translate-y-56 z-10">
                        <div className="grid text-left md:text-center lg:text-left">
                            <div className="py-8 block lg:hidden w-32 h-32 md:place-self-center">
                                <img src={Assets.images.imgSchritt1} alt="schritt1"></img>
                            </div>
                            <div className="lg:pl-20 pt-12 lg:pt-0 text-2xl lg:text-3xl font-mont-semibold">Schritt 1</div>
                            <div className="hidden lg:block">
                                <img className="py-4" src={Assets.images.imgSplitter2} alt="splitter"></img>
                            </div>
                            <div>
                                <div className="lg:pl-20 text-lg lg:text-lg font-mont-semibold">Erstkontakt telefonisch</div>
                                <div className="text-md"></div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:absolute lg:top-1/4 left-1/2 transform lg:translate-y-10 lg:-mt-20 z-10">
                        <div className="grid text-left md:text-center lg:text-left">
                            <div className="py-8 block lg:hidden w-32 h-32 md:place-self-center">
                                <img src={Assets.images.imgSchritt2} alt="schritt2"></img>
                            </div>
                            <div className="lg:pl-72 pt-12 text-2xl lg:text-3xl font-mont-semibold">Schritt 2</div>
                            <div className="hidden lg:block">
                                <img className="py-4" src={Assets.images.imgSplitter2} alt="splitter"></img>
                            </div>
                            <div>
                                <div className="lg:pl-72 text-lg lg:text-lg font-mont-semibold">Interview</div>
                                <div className="lg:pl-72 text-md">Vor Ort oder remote über Zoom, innerhalb 7 Kalendertage nach Erstkontakt</div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:absolute top-1/4 right-1/2 transform lg:-translate-x-20 lg:translate-y-40 -mt-2 z-10">
                        <div className="grid text-left md:text-center lg:text-left">
                            <div className="py-8 block lg:hidden w-32 h-32 md:place-self-center">
                                <img src={Assets.images.imgSchritt3} alt="schritt1"></img>
                            </div>
                            <div className="lg:pl-20 pt-12 lg:pt-0 text-2xl lg:text-3xl font-mont-semibold">Schritt 3</div>
                            <div className="hidden lg:block">
                                <img className="py-4" src={Assets.images.imgSplitter2} alt="splitter"></img>
                            </div>
                            <div>
                                <div className="lg:pl-20 text-lg lg:text-lg font-mont-semibold">Assessment</div>
                                <div className="lg:pl-20 text-md">Testdome max. 3 Stunden - Einstufung Skillset, vollständiges<br /> Kandidatenprofil Innerhalb 7 Kalendertage nach 1. Interview</div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:absolute lg:top-1/2 left-1/2 transform lg:translate-y-10 lg:-mt-36 z-10">
                        <div className="grid text-left md:text-center lg:text-left">
                            <div className="py-8 block lg:hidden w-32 h-32 md:place-self-center">
                                <img alt="schritt4" src={Assets.images.imgSchritt4}></img>
                            </div>
                            <div className="lg:pl-72 pt-12 text-2xl lg:text-3xl font-mont-semibold">Schritt 4</div>
                            <div className="hidden lg:block">
                                <img className="py-4" src={Assets.images.imgSplitter2} alt="splitter"></img>
                            </div>
                            <div>
                                <div className="lg:pl-72 text-lg lg:text-lg font-mont-semibold">Vorstellung Vorstand</div>
                                <div className="lg:pl-72 text-md">Kandidatenprofil wird dem Vorstand mit Projektempfehlungen weitergeleitet</div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:absolute top-1/2 right-1/2 transform lg:-translate-x-20 lg:translate-y-24 -mt-2 z-10">
                        <div className="grid text-left md:text-center lg:text-left">
                            <div className="py-8 block lg:hidden w-32 h-32 md:place-self-center">
                                <img alt="schritt5" src={Assets.images.imgSchritt5}></img>
                            </div>
                            <div className="lg:pl-20 pt-12 lg:pt-0 text-2xl lg:text-3xl font-mont-semibold">Schritt 5</div>
                            <div className="hidden lg:block">
                                <img className="py-4" src={Assets.images.imgSplitter2} alt="splitter"></img>
                            </div>
                            <div>
                                <div className="lg:pl-20 text-lg lg:text-lg font-mont-semibold">Entscheidung durch Vorstand<br /> und Berater</div>
                                <div className="lg:pl-20 text-md w-96"></div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:absolute lg:top-1/2 left-1/2 transform lg:translate-y-52 lg:-mt-4 z-10">
                        <div className="grid text-left md:text-center lg:text-left">
                            <div className="py-8 block lg:hidden w-32 h-32 md:place-self-center">
                                <img alt="schritt6" src={Assets.images.imgSchritt6}></img>
                            </div>
                            <div className="lg:pl-72 pt-12 text-2xl lg:text-3xl font-mont-semibold">Schritt 6</div>
                            <div className="hidden lg:block">
                                <img className="py-4" src={Assets.images.imgSplitter2} alt="splitter"></img>
                            </div>
                            <div>
                                <div className="lg:pl-72 text-lg lg:text-lg font-mont-semibold">Angebot an Kandidat</div>
                                <div className="lg:pl-72 text-md">Falls gewünscht Möglichkeit Fragen zu stellen (2. Interview)</div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:absolute top-3/4 right-1/2 transform lg:-translate-x-20 lg:translate-y-6 z-10">
                        <div className="grid text-left md:text-center lg:text-left">
                            <div className="py-8 block lg:hidden w-32 h-32 md:place-self-center">
                                <img alt="schritt7" src={Assets.images.imgSchritt7}></img>
                            </div>
                            <div className="lg:pl-20 pt-12 lg:pt-0 text-2xl lg:text-3xl font-mont-semibold">Schritt 7</div>
                            <div className="hidden lg:block">
                                <img className="py-4" src={Assets.images.imgSplitter2} alt="splitter"></img>
                            </div>
                            <div>
                                <div className="lg:pl-20 text-xl lg:text-xl font-mont-semibold">Angebot CLEO AG</div>
                                <div className="lg:pl-20 text-md">Gültig für 7 Kalendertage</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <JobExam />
        </div>
    );
};

export default Career;
