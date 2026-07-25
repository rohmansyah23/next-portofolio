import { education, experience } from "@/types/main"
import { useState } from "react"
import { ViewAll } from "../projects/Projects"
import SectionWrapper from "../SectionWrapper"
import ExperienceCard from "./ExperienceCard"

interface Props {
    experienceData: experience[]
    educationData: education[]
}

const Experiences = ({ experienceData, educationData }: Props) => {

    const [show, setShow] = useState<'experience' | 'education'>("experience")
    const [viewAll, setViewAll] = useState(false)

    const [experiences, setExperiences] = useState([...experienceData] as experience[])
    const [educations, setEducations] = useState([...educationData] as education[])

    return (
        <SectionWrapper id="experience" className="min-h-screen">
            <h2 className="text-4xl text-center">Experience</h2>

            <div className="w-fit mx-auto mt-6 p-2 bg-white dark:bg-grey-800 rounded-md flex gap-2 items-center">
                {['Experience', 'Education'].map((e, i) => (
                    <button key={i} onClick={() => setShow(['experience', 'education'][i] as 'experience' | 'education')} className={`py-2 px-4 rounded-md transition-colors ${show === ['experience', 'education'][i] ? 'bg-violet-600 text-white' : 'hover:bg-gray-100 hover:dark:bg-grey-900 text-black dark:text-white'}`}>{e}</button>
                ))
                }
            </div>

            <div className="lg:container sm:mx-4 lg:mx-auto lg:w-5/6 2xl:w-3/4">
                <div className="relative wrap overflow-hidden p-4 md:py-10 md:px-0">
                    <div className="left-6 md:left-1/2 absolute border-gray-300 dark:border-gray-600 h-full border"></div>

                    {viewAll ?
                        (show === "experience" ? experiences : educations).map((e, i) => (
                            <ExperienceCard key={i} {...e} index={i} />
                        ))
                        :
                        (show === "experience" ? experiences : educations).slice(0, 2).map((e, i) => (
                            <ExperienceCard key={i} {...e} index={i} />
                        ))
                    }

                </div>
            </div>

            {(show === "experience" ? experiences : educations).length > 2 &&
                <ViewAll scrollTo='experience' title={viewAll ? "Okay, I got it" : "View All"} handleClick={() => setViewAll(!viewAll)} animate={!viewAll} />
            }

        </SectionWrapper>
    )
}

export default Experiences
