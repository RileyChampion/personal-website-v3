"use client";

interface ExperienceProp {
    experience: Experience
    isFirst: boolean
    isLast: boolean
}

export default function ExperienceItem({experience, isFirst, isLast} : ExperienceProp) {
    return (
        <div role="listitem" className="flex">
            <div className="flex flex-col items-center mr-4">
                <div className={`w-2.5 h-2.5 rounded-full ${isFirst ? "bg-action" : "bg-bg-inverse"}`}></div>
                <div className={`w-px flex-1 bg-sage ${isLast ? "hidden" : ""}`}></div>
            </div>
            <div className="pb-4">
                <p className="text-xs text-muted">{experience.start}{experience?.end ? ` — ${experience.end}` : "" }</p>
                <p className="text-primary font-bold">{experience.title}</p>
                <p className="text-secondary">{experience.company} · {experience.location}</p>
                <p className="text-secondary italic">{experience.shortDescription}</p>
            </div>
        </div>
    );
}