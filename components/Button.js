import Link from 'next/link'

export default function Button({ text = '', classes = '', link = false, linkUrl = '', linkTitle = '' }) {

    if (link) {
        return (
            <Link className='classes' href={linkUrl} title={linkTitle}>{text}</Link>
        )
    } else {
        <button className={classes}>{text}</button>
    }
}