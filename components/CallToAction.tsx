import Link from "next/link"
import { FaLinkedin } from "react-icons/fa"
import SectionWrapper from "./SectionWrapper"

const CallToAction = () => {
  return (
    <SectionWrapper id='cta' className="xl:max-w-6xl my-24 lg:mx-10 xl:mx-auto mx-4 relative overflow-hidden flex flex-col-reverse md:flex-row gap-3 md:gap-0 items-center bg-gradient-to-r from-violet-700 to-purple-700 text-white rounded-2xl p-6 md:p-8 lg:px-12 lg:py-16 z-10">
      <div className="flex flex-col md:w-full">
        <h2 className="text-2xl lg:text-4xl font-extrabold">Let&apos;s Work <span className="text-yellow-400">Together</span></h2>
        <p className="text-sm md:text-base mt-2.5 md:mt-6">Have a project in mind? I&apos;m always open to new opportunities and collaborations.</p>
        <div className="flex items-center gap-4 my-4">
          <Link href="https://www.linkedin.com/in/muhammad-rohman-syah-13a0873a8/" target="_blank" className="group py-3 px-6 bg-white text-violet-700 font-semibold rounded-xl w-fit flex items-center gap-2.5 hover:bg-violet-50 hover:shadow-2xl hover:shadow-white/20 transition-all duration-300">
            <FaLinkedin size={20} className="group-hover:scale-110 transition-transform duration-300" />
            Contact on LinkedIn
            <span className="ml-1 group-hover:translate-x-1 transition-transform duration-300">&rarr;</span>
          </Link>
        </div>
      </div>
    </SectionWrapper >
  )
}

export default CallToAction
