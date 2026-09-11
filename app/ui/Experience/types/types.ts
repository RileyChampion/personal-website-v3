export interface Experience {
    start: string
    end: string
    title: string
    company: string
    location: string
    shortDescription: string
}

export interface ExperienceGap {
    start: string
    end: string
    shortDescription: string
}

export interface ExperienceList {
    experience: (Experience | ExperienceGap)[]
}