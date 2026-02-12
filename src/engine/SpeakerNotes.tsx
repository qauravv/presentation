interface SpeakerNotesProps {
  notes: string
  isOpen: boolean
  onClose: () => void
}

export function SpeakerNotes({ notes, isOpen, onClose }: SpeakerNotesProps) {
  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/70 backdrop-blur-sm"
      role="dialog"
      aria-label="Speaker notes"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl max-h-[50vh] overflow-y-auto bg-obsidian border-t border-slate-700 p-6 text-left shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="text-bone font-sans text-base leading-relaxed whitespace-pre-wrap">
          {notes}
        </p>
        <p className="mt-4 text-slate-500 text-sm">Press S or Escape to close</p>
      </div>
    </div>
  )
}
