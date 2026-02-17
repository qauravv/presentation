
interface Props { }

export function ExaptationVisual({ }: Props) {
    return (
        <div className="w-full h-full flex items-center justify-center">
            {/* Placeholder for now until image is generated */}
            <div className="relative w-full max-w-4xl aspect-video bg-gray-100 rounded-2xl overflow-hidden shadow-2xl border border-gray-200 flex items-center justify-center">
                <span className="text-gray-400">Exaptation Visual Generating...</span>

                {/* Overlay Text */}
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                    <p className="text-white text-2xl font-bold text-center">
                        Selection doesn&apos;t plan ahead; it repurposes whatever happens to be available.
                    </p>
                </div>
            </div>
        </div>
    )
}
