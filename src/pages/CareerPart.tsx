import { useEffect } from "react";
import { RouteComponentProps } from "react-router";
import * as H from 'history';
import { useState } from "react";
import { Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const vacancies = [
    {
        title: "SOFTWARE SOLUTION ARCHITEKT IN ZÜRICH (W/M/D)",
        percent: "100",
        location: "Zürich, Bern",
        content: "Zur Verstärkung unseres Teams in Zürich suchen wir einen motivierten und kompetenten Software Solution Architekt.",
        partOne: [
            "Übernahme der technischen Führung über den gesamten Lebenszyklus eines Bankenplattform-Projekts, um die Bereitstellung qualitativ hochwertiger, innovativer Lösungen im Umfeld von Open Banking voranzutreiben",
            "Verantwortlich für Systemarchitekturen, Lösungsdesign und Dokumentation",
            "Übersetzung komplexer funktionaler, technischer und geschäftlicher Anforderungen in Designs sowie Durchführung von Reviews und Teilnahme an Architecture-Boards",
            "Federführende Rolle bei der Auswahl der geeigneten Werkzeuge, Techniken und Ressourcen sowie Lieferanten für alle technischen Komponenten der Lösung",
            "Verantwortlich für die Identifizierung von technischen Risiken, die Kommunikation dieser Risiken und die Empfehlung von Lösungen"
        ],
        partTwo: [
            "Ein abgeschlossenes Studium in Computer Science (FH, ETH, Uni oder gleichwertige Ausbildung)",
            "Sehr gute Kenntnisse Java und Spring Boot",
            "Von Vorteil Kenntnisse in Angular 2+ / React.js, TypeScript und Design Patterns",
            "Von Vorteil Erfahrung mit Docker, Openshift oder/und Kubernetes",
            "Gute Kenntnisse in relationalen Datenbanken, SQL, Application-Server und Microservices Architekturen",
            "Breite Kompetenz auf den Gebieten der Softwaremethodik",
            "Exzellente analytische Fähigkeiten und eine rasche Auffassungsgabe verbunden mit hoher Lernbereitschaft",
            "Stilsicheres Deutsch sowie gutes Englisch in Wort und Schrift",
            "Eine selbständige, zuverlässige und exakte Arbeitsweise",
            "Eine teamfähige und lösungsorientierte Persönlichkeit",
            "Interesse branchenführende Unternehmen zu unterstützen"
        ],
        partThree: [
            "Die Möglichkeit in unterschiedlichsten Projekten mit renommierten Grossunternehmen zu arbeiten",
            "Option an den innovativsten Projekten in der Schweiz und Europa mitzuwirken (u.a den Technologien AI, Blockchain & Data Science)",
            "Aktives Coaching im Team und interner Knowhow-Transfer",
            "Unterstützung für die persönliche und fachspezifische Weiterentwicklung",
            "Zentraler Standort mit optimaler Öv-Anbindung, direkt am Zürichsee",
            "Flexible Arbeitszeiten & Möglichkeit für Homeoffice",
            "Kostenlose Verpflegungsmöglichkeiten und Getränke"
        ]
    },
    {
        title: "SENIOR JAVA SOFTWARE ENTWICKLER (W/M/D)",
        percent: "100",
        location: "Zürich, Bern",
        content: "Zur Verstärkung unseres Teams in Zürich und Bern suchen wir einen motivierten und kompetenten Software Engineer, Java.",
        partOne: [
            "Design und frontendseitige Entwicklung von Modulen und Features",
            "Problemanalyse, Korrektur von gemeldeten Fehlern und 3rd Level Support",
            "Unterstützung von Kunden (Remote oder vor Ort) bei Konzeption, Realisierung, Testing und Inbetriebnahme",
            "Technische Analyse der Kundenbedürfnisse und deren Umsetzung",
            "Integration von Software in die Systemumgebung bei Kunden",
            "Technische Verantwortung für Module"
        ],
        partTwo: [
            "Ein abgeschlossenes Studium in Computer Science (FH, ETH, Uni oder gleichwertige Ausbildung)",
            "Sehr gute Kenntnisse Java ggf. Spring Boot",
            "Von Vorteil Kenntnisse in Angular 2+ / React.js, TypeScript und Design Patterns",
            "Von Vorteil Erfahrung mit Docker, Openshift oder/und Kubernetes",
            "Gute Kenntnisse in relationalen Datenbanken, SQL, Application-Server und Microservices Architekturen",
            "Breite Kompetenz auf den Gebieten der Softwaremethodik",
            "Exzellente analytische Fähigkeiten und eine rasche Auffassungsgabe verbunden mit hoher Lernbereitschaft",
            "Stilsicheres Deutsch sowie gutes Englisch in Wort und Schrift",
            "Eine selbständige, zuverlässige und exakte Arbeitsweise",
            "Eine teamfähige und lösungsorientierte Persönlichkeit",
            "Interesse branchenführende Unternehmen zu unterstützen"
        ],
        partThree: [
            "Die Möglichkeit in unterschiedlichsten Projekten mit renommierten Grossunternehmen zu arbeiten",
            "Option an den innovativsten Projekten in der Schweiz und Europa mitzuwirken (u.a den Technologien AI, Blockchain & Data Science)",
            "Aktives Coaching im Team und interner Knowhow-Transfer",
            "Unterstützung für die persönliche und fachspezifische Weiterentwicklung",
            "Zentraler Standort mit optimaler Öv-Anbindung, direkt am Zürichsee",
            "Flexible Arbeitszeiten & Möglichkeit für Homeoffice",
            "Kostenlose Verpflegungsmöglichkeiten"
        ],
    },
    {
        title: "FRONTEND SOFTWARE ENGINEER (W/M/D)",
        percent: "80 - 100",
        location: "Zürich, Remote",
        content: "Zur Verstärkung unseres Teams in Zürich und Bern suchen wir einen motivierten und kompetenten Software Engineer, Java.",
        partOne: [
            "Design und frontendseitige Entwicklung von Modulen und Features",
            "Problemanalyse, Korrektur von gemeldeten Fehlern und 3rd Level Support",
            "Unterstützung von Kunden (Remote oder vor Ort) bei Konzeption, Realisierung, Testing und Inbetriebnahme",
            "Technische Analyse der Kundenbedürfnisse und deren Umsetzung",
            "Integration von Software in die Systemumgebung bei Kunden",
            "Technische Verantwortung für Module"
        ],
        partTwo: [
            "Ein abgeschlossenes Studium in Computer Science (FH, ETH, Uni oder gleichwertige Ausbildung)",
            "Sehr gute Kenntnisse Java ggf. Spring Boot",
            "Von Vorteil Kenntnisse in Angular 2+ / React.js, TypeScript und Design Patterns",
            "Von Vorteil Erfahrung mit Docker, Openshift oder/und Kubernetes",
            "Gute Kenntnisse in relationalen Datenbanken, SQL, Application-Server und Microservices Architekturen",
            "Breite Kompetenz auf den Gebieten der Softwaremethodik",
            "Exzellente analytische Fähigkeiten und eine rasche Auffassungsgabe verbunden mit hoher Lernbereitschaft",
            "Stilsicheres Deutsch sowie gutes Englisch in Wort und Schrift",
            "Eine selbständige, zuverlässige und exakte Arbeitsweise",
            "Eine teamfähige und lösungsorientierte Persönlichkeit",
            "Interesse branchenführende Unternehmen zu unterstützen"
        ],
        partThree: [
            "Die Möglichkeit in unterschiedlichsten Projekten mit renommierten Grossunternehmen zu arbeiten",
            "Option an den innovativsten Projekten in der Schweiz und Europa mitzuwirken (u.a den Technologien AI, Blockchain & Data Science)",
            "Aktives Coaching im Team und interner Knowhow-Transfer",
            "Unterstützung für die persönliche und fachspezifische Weiterentwicklung",
            "Zentraler Standort mit optimaler Öv-Anbindung, direkt am Zürichsee",
            "Flexible Arbeitszeiten & Möglichkeit für Homeoffice",
            "Kostenlose Verpflegungsmöglichkeiten"
        ],
    },
    {
        title: "JAVA SOFTWARE ENTWICKLER (W/M/D)",
        percent: "100",
        location: "Zürich, Remote",
        content: "Zur Verstärkung unseres Teams in Zürich suchen wir einen motivierten und kompetenten Software Engineer, Fontend.",
        partOne: [
            "Design und frontendseitige Entwicklung von Modulen und Features",
            "Problemanalyse, Korrektur von gemeldeten Fehlern und 3rd Level Support",
            "Unterstützung von Kunden (Remote oder vor Ort) bei Konzeption, Realisierung, Testing und Inbetriebnahme",
            "Technische Analyse der Kundenbedürfnisse und deren Umsetzung",
            "Integration von Software in die Systemumgebung bei Kunden",
            "Technische Verantwortung für Module"
        ],
        partTwo: [
            "Ein abgeschlossenes Studium in Computer Science (FH, ETH, Uni oder gleichwertige Ausbildung)",
            "Sehr gute Kenntnisse Java ggf. Spring Boot",
            "Von Vorteil Kenntnisse in Angular 2+ / React.js, TypeScript und Design Patterns",
            "Von Vorteil Erfahrung mit Docker, Openshift oder/und Kubernetes",
            "Gute Kenntnisse in relationalen Datenbanken, SQL, Application-Server und Microservices Architekturen",
            "Breite Kompetenz auf den Gebieten der Softwaremethodik",
            "Exzellente analytische Fähigkeiten und eine rasche Auffassungsgabe verbunden mit hoher Lernbereitschaft",
            "Stilsicheres Deutsch sowie gutes Englisch in Wort und Schrift",
            "Eine selbständige, zuverlässige und exakte Arbeitsweise",
            "Eine teamfähige und lösungsorientierte Persönlichkeit",
            "Interesse branchenführende Unternehmen zu unterstützen"
        ],
        partThree: [
            "Die Möglichkeit in unterschiedlichsten Projekten mit renommierten Grossunternehmen zu arbeiten",
            "Option an den innovativsten Projekten in der Schweiz und Europa mitzuwirken (u.a den Technologien AI, Blockchain & Data Science)",
            "Aktives Coaching im Team und interner Knowhow-Transfer",
            "Unterstützung für die persönliche und fachspezifische Weiterentwicklung",
            "Zentraler Standort mit optimaler Öv-Anbindung, direkt am Zürichsee",
            "Flexible Arbeitszeiten & Möglichkeit für Homeoffice",
            "Kostenlose Verpflegungsmöglichkeiten"
        ],
    }
]

interface CareerPartProps extends H.Location {
    id: number;
}

const CareerPart = (props: RouteComponentProps) => {

    const [isShow, setShow] = useState(false)

    const index = (props.location as CareerPartProps).id;

    const data = vacancies[index];

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <>
            <div className="flex flex-col md:flex-row md:justify-between p-4 md:p-20">
                <div className="text-center md:text-left font-mont-semibold text-2xl md:text-6xl">{data.title}</div>
                <div className="flex flex-col text-center md:text-right md:self-end pt-10 md:pt-0">
                    <div className="font-mont-semibold">{data.percent}%</div>
                    <div>{data.location}</div>
                </div>
            </div>

            <div className="p-4 md:p-20">
                {data.content}
                <div className="pl-0 md:pl-20 py-10">Die CLEO AG hilft Unternehmen dabei, die damit verbunden ICT-Projekte professionell, effektiv und effizient umzusetzen, ohne eigene Ressourcen binden zu müssen. Dafür stellen wir Ihnen erfahrene Experten und Expertenteams zur Seite, die über ein breit gefächertes Know-how in der Banking-, Versicherungs-, Logistik- und Automotivebranche, der öffentlichen Verwaltung und im Transportwesen verfügen. Zu unseren Spezialisten gehören ICT-Berater, Projektleiter, Businessanalysten und Entwickler.</div>
                <div className="md:pt-10"><hr></hr></div>
            </div>

            <div className="grid md:grid-cols-11 p-4 md:pl-20 md:pr-10 md:pb-20">
                <div className="col-span-3 mr-10">
                    <div className="font-mont-semibold text-xl py-10 md:py-0">Ihre Hauptaufgaben</div>
                </div>
                <div className="col-span-8">
                    <div className="grid md:grid-cols-2">
                        {
                            data.partOne.map((text) => <div className="pb-10 pr-10">{text}</div>)
                        }
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-11 p-4 md:pl-20 md:pr-10 md:pb-20">
                <div className="col-span-3 mr-10">
                    <div className="font-mont-semibold text-xl py-10 md:py-0">Ihre Hauptaufgaben</div>
                </div>
                <div className="col-span-8">
                    <div className="grid md:grid-cols-2">
                        {
                            data.partTwo.map((text, index) => (
                                <div className="pb-10 pr-10">{text}</div>
                            ))
                        }
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-11 p-4 md:pl-20 md:pr-10 md:pb-200">
                <div className="col-span-3 mr-10">
                    <div className="font-mont-semibold text-xl py-10 md:py-0">Ihre Hauptaufgaben</div>
                </div>
                <div className="col-span-8">
                    <div className="grid md:grid-cols-2">
                        {
                            data.partThree.map((text, index) => (
                                <div className="pb-10 pr-10">{text}</div>
                            ))
                        }
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-11 p-4 md:pl-20 md:pr-10 md:pb-20">
                <div className="col-span-3 mr-10 py-10 md:py-0">
                    <div className="font-mont-semibold text-xl">Ihre Hauptaufgaben</div>
                </div>
                <div className="col-span-8">
                    <div className="pb-10">Wir konzipieren gemeinsam mit unseren branchenführenden Kunden innovative Softwarelösungen im Rahmen von Projekten.</div>
                    <div className="pb-10">Wir suchen engagierte und leistungs-orientierte Verstärkung für unsere Teams, die bereit sind, mit uns durchzustarten und CLEO AG als erfolgreiches und wachsendes Unternehmen in eine erfolgreiche Zukunft zu begleiten.</div>
                    <button onClick={() => setShow(true)} className="py-5 bg-indigo-800 block w-full md:w-1/3 text-center text-white">BEWERBEN</button>
                </div>
            </div>

            {isShow ?
                <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                    <div className="flex items-end justify-center max-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0 ">

                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

                        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                            <div className="bg-white px-4 pt-5 relative">
                                <div className="absolute right-2 top-0">
                                    <button
                                        type="button"
                                        className="w-4 h-4"
                                        data-dismiss="modal"
                                        aria-label="Close"
                                        onClick={()=>setShow(false)}
                                    >
                                        <span className="text-3xl" aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="flex flex-col items-center py-5">
                                    <input type="text" placeholder="Name" className="mb-4 rounded-lg w-full"></input>
                                    <input type="text" placeholder="Email" className="mb-4 rounded-lg w-full"></input>
                                    <input type="text" placeholder="Phone" className="mb-4 rounded-lg w-full"></input>
                                    <div className="mb-4">
                                        <Upload {...props}>
                                            <div className="flex items-center">
                                                <UploadOutlined className="pr-3" />
                                                <Button className="pr-84">Upload CV</Button>
                                            </div>
                                        </Upload>
                                    </div>

                                    <textarea placeholder="Message" className="rounded-lg w-full h-60"></textarea>
                                </div>
                            </div>
                            <div className="bg-white px-4 pb-4 flex items-center">
                                <button onClick={() => setShow(false)} className="py-3 bg-indigo-full block w-full md:w-1/3 text-center text-white">Send</button>
                            </div>
                        </div>
                    </div>
                </div>
                :
                <div></div>
            }

        </>
    );
};

export default CareerPart;