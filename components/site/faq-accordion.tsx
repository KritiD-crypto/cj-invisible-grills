'use client'

import { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'motion/react'
import { Plus } from 'lucide-react'

const FAST_EASE = [0.16, 1, 0.3, 1] as const

interface FaqItemProps {
  question: string
  answer: string
  defaultOpen?: boolean
}

export function FaqAccordionItem({ question, answer, defaultOpen = false }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)
  const prefersReducedMotion = useReducedMotion()

  if (prefersReducedMotion) {
    return (
      <details className="faq-item" open={defaultOpen}>
        <summary>{question}</summary>
        <p>{answer}</p>
      </details>
    )
  }

  return (
    <div className={`faq-item faq-item-animated ${isOpen ? 'is-expanded' : ''}`}>
      <button
        type="button"
        className="faq-question-btn"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="faq-question-text">{question}</span>
        <motion.span
          className="faq-icon-wrap"
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.25, ease: FAST_EASE }}
          aria-hidden="true"
        >
          <Plus size={18} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className="faq-answer-collapse"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              height: { duration: 0.35, ease: FAST_EASE },
              opacity: { duration: 0.25, ease: 'easeOut' },
            }}
          >
            <p className="faq-answer-text">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function FaqAccordionGroup({
  questions,
}: {
  questions: { q: string; a: string }[]
}) {
  return (
    <div className="faq-group-items">
      {questions.map((item, index) => (
        <FaqAccordionItem
          key={item.q}
          question={item.q}
          answer={item.a}
          defaultOpen={index === 0}
        />
      ))}
    </div>
  )
}
