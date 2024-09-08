export default function Introduction() {
    return (
        <div className="App" id="Intro">
            <div className="row">
                <div className='col-md-3 col-9 offset-2 offset-md-1' data-aos="zoom-in" data-aos-duration="2000">
                    <img src={process.env.PUBLIC_URL + "arali.jpg"} height={300} alt="Dream->code->Achieve" />
                </div>
                <ul className="col-md-6 col-10 offset-1" data-aos="fade-up" data-aos-duration="2000">
                    <h1 className="text-center heading">ಅರಳಿ ತೋಟ</h1>
                    <h5 className="tagline"> - A place of peace</h5>
                    <br />
                    <p> Nestled amidst the serene landscape, our farm is a haven of tranquility and natural beauty, where the majestic arali mara (Banyan tree) reigns supreme. 
    The sprawling branches of this sacred tree provide not only shade but also a symbol of resilience, growth, and longevity. 
    Revered in our culture, the arali mara stands as the heart of the farm, its roots deeply intertwined with the soil that nurtures an abundance of flora and fauna.
Come, experience the serenity of our farm, where the arali mara serves as a living reminder of nature's strength and grace.</p>
                    <br />
                </ul>
            </div>
        </div>
    )
}
