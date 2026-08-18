'use client';
import { FormEvent, useState } from 'react';
type State = 'idle' | 'sending' | 'success' | 'error';

export function ContactForm() {
  const [state, setState] = useState<State>('idle');
  const [message, setMessage] = useState('');
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;
    if (!endpoint || endpoint.includes('your-form-id')) {
      setState('error');
      setMessage(
        'The contact form is not configured yet. Please email hello@cloudvation.com.'
      );
      return;
    }
    setState('sending');
    setMessage('');
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      });
      if (!response.ok) throw new Error();
      setState('success');
      setMessage(
        'Thanks — your enquiry is on its way. We’ll be in touch soon.'
      );
      form.reset();
    } catch {
      setState('error');
      setMessage(
        'We couldn’t send your enquiry. Please try again or email hello@cloudvation.com.'
      );
    }
  }
  if (state === 'success')
    return (
      <div className="form-result success" role="status">
        <h2>Thank you.</h2>
        <p>{message}</p>
      </div>
    );
  return (
    <form className="contact-form" onSubmit={submit} noValidate>
      <div className="form-grid">
        {/* <label>
          Name
          <input name="name" required autoComplete="name" />
        </label> */}
        <label>
          Your E-Mail
          <input name="email" type="email" required autoComplete="email" />
        </label>
        {/* <label>
          Company
          <input name="company" autoComplete="organization" />
        </label> */}
        {/* <label>
          Cloud environment
          <select name="environment" defaultValue="">
            <option value="" disabled>
              Select an option
            </option>
            <option>AWS</option>
            <option>Microsoft Azure</option>
            <option>Google Cloud</option>
            <option>Multi-cloud / other</option>
          </select>
        </label> */}
      </div>
      {/* <label>
        Migration goal
        <select name="goal" required defaultValue="">
          <option value="" disabled>
            Select your priority
          </option>
          <option>Migration strategy and readiness</option>
          <option>Cloud landing zone</option>
          <option>Application or data migration</option>
          <option>Cloud optimization</option>
        </select>
      </label> */}
      <label>
        Message
        <textarea
          name="message"
          rows={5}
          required
          placeholder="Tell us a little about your estate, goals, or timeline."
        />
      </label>
      {/* <label className="checkbox">
        <input type="checkbox" required name="consent" />{' '}
        <span>
          I agree that Cloudvation may use my details to respond to this
          enquiry.
        </span>
      </label> */}
      {state === 'error' && (
        <p className="form-error" role="alert">
          {message}
        </p>
      )}
      <button className="button" disabled={state === 'sending'}>
        {state === 'sending' ? 'Sending…' : 'Send enquiry'}{' '}
        <span aria-hidden>→</span>
      </button>
    </form>
  );
}
