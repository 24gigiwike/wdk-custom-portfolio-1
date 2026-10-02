import type { PortfolioContact } from '../types/portfolio.ts'
import { Button } from './Button.tsx'
import { MultilineText } from './MultilineText.tsx'

export function Contact({ contact }: { contact: PortfolioContact }) {
    return (
        <section className="luxury-contact" id="contact">
            <div className="contact-wrapper">
                <div className="contact-intro">
                    <p className="eyebrow">{contact.eyebrow}</p>
                    <h2>
                        <MultilineText text={contact.heading} />
                    </h2>
                    <p className="description">{contact.description}</p>
                </div>

                <form className="contact-form" action={contact.formEndpoint} method="POST">
                    <div className="field-row">
                        <div className="field">
                            <label>Name</label>
                            <input type="text" placeholder="Your name" name="name" />
                        </div>
                        <div className="field">
                            <label>Email</label>
                            <input type="email" placeholder="Email address" name="email" />
                        </div>
                    </div>

                    <div className="field-row">
                        <div className="field">
                            <label>Company</label>
                            <input type="text" placeholder="Company name" />
                        </div>
                        <div className="field">
                            <label>Project Type</label>
                            <select name="service">
                                {contact.projectTypes.map((type) => (
                                    <option key={type}>{type}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="field">
                        <label>Project Details</label>
                        <textarea placeholder="Tell us about your goals..." name="message" />
                    </div>

                    <Button className="submit-button" type="submit">
                        Submit Request
                        <span>↗</span>
                    </Button>
                </form>
            </div>
        </section>
    )
}
