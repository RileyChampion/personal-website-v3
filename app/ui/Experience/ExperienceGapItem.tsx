"use client";

interface ExperienceGapProp {
    experience: ExperienceGap
}

export default function ExperienceGapItem({experience} : ExperienceGapProp) {
    return (
        <div role="listitem" className="flex">
            <div className="w-2.5 flex flex-col items-center mr-4">
                <div className="border-l border-dashed border-action h-full w-px"></div>
            </div>
            <div className="pb-4">
                <p className="text-xs italic text-muted">{experience.start}{experience?.end ? ` — ${experience.end}` : "" }</p>
                <p className="text-secondary text-md italic">{experience.shortDescription}</p>
            </div>
        </div>
    );
}