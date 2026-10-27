import { ArrowRightIcon } from '@heroicons/react/24/outline'
import { motion, useReducedMotion, type Variants } from 'motion/react'
import { Link } from 'react-router'

const TITLE = 'Bardiya'

const titleContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.35 } },
}

const titleLetter: Variants = {
  hidden: { opacity: 0, y: 40, rotateX: -90 },
  show: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { type: 'spring', damping: 12, stiffness: 180 },
  },
}

const fadeIn = (delay: number) => ({
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.6 },
})

export default function HomePage() {
  const reduceMotion = useReducedMotion()

  return (
    <div className='relative overflow-hidden'>
      <div aria-hidden className='pointer-events-none absolute inset-0 -z-10'>
        <div className='absolute inset-0 text-base-content opacity-[0.05] bg-[linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] bg-size-[48px_48px] mask-[radial-gradient(ellipse_at_center,black_30%,transparent_75%)]' />
        <motion.div
          className='absolute -top-40 -left-40 size-128 rounded-full bg-primary/40 blur-3xl'
          animate={reduceMotion ? undefined : { x: [0, 120, 0], y: [0, 80, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className='absolute top-1/3 -right-40 size-112 rounded-full bg-accent/20 blur-3xl'
          animate={
            reduceMotion ? undefined : { x: [0, -100, 0], y: [0, -60, 0] }
          }
          transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <section className='hero min-h-[calc(100vh-4rem)]'>
        <div className='hero-content text-center'>
          <div className='max-w-2xl flex flex-col items-center'>
            <motion.h1
              className='logo-font text-accent text-6xl md:text-7xl pb-4 perspective-[600px]'
              variants={titleContainer}
              initial='hidden'
              animate='show'
              aria-label={TITLE}
            >
              {TITLE.split('').map((char, i) => (
                <motion.span
                  key={i}
                  aria-hidden
                  className='inline-block'
                  variants={titleLetter}
                >
                  {char}
                </motion.span>
              ))}
            </motion.h1>

            <motion.p
              className='text-lg md:text-xl text-base-content/70 max-w-md'
              {...fadeIn(1.1)}
            >
              Find your crowd. Discover, join and host events that are worth
              leaving the house for.
            </motion.p>

            <motion.div
              className='flex flex-wrap justify-center items-center gap-3 mt-8'
              {...fadeIn(1.35)}
            >
              <Link className='btn btn-accent btn-lg group' to='/events'>
                View Events
                <ArrowRightIcon className='size-5 transition-transform group-hover:translate-x-1' />
              </Link>
              <button className='btn btn-primary btn-lg'>
                Learn More
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
