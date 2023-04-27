import './style.scss';

interface DefaultBtnProps {
    title: string,
    link: string,
    transparent?: boolean,
    blueBtn?: boolean
}

export default function DefaultBtn(props: DefaultBtnProps) {
    const { title, link, transparent, blueBtn } = props;
    return (
        <a 
            className={`default-btn d-flex align-items-center justify-content-center ${blueBtn && "blue-btn"} ${transparent && "transparent"}`}
            href={link}
            target="_blank"
            rel="noreferrer"
        >
            {title}
        </a>
    );
}