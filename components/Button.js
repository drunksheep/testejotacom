import Link from 'next/link'

export default function Button({ text = '', classes = '', link = false, linkUrl = '', linkTitle = '', clickAction = null }) {
    if (link) {
        return (
            <Link className={classes} href={linkUrl} title={linkTitle}>{text}</Link>
        )
    } else {
        return(
            <button onClick={clickAction} className={classes}>{text}</button>
        )
    }
}
