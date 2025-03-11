import { PiSealCheckDuotone } from "react-icons/pi";

export default function HireProsCons() {
    return (
        <div className="container max-w-7xl mx-auto flex flex-col items-center font-medium justify-center gap-y-4 font-outfit py-8
        ">
            <h1 className="six-title text-center">
                Should you Hire Me?
            </h1>
            <div className="grid grid-cols-2 p-4 w-3/4 gap-x-4">

                <div className="py-8 bg-green-300/80 rounded-md text-center">
                    <h3 className="three-title text-green-900 mb-4">
                        What I can do
                    </h3>
                    <div className="flex flex-col items-center justify-center gap-y-5 text-green-900">
                        <div className="flex items-center gap-x-1">
                            <PiSealCheckDuotone className="h-6 w-6"/>
                            <p className="paragraph-responsive">
                                Lorem Ipsum dolor sit amet something something
                            </p>
                        </div>
                        <div className="flex items-center gap-x-1">
                            <PiSealCheckDuotone className="h-6 w-6"/>
                            <p className="paragraph-responsive">
                                Lorem Ipsum dolor sit amet something something
                            </p>
                        </div>
                        <div className="flex items-center gap-x-1">
                            <PiSealCheckDuotone className="h-6 w-6"/>
                            <p className="paragraph-responsive">
                                Lorem Ipsum dolor sit amet something something
                            </p>
                        </div>
                        <div className="flex items-center gap-x-1">
                            <PiSealCheckDuotone className="h-6 w-6"/>
                            <p className="paragraph-responsive">
                                Lorem Ipsum dolor sit amet something something
                            </p>
                        </div>
                        <div className="flex items-center gap-x-1">
                            <PiSealCheckDuotone className="h-6 w-6"/>
                            <p className="paragraph-responsive">
                                Lorem Ipsum dolor sit amet something something
                            </p>
                        </div>
                    </div>
                </div>

                <div className="py-8 bg-red-300/70 rounded-md text-center">
                    <h3 className="three-title text-red-900 mb-4">
                        What I can't do
                    </h3>
                    <div className="flex flex-col items-center justify-center gap-y-5 text-red-900">
                        <div className="flex items-center gap-x-1">
                            <PiSealCheckDuotone className="h-6 w-6"/>
                            <p className="paragraph-responsive">
                                Lorem Ipsum dolor sit amet something something
                            </p>
                        </div>
                        <div className="flex items-center gap-x-1">
                            <PiSealCheckDuotone className="h-6 w-6"/>
                            <p className="paragraph-responsive">
                                Lorem Ipsum dolor sit amet something something
                            </p>
                        </div>
                        <div className="flex items-center gap-x-1">
                            <PiSealCheckDuotone className="h-6 w-6"/>
                            <p className="paragraph-responsive">
                                Lorem Ipsum dolor sit amet something something
                            </p>
                        </div>
                        <div className="flex items-center gap-x-1">
                            <PiSealCheckDuotone className="h-6 w-6"/>
                            <p className="paragraph-responsive">
                                Lorem Ipsum dolor sit amet something something
                            </p>
                        </div>
                        <div className="flex items-center gap-x-1">
                            <PiSealCheckDuotone className="h-6 w-6"/>
                            <p className="paragraph-responsive">
                                Lorem Ipsum dolor sit amet something something
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}