import React from 'react';

const About = () => {
    return (
        <div className='d-flex gap-5'>
            <div className="card" style={{ width: "18rem" }}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png" className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button type='button' className="btn btn-primary">Go somewhere</button>
                </div>
            </div><div className="card" style={{ width: "18rem" }}>
                <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button type='button' className="btn btn-primary">Go somewhere</button>
                </div>
            </div><div className="card" style={{ width: "18rem" }}>
                <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button type='button' className="btn btn-primary">Go somewhere</button>
                </div>
            </div>
        </div>
    );
};

export default About;