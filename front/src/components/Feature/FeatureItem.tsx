type FeatureItemProps = {
    title: string,
    content: string,
    pictureName: string
}

export function FeatureItem({title,content,pictureName} : FeatureItemProps) {
    return (
        <div className="feature-item">
            <img
                src={`./img/${pictureName}.png`}
                alt="Chat Icon"
                className="feature-icon"
            />
            <h3 className="feature-item-title">{title}</h3>
            <p>
                {content}
            </p>
        </div>
    )
}