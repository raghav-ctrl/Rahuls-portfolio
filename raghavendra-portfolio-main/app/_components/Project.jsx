import TransitionLink from '@/components/TransitionLink';
import { cn } from '@/lib/utils';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Image from 'next/image';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP);

const Project = ({ index, project, selectedProject, onMouseEnter }) => {
    const externalLinkSVGRef = useRef(null);

    const { context, contextSafe } = useGSAP(() => {}, {
        scope: externalLinkSVGRef,
        revertOnUpdate: true,
    });

    const handleMouseEnter = contextSafe?.(() => {
        onMouseEnter(project.slug);

        const arrowLine = externalLinkSVGRef.current?.querySelector(
            '#arrow-line',
        );
        const arrowCurb = externalLinkSVGRef.current?.querySelector(
            '#arrow-curb',
        );
        const box = externalLinkSVGRef.current?.querySelector(
            '#box',
        );

        gsap.set(box, {
            opacity: 0,
            strokeDasharray: box?.getTotalLength(),
            strokeDashoffset: box?.getTotalLength(),
        });
        gsap.set(arrowLine, {
            opacity: 0,
            strokeDasharray: arrowLine?.getTotalLength(),
            strokeDashoffset: arrowLine?.getTotalLength(),
        });
        gsap.set(arrowCurb, {
            opacity: 0,
            strokeDasharray: arrowCurb?.getTotalLength(),
            strokeDashoffset: arrowCurb?.getTotalLength(),
        });

        const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
        tl.to(externalLinkSVGRef.current, {
            autoAlpha: 1,
        })
            .to(box, {
                opacity: 1,
                strokeDashoffset: 0,
            })
            .to(
                arrowLine,
                {
                    opacity: 1,
                    strokeDashoffset: 0,
                },
                '<0.2',
            )
            .to(arrowCurb, {
                opacity: 1,
                strokeDashoffset: 0,
            })
            .to(
                externalLinkSVGRef.current,
                {
                    autoAlpha: 0,
                },
                '+=1',
            );
    });

    const handleMouseLeave = contextSafe?.(() => {
        context.kill();
    });

    return (
        <TransitionLink
            href={`/projects/${project.slug}`}
            className={cn(
                'card group block hover:-translate-y-1 transition-transform',
            )}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {project.slug === 'epikcart' ? (
                <div className="w-full overflow-hidden rounded-md mb-4">
                    <Image
                        src={project.thumbnail}
                        alt={project.title}
                        width={800}
                        height={500}
                        className="w-full h-48 object-cover"
                        loading="lazy"
                    />
                </div>
            ) : (
                <div className="w-full rounded-md mb-4 h-48 flex items-center justify-center bg-background-light">
                    <span className="text-lg font-anton text-foreground">
                        {project.title}
                    </span>
                </div>
            )}

            <div className="flex items-start gap-3">
                <div className="font-anton text-sm text-muted-foreground mt-1">
                    _{(index + 1).toString().padStart(2, '0')}.
                </div>
                <div className="flex-1">
                    <h4 className="text-2xl font-anton mb-2 text-foreground">
                        {project.title}
                    </h4>
                    {project.slug !== 'epikcart' && (
                        <p className="text-sm text-muted-foreground mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            {project.description}
                        </p>
                    )}
                    <div className="mt-2 flex flex-wrap gap-2 text-muted-foreground text-xs">
                        {project.techStack.slice(0, 4).map((tech) => (
                            <span
                                key={tech}
                                className="text-xs px-2 py-1 rounded-full bg-background-light text-[color:var(--muted-foreground)]"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </TransitionLink>
    );
};

export default Project;

