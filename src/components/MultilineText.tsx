import { Fragment } from 'react'

export function MultilineText({ text }: { text: string }) {
    const lines = text.split('\n')

    return lines.map((line, index) => (
        <Fragment key={index}>
            {index > 0 ? <br /> : null}
            {line}
        </Fragment>
    ))
}
