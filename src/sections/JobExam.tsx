import Assets from "../assets/assets";

const JobExam = () => {
    return (
        <>
            <div className="px-4 pt-16 md:pt-0 grid justify-items-stretch text-center bg-gray-light">
                <div className="justify-self-center font-mont-semibold text-xl md:text-2xl">
                    Beispiel Deiner CLEO AG-Woche.<br />
                    Stell sie Dir selbst zusammen - so wie sie in Dein Leben passt
                </div>
            </div>

            <div className="bg-gray-light">
                <div className="hidden lg:block mx-20 xl:mx-40 py-60">
                    <div className="grid grid-cols-5">
                        <div className="relative z-10">
                            <img src={Assets.images.imgLeaf1} className="absolute -top-1/2 -left-20 xl:-left-40 w-full -z-1" alt="Leaf"/>
                            <img src={Assets.images.imgCart1} className="w-full z-20" alt="Male" />
                            <img src={Assets.images.imgPlane1} alt="Plane" className="absolute -top-1/3 -right-3/4" />

                            <div className="absolute top-0 left-0 right-1/3 h-full text-white">
                                <div className="text-md xl:text-xl font-mont-semibold px-4 xl:px-10 pt-4 xl:pt-10 pb-2 xl:pb-5">Montag</div>
                                <div className="text-xs xl:text-md pl-4 xl:pl-10">Dein Wochenstart beginnt normalerweise beim Kunden</div>
                            </div>
                        </div>
                        <div className="relative">
                            <img src={Assets.images.imgCart2} className="w-full" alt="Male" />
                            <img src={Assets.images.imgMan1} alt="Male" className="absolute -bottom-1/2 -right-1/4 w-2/3" />
                            <div className="absolute top-0 left-0 text-center">
                                <div className="text-md xl:text-xl font-mont-semibold pt-4 xl:pt-10 pb-2 xl:pb-5">Dienstag</div>
                                <div className="text-xs xl:text-md px-4 xl:px-10">Auch den Dienstag verbringst Du im Büro des Kunden </div>
                            </div>
                        </div>
                        <div className="relative">
                            <img src={Assets.images.imgCart3} className="w-full" alt="Male" />
                            <img src={Assets.images.imgLight} alt="Light" className="w-1/3 absolute -left-2 bottom-0" />
                            <img src={Assets.images.imgWoman} alt="Female" className="w-2/3 absolute -top-1/3 right-0" />
                            <div className="absolute top-0 left-1/4 right-1/4 h-full text-center">
                                <div className="text-md xl:text-xl font-mont-semibold pt-4 xl:pt-10 pb-2 xl:pb-5">Mittwoch</div>
                                <div className="text-xs xl:text-md">In der Regel kannst Du selbst entscheiden, ob  on- oder offside</div>
                            </div>
                        </div>
                        <div className="relative">
                            <img src={Assets.images.imgCart4} className="w-full" alt="Male" />
                            <div className="absolute top-0 left-0 text-center">
                                <div className="text-md xl:text-xl font-mont-semibold pt-4 xl:pt-10 pb-2 xl:pb-5">Donnerstag</div>
                                <div className="text-xs xl:text-md px-4 xl:px-10">Der Donnerstag ist in der Regel  der CLEO AG-Bürotag</div>
                            </div>
                        </div>
                        <div className="relative z-10">
                            <img src={Assets.images.imgCart5} className="w-full z-20" alt="Male" />
                            <img src={Assets.images.imgPlane2} alt="Plane" className="w-1/2 absolute -top-1/3 -left-1/4" />
                            <img src={Assets.images.imgMan2} alt="Male" className="absolute -bottom-1/2 -right-1/4 w-2/3" />
                            <img src={Assets.images.imgMan3} alt="Male" className="absolute bottom-0 -right-1/3 w-1/3" />
                            <div className="absolute top-0 left-1/3 ">
                                <div className="text-md xl:text-xl font-mont-semibold pt-4 xl:pt-10 pb-2 xl:pb-5">Freitag</div>
                                <div className="text-xs xl:text-md pr-4 xl:pr-10">Freitag geht es langsam mit Home-Office ins Weekend</div>
                            </div>
                            <img src={Assets.images.imgLeaf2} className="absolute -top-3/4 -right-20 xl:-right-40 w-full -z-1" alt="Leaf"/>
                        </div>
                    </div>
                </div>

                <div className="block lg:hidden overflow-hidden">
                    <div className="grid justify-items-stretch py-40">
                        <div className="relative justify-self-center z-10">
                            <div className="absolute top-0 right-1/4 transform -translate-x-10 -translate-y-1/3" style={{ zIndex: -1 }}>
                                <img src={Assets.images.imgLeaf3} alt="Leaf" />
                            </div>
                            <div className="z-10 rounded-3xl text-white m-0 py-16 px-8 w-64 h-64" style={{ backgroundColor: '#043C5E' }}>
                                <div className="font-mont-semibold text-2xl">Montag</div>
                                <div className="text-md mt-4">Dein Wochenstart beginnt normalerweise beim Kunden</div>
                            </div>
                            <div className="z-20 absolute top-0 left-1/2 transform -translate-x-0 -translate-y-1/2">
                                <img src={Assets.images.imgPlane2} alt="Plane" />
                            </div>
                        </div>

                        <div className="relative justify-self-center">
                            <div className="z-10 rounded-3xl text-white m-0 pt-16 pb-20 px-8 relative w-64 h-64" style={{ backgroundColor: '#FFCF0D' }}>
                                <div className="font-mont-semibold text-2xl">Dienstag</div>
                                <div className="text-md mt-6">Auch den Dienstag verbringst Du im Büro des Kunden</div>
                                <svg className="w-20 h-20 absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-3/4"
                                    viewBox="0 0 137 137" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="68.5" cy="68.5" r="68.5" fill="#FFCF0D" />
                                </svg>
                                <svg className="w-20 h-20 absolute bottom-0 right-1/2 transform translate-x-1/2 translate-y-3/4"
                                    viewBox="0 0 137 137" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="68.5" cy="68.5" r="68.5" fill="#FFCF0D" />
                                </svg>
                            </div>
                            <div className="z-20 absolute top-1/4 right-20 transform -translate-x-4 -translate-y-32">
                                <img src={Assets.images.imgPlane1} alt="Plane" />
                            </div>
                        </div>

                        <div className="relative justify-self-center">
                            <div className="z-10 rounded-3xl text-white m-0 py-16 px-8 w-64 h-64" style={{ backgroundColor: '#00A5A9' }}>
                                <div className="font-mont-semibold text-2xl">Mittwoch</div>
                                <div className="text-md mt-4">In der Regel kannst Du selbst entscheiden, ob  on- oder offside</div>
                            </div>

                            <div className="z-20 absolute top-0 right-1/3 transform translate-x-full -translate-y-24">
                                <img src={Assets.images.imgLight} alt="Light" />
                            </div>
                        </div>
                    
                        <div className="relative justify-self-center z-20">
                            <div className="z-10 rounded-3xl text-white m-0 px-8 py-16 relative w-64 h-64" style={{ backgroundColor: '#FFCF0D' }}>
                                <div className="font-mont-semibold text-2xl">Donnerstag</div>
                                <div className="text-md mt-4">Der Donnerstag ist in der Regel  der CLEO AG-Bürotag</div>
                                <svg className="w-20 h-20 absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-3/4"
                                    viewBox="0 0 137 137" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="68.5" cy="68.5" r="68.5" fill="#FFCF0D" />
                                </svg>
                                <svg className="w-20 h-20 absolute bottom-0 right-1/2 transform translate-x-1/2 translate-y-3/4"
                                    viewBox="0 0 137 137" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="68.5" cy="68.5" r="68.5" fill="#FFCF0D" />
                                </svg>
                            </div>
                            <div className="z-20 absolute top-0 right-1/2 transform translate-x-48 -translate-y-24">
                                <img src={Assets.images.imgMan2} alt="Male" />
                            </div>
                            <div className="z-20 absolute -bottom-1/4 right-1/2 transform -translate-x-8 -translate-y-16">
                                <img src={Assets.images.imgWoman} alt="Female" />
                            </div>
                        </div>

                        <div className="relative justify-self-center z-10">
                            <div className="absolute top-0 right-1/4 transform translate-x-40 -translate-y-1/3" style={{ zIndex: -1 }}>
                                <img src={Assets.images.imgLeaf2} className="w-full" alt="Leaf" />
                            </div>
                            <div className="z-10 rounded-3xl text-white m-0 px-8 py-16 w-64 h-64" style={{ backgroundColor: '#00A5A9' }}>
                                <div className="font-mont-semibold text-2xl">Freitag</div>
                                <div className="text-md mt-4">Freitag geht es langsam mit Home-Office ins Weekend</div>
                            </div>
                            <div className="z-20 absolute bottom-0 left-1/2 transform -translate-x-40 translate-y-20">
                                <img src={Assets.images.imgMan1} alt="Male" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default JobExam;