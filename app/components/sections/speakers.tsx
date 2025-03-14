import { MicVocal } from "lucide-react";

function SpeakersSection() {
    return (
        <div className="border-gray-300 border-2 bg-white  flex items-center justify-center h-96 rounded-lg flex-col space-y-4 text-gray-800 w-full max-w-4xl">
            <div className="p-6 px-8 text-gray-300 border-2 rounded-lg ">
                <MicVocal strokeWidth={3} className="text-gray-400"></MicVocal>
            </div>
            <div>
                Speakers
            </div>
            <div>
                <span className="text-gray-600">No speakers have been decided for the current time!</span>
            </div>
        </div>
    );
}

export {SpeakersSection}