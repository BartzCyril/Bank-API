import {FeatureItem} from "./FeatureItem.tsx";

const features = [
    {
        title: "You are our #1 priority",
        content: "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
        pictureName: "icon-chat"
    },
    {
        title: "More savings means higher rates",
        content: "The more you save with us, the higher your interest rate will be!",
        pictureName: "icon-money"
    },
    {
        title: "Security you can trust",
        content: "We use top of the line encryption to make sure your data and money is always safe.",
        pictureName: "icon-security"
    },
]

export function Feature() {
    return (
        <section className="features">
            <h2 className="sr-only">Features</h2>
            {features.map((f) => <FeatureItem title={f.title} content={f.content} pictureName={f.pictureName} key={f.title}/>)}
        </section>
    )
}