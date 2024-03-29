import CustomImage from "./customImage"

export default function MainSection(){
    const images=[
        "../img/img-1.jpg"
    ]
    return(
        <div className="mainSection">
            <div className="col">
                <h1 className="title">What are we About</h1>
                <p className="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, nemo voluptates. Quas porro debitis nam, esse aliquid mollitia doloribus repellendus animi obcaecati! Ea obcaecati facere quia dolor consectetur excepturi modi.</p>
                <button className="btn">Explore Now</button>
            </div>
            <div className="col gallery">
                <CustomImage/>
                <CustomImage/>
                <CustomImage/>
                <CustomImage/>
                <CustomImage/>
                <CustomImage/>
                <CustomImage/>
                <CustomImage/>
                <CustomImage/>
            </div>
        </div>
    )
}