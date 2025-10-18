import sec4 from "../../../assets/img/sec-4.png";
import processImage from "../../../assets/img/process-image.png"; 

export default function Section7() {
  return (
    <section id="Section-7">
      <div className="section-7">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12 ">
  
              <div className="sub-title-wrapper mb-4">
                <h6 className="sub-title">Quality Management Process Flow Chart</h6>
                <img
                
                  src={sec4}
                  loading="lazy"
                  alt="subtitle decoration"
                  className="sub-title-img"
                />
              </div>


              <img
    
                src={processImage}
                alt="Process Flow Visual"
                className="img-fluid"
              
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
