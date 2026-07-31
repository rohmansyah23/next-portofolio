import { project } from "@/types/main"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { FaGithub, FaVideo } from "react-icons/fa"
import { BiLinkExternal } from "react-icons/bi"
import { CgZoomIn } from "react-icons/cg"
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ImageModal from "./ImageModal";

const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeInOut' } }
};

const Project = ({ name, image, category, techstack, desc, links }: project) => {

    const linkCount = [links.visit, links.code, links.video].filter((link) => link.trim()).length;

    const [open, setOpen] = useState(false);

    const actionsRef = useRef<HTMLDivElement>(null);
    const dragState = useRef({ active: false, startX: 0, startScrollLeft: 0, moved: false });

    useEffect(() => {
        const el = actionsRef.current;
        if (!el || linkCount < 3) return;

        const onPointerDown = (e: PointerEvent) => {
            if (e.pointerType !== 'mouse') return;
            if (el.scrollWidth <= el.clientWidth) return;
            dragState.current = { active: true, startX: e.clientX, startScrollLeft: el.scrollLeft, moved: false };
            el.setPointerCapture(e.pointerId);
        };
        const onPointerMove = (e: PointerEvent) => {
            const s = dragState.current;
            if (!s.active) return;
            const dx = e.clientX - s.startX;
            if (Math.abs(dx) > 4) {
                s.moved = true;
                e.preventDefault();
            }
            if (s.moved) el.scrollLeft = s.startScrollLeft - dx;
        };
        const endDrag = (e: PointerEvent) => {
            dragState.current.active = false;
            if (el.hasPointerCapture(e.pointerId)) el.releasePointerCapture(e.pointerId);
        };

        el.addEventListener('pointerdown', onPointerDown);
        el.addEventListener('pointermove', onPointerMove);
        el.addEventListener('pointerup', endDrag);
        el.addEventListener('pointercancel', endDrag);
        return () => {
            el.removeEventListener('pointerdown', onPointerDown);
            el.removeEventListener('pointermove', onPointerMove);
            el.removeEventListener('pointerup', endDrag);
            el.removeEventListener('pointercancel', endDrag);
        };
    }, [linkCount]);

    const onActionClickCapture = (e: React.MouseEvent<HTMLDivElement>) => {
        if (dragState.current.moved) {
            e.preventDefault();
            e.stopPropagation();
            dragState.current.moved = false;
        }
    };

    const [ref, inView] = useInView({
        threshold: 0.2,
        triggerOnce: true
    });

    return (
        <motion.div
            ref={ref}
            variants={cardVariants}
            initial='hidden'
            animate={inView ? 'visible' : 'hidden'}
            className="group flex flex-col gap-2 bg-white dark:bg-grey-800 rounded-lg p-4">

            <div className="relative rounded-lg bg-violet-50 cursor-pointer" onClick={() => setOpen(true)}>
                <Image alt={name} width={1920} height={1080} className="max-w-full aspect-video object-cover object-top rounded-lg" src={image} />
                <div className="absolute bottom-2 right-2 p-2 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <CgZoomIn size={20} />
                </div>
            </div>

            <ImageModal src={image} name={name} open={open} onClose={() => setOpen(false)} />

            <div className="my-2 flex flex-col gap-3">
                <h3 className="text-xl font-medium">{name}</h3>
                {desc && <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">{desc}</p>}

                {(links.visit.trim() || links.code.trim() || links.video.trim()) &&
                    <div ref={actionsRef} onClickCapture={onActionClickCapture} onDragStart={(e) => e.preventDefault()} className={"flex items-center gap-2 " + (linkCount >= 3 ? "overflow-x-auto scroll-hide touch-pan-x cursor-grab active:cursor-grabbing" : "")}>
                        {links.visit.trim() &&
                            <Link href={links.visit} target="_blank" aria-label={`Visit ${name}`} title="Visit site" className={"inline-flex items-center justify-center gap-2 text-sm py-2 px-3 rounded-md font-medium whitespace-nowrap bg-violet-600 text-white hover:bg-violet-700 transition-all " + (linkCount >= 3 ? "flex-none" : "flex-1")}>
                                <BiLinkExternal size={16} /> Live Demo
                            </Link>
                        }
                        {links.code.trim() &&
                            <Link href={links.code} target="_blank" aria-label={`Source code of ${name}`} title="GitHub" className={"inline-flex items-center justify-center gap-2 text-sm py-2 px-3 rounded-md font-medium whitespace-nowrap bg-gray-100 text-gray-700 hover:bg-gray-800 hover:text-white dark:bg-gray-200 dark:text-gray-800 dark:hover:bg-white dark:hover:text-gray-900 transition-all " + (linkCount >= 3 ? "flex-none" : "flex-1")}>
                                <FaGithub size={16} /> GitHub
                            </Link>
                        }
                        {links.video.trim() &&
                            <Link href={links.video} target="_blank" aria-label={`Video demo of ${name}`} title="Video demo" className={"inline-flex items-center justify-center gap-2 text-sm py-2 px-3 rounded-md font-medium whitespace-nowrap bg-rose-500 text-white hover:bg-rose-600 transition-all " + (linkCount >= 3 ? "flex-none" : "flex-1")}>
                                <FaVideo size={16} /> Video
                            </Link>
                        }
                    </div>
                }

                <div className="flex flex-wrap gap-1.5">
                    {techstack.split(',').map((tech, i) => (
                        <span key={i} className="text-xs px-2.5 py-1 rounded-full bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-100">
                            {tech.trim()}
                        </span>
                    ))}
                </div>
            </div>

        </motion.div>
    )
}

export default Project