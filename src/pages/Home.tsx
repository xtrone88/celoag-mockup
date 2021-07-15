import useMetaTags from "react-metatags-hook";

import Assets from "../assets/assets";
import LogoItems from "../assets/logoitems";
import CartItemList from "../assets/cartitemlist"
import Manager from "../components/manager";
import MapComponent from "../components/MapComponent";

const Home = () => {

  useMetaTags({
    title: `CLEO AG | Home`,
    description: `Die CLEO AG unterstützt Unternehmen professionell und effizient bei der Konzeption und Umsetzung von ICT-Projekten, ohne dass sie eigene Ressourcen einbinden müssen.`
  });

  return (
    <>
      <div className="ml-4 md:ml-16 lg:ml-25 md:relative">
        <div className="md:absolute -top-28 right-0 w-2/5 bottom-0 bg-gray-100 -z-1">
        </div>
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-5 flex flex-col">
            <div className="pr-4 md:pr-8 pb-4 md:pb-12 relative">
              <h2 className="md:mt-24 font-mont-semibold text-2xl md:text-5xl leading-normal">
                Wir stehen für Effizienz, Qualität und Fachwissen.
              </h2>
              <p className="mt-10 pr-0 md:pl-12 lg:pl-20 text-md">
                Die CLEO AG unterstützt Unternehmen professionell und effizient bei der Konzeption und Umsetzung von ICT-Projekten, ohne dass sie eigene Ressourcen einbinden müssen.
              </p>
              <p className="mt-5 pr-4 md:pl-12 lg:pl-20 text-md">
                Dafür stellen wir erfahrene Experten und Expertenteams zur Seite, die über ein breit gefächertes Know-how in der Banking-, Versicherungs-, Logistik- und Automotivebranche, der öffentlichen Verwaltung und im Transportwesen verfügen. Zu unseren Spezialisten gehören ICT-Berater, Projektleiter, Businessanalysten und Entwickler.
              </p>
            </div>
            <div className="block md:hidden">
              <img src={Assets.images.homeIntro} alt="Home Intro" />
            </div>
          </div>
          <div className="hidden md:block col-span-12 md:col-span-7">
            <img src={Assets.images.homeIntro} alt="Home Intro" className="w-full" />
          </div>
        </div>
        <div className="pr-4 lg:pr-28 py-4 lg:py-10 grid grid-cols-10">
          <div className="col-span-10 md:col-span-6">
            <h1 className="mt-4 md:mt-24 font-mont-semibold text-3xl md:text-6xl leading-normal">
              Branchen und Technologien
            </h1>
            <p className="mt-10 md:pl-12 lg:pl-20 text-md">
              Kein Unternehmen kommt um skalierbare IT-Lösungen herum. Das rasante Tempo der modernen Geschäftsprozesse macht weder vor dem Start-up, dem Mittelständler oder dem Konzern halt.
            </p>
            <p className="mt-5 md:pl-12 lg:pl-20 text-md">
              Wir kennen die Herausforderungen, vor denen Unternehmen heute stehen. Eine Kombination aus langjähriger Erfahrung,  persönlichen Skills und ausserorderdentlicher Begeisterung für die Herausforderung bieten wir ein breites Beratungsspektrum an.
            </p>
            <p className="mt-5 md:pl-12 lg:pl-20 text-md">
              Wir stellen Ihnen von Softwareentwicklern bis zu Projektleiter die perfekten Unterstützer zur Seite, damit Sie Ihr Projekt schnell und effizient umsetzen können. Unsere Spezialisten beherrschen den aktuellen TechStack bei den Programmiersprachen, Frameworks und den anderen Technologien, die im täglichen Job verlangt werden.
            </p>
          </div>
        </div>
      </div>

      <div className="px-3 py-4 md:py-10 flex flex-col block md:hidden">
        <div className="pl-3 text-2xl border-indigo bg-indigo font-mont-semibold border-l-8 border-indigo">Technologien State-of-the-Art</div>
        <div className="py-10">Bei der CLEO AG verstehen wir unter Tech Stack den Kernsatz der Technologien, die zur Entwicklung und Implementierung von IT-Lösungen in einem Team verwendet werden. Jeweils einem Produkt liegt ein definierter Stack zugrunde. Wir bei der CLEO AG sind uns bewusst, dass ein Unternehmen unterschiedliche Stacks für unterschiedliche Produkte anwenden kann.
          Tech Stacks sind weder für Unternehmen, noch für Entwicklerteams in Stein gemeißelt. Vielmehr entwickeln sie sich angesichts der Anforderungen der zu entwickelnden Produkte, der Innovationen oder neuer Features dynamisch weiter. </div>
      </div>

      <div id="Experten" className="py-4 md:py-10 bg-gray-200">
        <div className="grid grid-cols-3 md:grid-cols-6 gap-x-0.5">
          <div className="">
            <img src={Assets.images.imgProfile1} className="w-full" alt="Profile1" />
          </div>
          <div className="">
            <img src={Assets.images.imgProfile2} className="w-full" alt="Profile2" />
          </div>
          <div className="">
            <img src={Assets.images.imgProfile3} className="w-full" alt="Profile3" />
          </div>
          <div className="">
            <img src={Assets.images.imgProfile4} className="w-full" alt="Profile4" />
          </div>
          <div className="">
            <img src={Assets.images.imgProfile5} className="w-full" alt="Profile5" />
          </div>
          <div className="">
            <img src={Assets.images.imgProfile6} className="w-full" alt="Profile5" />
          </div>
        </div>
      </div>

      <div className="px-4 md:px-16 lg:px-25 py-8 md:py-16 gradient-bg-1 mb-24">
        <div className="grid grid-cols-12 items-center">
          <div className="col-span-12 md:col-span-5">
            <div className="flex items-center">
              <img className="inline-block mr-4 w-11 md:w-16"
                src={Assets.images.svgLogo2}
                alt="Nu Logo"
              />
              <span className="font-mont-semibold text-2xl md:text-5xl text-white">nu.</span>
            </div>
            <h6 className="mt-12 font-mont-semibold text-xl text-white">Was ist nu.?</h6>
            <p className="mt-5 text-white text-md leading-relaxed">
              Chancengleichheit und Individualität im Bildungsbereich definieren die zwei Hauptziele des Bildungsprojektes nu LXP.
            </p>
            <p className="mt-5 text-white text-md leading-relaxed">
              Die CLEO AG setzt sich mit ausgewählten Schweizer Hochschulen aktiv für die Weiterentwicklung des Bildungssystems ein. Die CLEO AG spendet aus jedem Projektertrag einen Teil in das Projekt nu LXP. So wird jeder Gewinn für die CLEO AG zum Gewinn für die Bildung. Jeder Einsatz unserer Spezialisten trägt automatisch zur Weiterentwicklung dieses Projekts bei. Ihr Benefit: Sie investieren nicht nur in die Weiterentwicklung Ihres Unternehmens, sondern gleichzeitig in ein Projekt, das für Chancengleichheit im Bildungssystem sorgt. Mehr zu unseren Pilotschulen und Meilensteinen erfahren sie <a className="text-current" href="http://nu-lxp.ch/"><u>hier</u></a>.
            </p>
          </div>
          <div className="col-span-7 md:-mb-48 hidden md:block">
            <div className="px-4 md:px-16 lg:px-25">
              <img className="bottom-0 w-full rounded-3xl" src={Assets.images.homeIntro2} alt="Home Intro2" />
            </div>
          </div>
          <div className="md:hidden mt-5 col-span-12 -mb-40">
            <img className="w-full rounded-3xl" src={Assets.images.homeIntro2} alt="Home Intro2" />
          </div>
        </div>
      </div>

      <div className="px-4 md:px-16 lg:px-25 mt-36 md:mt-24 xl:mt-48">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="my-10">
            <div className="flex flex-col sm:flex-row">
              <div className="mr-4 bg-indigo text-xl">01</div>
              <div className="flex flex-col">
                <h2 id="WerWirSind" className="mt-0.5 text-lg">WER WIR SIND</h2>
                <p className="mt-5 text-md max-w-xl">Die CLEO AG bietet intelligente Consulting-Dienstleistungen und Software-Lösungen sowie massgeschneiderte Designs in der Softwareentwicklung für Enterprise-Kunden. Unser Leistungsportfolio beginnt beim IT-Consulting, spannt sich über die Programmierung und endet beim Testing inklusive der Integration modernster Enterprise-Anwendungen. Gemeinsam mit Ihnen diskutieren und konzeptionieren wir die Antworten auf die Herausforderungen der Digitalisierung in Ihrer Branche. Die Zusammenarbeit mit uns erlaubt Ihnen ein hohes Mass an Planungssicherheit und Synergieeffekten, wobei Sie im Zuge unserer „Alles aus einer Hand“-Philosophie von attraktiven Konditionen profitieren.</p>
              </div>
            </div>
          </div>
          <div className="my-10">
            <div className="flex flex-col sm:flex-row">
              <div className="mr-4 bg-indigo text-xl">02</div>
              <div className="flex flex-col">
                <h2 className="mt-0.5 text-lg">WAS WIR TUN</h2>
                <p className="mt-5 text-md max-w-xl">Wir wissen: IT-Systeme sind sensibel und bedeutend! Sie müssen mit  grösster Effizienz und Sicherheit betrachtet werden. Zudem sind IT-Landschaften Treiber und gleichzeitig Anker von Digitalisierung und Veränderung. Sie sind komplex und fordern gerade deshalb Konsolidierung. Ihre Steuerung rückt in den Fokus vieler Beteiligter. Das bindet Ressourcen und produziert häufig Intransparenz bei Zustand und Zuständigkeit. Die CLEO AG-IT-Angebote sind auch deshalb umfangreich. Sie beginnen bei der Betreuung einzelner Anwendungen und Systeme im Unternehmen und enden bei der Neuentwicklung und Programmierung komplexer Anwendungen innerhalb der Organisation. Wir bieten IT-Services nach Mass für Sie.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="bg-indigo px-4 pt-4 md:pt-20 font-mont-semibold text-2xl md:text-6xl md:px-16 lg:px-25">Unsere Philosophie - und wie wir sie umsetzen</div>

        <div className="flex flex-col">
          <div className="text-center font-mont-bold text-md md:text-3xl py-5 md:py-28">Was wir anbieten</div>
          <div className="bg-auto hidden sm:block">
            <img
              className="w-full"
              src={Assets.images.homeOffer}
              alt="Nu Offer"
            />
          </div>
          <div className="bg-auto sm:hidden">
            <img
              className="w-full"
              src={Assets.images.homeOffer2}
              alt="Nu Offer"
            />
          </div>
        </div>
      </div>
      <div >
        <div className="flex flex-col">
          <div className="text-center font-mont-bold text-md md:text-3xl py-5 md:py-28">Was wir dafür tun</div>
          <div className="grid md:grid-cols-12">
            <div className="pb-16 md:col-span-5">
              <img src={Assets.images.homePyramid} className="w-full" alt="Logo Pyramid" />
            </div>

            <div className="px-4 md:pr-16 md:col-span-7">
              <div className="mb-5 flex flex-row items-center">
                <img className="-mt-1 h-20 md:h-28" src={CartItemList.cartImage1} alt="Logo Item" />
                <div className="flex-grow flex bg-gray-white pl-4 text-sm xl:text-xl">
                  <div className="self-center">
                    <span className="font-mont-semibold">High Trust Culture</span> durch monatliche Teambuilding Events
                  </div>
                </div>
              </div>

              <div className="flex flex-row">
                <img className="-mt-2 h-20 md:h-28" src={CartItemList.cartImage2} alt="Logo Item" />
                <div className="flex-grow flex bg-gray-white pl-4 text-sm xl:text-xl">
                  <div className="self-center">
                    <span className="font-mont-semibold">Persönliche Entwicklung</span> durch individuelles Coaching (Einzel oder in Gruppen). Beispielhafte Themen:
                  </div>
                </div>
              </div>

              <div className="mb-5 pl-28 md:pl-40 -mt-2">
                <div className="bg-gray-white p-4 md:pl-10 text-sm xl:text-xl">
                  <ul className="list-outside" style={{ listStyleType: "disc" }}>
                    <li>Die Dynamik der Arbeitswelt: Reflexion der Beruflichen Identität (Weiterentwicklung der eignen Kompetenzen)</li>
                    <li>Wiederherstellung oder Erhaltung der Work-Life-Balance</li>
                    <li>Überwindung von Überforderung, Erschöpfung und Demotivation</li>
                  </ul>
                </div>
              </div>

              <div className="mb-5 flex flex-row">
                <img className="-mt-2 h-20 md:h-28" src={CartItemList.cartImage3} alt="Logo Item" />
                <div className="flex-grow flex bg-gray-white pl-4 text-sm xl:text-xl">
                  <div className="self-center">
                    <span className="font-mont-semibold">Technische Weiterentwicklung</span> durch Schulungen und Workshops. Beispiele: Java User Groups, interne Meet-ups, Conventions.
                  </div>
                </div>
              </div>

              <div className="mb-5 flex flex-row">
                <img className="-mt-2 h-20 md:h-28" src={CartItemList.cartImage4} alt="Logo Item" />
                <div className="flex-grow flex bg-gray-white pl-4 text-sm xl:text-xl">
                  <div className="self-center">
                    <span className="font-mont-semibold">Entrepreneurship mit dem Schwerpunkt, </span>
                    innovative Ideen in die Praxis umzusetzen und dadurch die Zukunft von Unternehmen und Gesellschaft aktiv mitgestalten.
                  </div>
                </div>
              </div>

              <div className="flex flex-row">
                <img className="-mt-2 h-20 md:h-28" src={CartItemList.cartImage5} alt="Logo Item" />
                <div className="flex-grow flex bg-gray-white pl-4 text-sm xl:text-xl">
                  <div className="self-center">
                    <span className="font-mont-semibold">Betriebliches Gesundheitsmanagement</span><br />
                    Beispiele:
                  </div>
                </div>
              </div>
              <div className="mb-5 pl-28 md:pl-40 -mt-2">
                <div className="bg-gray-white p-4 md:pl-10 text-sm xl:text-xl">
                  <ul className="list-outside" style={{listStyleType: "disc"}}>
                    <li>Sportangebote</li>
                    <li>Gesundheitstage</li>
                    <li>Gesunde Verpflegung (Snacks & Getränke)</li>
                    <li>Ergonomie am Arbeitsplatz</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 md:px-10 lg:px-16">
        <div className="bg-indigo py-5 md:py-20 font-mont-semibold text-2xl md:text-6xl">Tech Stack</div>
        <div className="flex flex-col md:flex-row pb-4 md:pb-10">
          <div className="sm:pr-16 pb-5">Wir verstehen uns als eine dynamische Unternehmung, die es sich zum Ziel gesetzt hat, als externe Dienstleister dort anzusetzen, wo die Leistungsfähigkeit interner Mitarbeitern auf Grund der Komplexität der Aufgabenstellung nicht mehr ausreicht. Wir konzentrieren uns auf modernste Cloud Technologien in Verbindungen mit hoch skalierbaren Micro Service Architekturen. Die Kombination mit einem komplexen  Entwicklungs-Know-How beispielsweise bei Java, React, Angular oder GO mündet mit uns in High-End-Technologie.</div>
          <div className="">Die konsequente Weiterbildung aller Mitarbeiter steht bei der CLEO AG im Fokus, um sie als Unternehmung so effizient wie möglich zu unterstützen. Die Erweiterung unseres Tech Stacks gewährleisten wir  durch intensive technische Weiterbildungs-Workshops in unserem Hauptsitz am Hauptbahnhof. Auch deshalb steht die CLEO AG für individuelle Beratung, Dynamik, Effizenz, Know How und Teamgeist.</div>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-6 pb-4 md:pb-20 justify-items-center">
          {
            LogoItems.map((item, index) => (
              <img className="mt-5 mr-5 w-3/4" key={index} src={item.path} alt="Logo Item" />
            ))
          }
        </div>
      </div>

      <div id="Management">
        <div className="px-4 md:px-16 lg:px-25">
          <div className="py-5 md:py-20 font-mont-semibold text-xl md:text-6xl">Management</div>
        </div>

        <div className="grid md:grid-cols-12 bg-gray-200 justify-items-center">
          <div className="md:col-span-2"></div>
          <Manager image={Assets.images.imgOfficer1} name="NICOLAS MERZ" jobtitle="Chief Executive Officer" />
          <Manager image={Assets.images.imgOfficer2} name="MELANIE MERZ" jobtitle="HR Managerin & Geschäftsleitung" />
          <Manager image={Assets.images.imgOfficer3} name="ANDRÉ MERZ" jobtitle="Chief Financial Officer" />
          <div className="md:col-span-1"></div>
        </div>
      </div>

      <div>
        <div className="block md:hidden">
          <MapComponent style={{ width: "100%", height: "400px" }}></MapComponent>
        </div>
        <div className="grid grid-cols-12 px-4 md:px-10 lg:px-20">
          <div className="col-span-12 sm:col-span-6">
            <div className="py-5 md:pt-20 text-md md:text-xl bg-indigo font-mont-semibold">Kontakt</div>
            <div className="pb-5 md:pb-0 text-xl md:text-6xl font-mont-semibold">Wir freuen uns auf Sie</div>
            <div className="grid grid-cols-2 py-0 md:py-10">
              <div className="col-span-2 md:col-span-1">
                <p className="text-md md:text-xl font-mont-semibold py-4">Adresse</p>
                <p>Stampfenbachstrasse 57</p>
                <p>8006 Zürich</p>
                <p>Schweiz</p>
              </div>
              <div className="col-span-2 md:col-span-1">
                <p className="text-md md:text-xl font-mont-semibold py-4">Kontakt</p>
                <p>Tel: +41 43 542 95 24</p>
                <p>Email: info@cleoag.ch</p>
              </div>
            </div>
            <div className="py-4">
              <input type="text" className="w-full text-sm rounded-sm border-b-1 border-t-0 border-r-0 border-l-0" placeholder="Name" />
            </div>
            <div className="py-4">
              <input type="text" className="w-full text-sm rounded-sm border-b-1 border-t-0 border-r-0 border-l-0" placeholder="Email" />
            </div>
            <div className="py-4">
              <textarea className="w-full md:h-96 text-sm rounded-sm border-b-1 border-t-0 border-r-0 border-l-0" placeholder="Message"></textarea>
            </div>
          </div>
          <div className="col-span-2"></div>
          <div className="col-span-12 md:col-span-4 hidden md:block">
            <MapComponent style={{ width: "100%", height: "100%" }}></MapComponent>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
