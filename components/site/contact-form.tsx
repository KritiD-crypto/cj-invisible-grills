'use client'

import { useMemo, useState } from 'react'
import { ArrowUpRight, Check, MessageCircle } from 'lucide-react'
import { motion, AnimatePresence, useReducedMotion } from 'motion/react'

const FAST_EASE = [0.16, 1, 0.3, 1] as const

const serviceOptions = [
  'Invisible Grills',
  'Safety Nets',
  'Balcony Nets',
  'Bird Nets',
  'Pigeon Nets',
  'Sports Nets',
  'Cloth Hangers',
  'Bird Spikes',
  'Not sure yet',
]

type FormValues = {
  name: string
  phone: string
  city: string
  service: string
  property: string
  message: string
}

const emptyForm: FormValues = {
  name: '',
  phone: '',
  city: '',
  service: '',
  property: '',
  message: '',
}

export function ContactForm() {
  const [values, setValues] = useState(emptyForm)
  const [attempted, setAttempted] = useState(false)
  const [prepared, setPrepared] = useState(false)
  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({})
  const prefersReducedMotion = useReducedMotion()

  const whatsappUrl = useMemo(() => {
    const message = `Hello CJ Invisible Grills, I’d like to discuss an enquiry.\nName: ${values.name}\nPhone: ${values.phone}\nCity/locality: ${values.city}\nService: ${values.service}\nProperty type: ${values.property}\nDetails: ${values.message || 'I would like to discuss the requirements.'}`
    return `https://wa.me/919886577746?text=${encodeURIComponent(message)}`
  }, [values])

  function update(field: keyof FormValues, value: string) {
    setValues((current) => ({ ...current, [field]: value }))
    setPrepared(false)
    if (attempted) setErrors(validate({ ...values, [field]: value }))
  }

  function validate(form: FormValues) {
    const next: Partial<Record<keyof FormValues, string>> = {}
    if (!form.name.trim()) next.name = 'Please enter your name.'
    const digits = form.phone.replace(/\D/g, '')
    if (!digits) next.phone = 'Please enter a phone number.'
    else if (digits.length < 10 || digits.length > 13)
      next.phone = 'Enter a valid phone number including country code if needed.'
    if (!form.city.trim()) next.city = 'Please enter your city or locality.'
    if (!form.service) next.service = 'Choose a service or select “Not sure yet”.'
    if (!form.property) next.property = 'Choose a property type.'
    return next
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setAttempted(true)
    const nextErrors = validate(values)
    setErrors(nextErrors)
    setPrepared(Object.keys(nextErrors).length === 0)
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-grid">
        <label className="form-field">
          <span>
            Name <b aria-hidden="true">*</b>
          </span>
          <input
            autoComplete="name"
            name="name"
            value={values.name}
            onChange={(event) => update('name', event.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {errors.name && (
            <small id="name-error" className="field-error">
              {errors.name}
            </small>
          )}
        </label>
        <label className="form-field">
          <span>
            Phone <b aria-hidden="true">*</b>
          </span>
          <input
            autoComplete="tel"
            name="phone"
            type="tel"
            inputMode="tel"
            value={values.phone}
            onChange={(event) => update('phone', event.target.value)}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
          />
          {errors.phone && (
            <small id="phone-error" className="field-error">
              {errors.phone}
            </small>
          )}
        </label>
        <label className="form-field">
          <span>
            City / locality <b aria-hidden="true">*</b>
          </span>
          <input
            autoComplete="address-level2"
            name="city"
            value={values.city}
            onChange={(event) => update('city', event.target.value)}
            aria-invalid={Boolean(errors.city)}
            aria-describedby={errors.city ? 'city-error' : undefined}
          />
          {errors.city && (
            <small id="city-error" className="field-error">
              {errors.city}
            </small>
          )}
        </label>
        <label className="form-field">
          <span>
            Service needed <b aria-hidden="true">*</b>
          </span>
          <select
            name="service"
            value={values.service}
            onChange={(event) => update('service', event.target.value)}
            aria-invalid={Boolean(errors.service)}
            aria-describedby={errors.service ? 'service-error' : undefined}
          >
            <option value="">Choose a service</option>
            {serviceOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
          {errors.service && (
            <small id="service-error" className="field-error">
              {errors.service}
            </small>
          )}
        </label>
        <label className="form-field">
          <span>
            Property type <b aria-hidden="true">*</b>
          </span>
          <select
            name="property"
            value={values.property}
            onChange={(event) => update('property', event.target.value)}
            aria-invalid={Boolean(errors.property)}
            aria-describedby={errors.property ? 'property-error' : undefined}
          >
            <option value="">Choose a property type</option>
            <option>Apartment</option>
            <option>Villa</option>
            <option>Independent house</option>
            <option>Commercial / sports space</option>
            <option>Other</option>
          </select>
          {errors.property && (
            <small id="property-error" className="field-error">
              {errors.property}
            </small>
          )}
        </label>
        <label className="form-field form-field-wide">
          <span>Anything else you’d like us to know?</span>
          <textarea
            name="message"
            rows={4}
            value={values.message}
            onChange={(event) => update('message', event.target.value)}
            placeholder="A few details about the space or what you’re looking for"
          />
        </label>
      </div>
      <p className="privacy-note">
        Your details are used only to prepare the WhatsApp message you choose to send. This form does not submit information to a server.
      </p>

      {!prepared ? (
        <motion.button
          className="button button-primary"
          type="submit"
          whileHover={prefersReducedMotion ? {} : { scale: 1.02, y: -2 }}
          whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
          transition={{ duration: 0.2 }}
        >
          Prepare WhatsApp enquiry <MessageCircle size={16} />
        </motion.button>
      ) : (
        <AnimatePresence>
          <motion.div
            className="form-prepared"
            role="status"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: FAST_EASE }}
          >
            <span>
              <Check size={16} /> Your details are ready. Nothing has been sent yet.
            </span>
            <motion.a
              className="button button-primary"
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              whileHover={prefersReducedMotion ? {} : { scale: 1.02, y: -2 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
            >
              Open WhatsApp <ArrowUpRight size={15} />
            </motion.a>
          </motion.div>
        </AnimatePresence>
      )}

      {attempted && Object.keys(errors).length > 0 && (
        <p className="form-error-summary" role="alert">
          Please review the fields marked above.
        </p>
      )}
    </form>
  )
}
