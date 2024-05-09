import './about.css'
function About() {
  return (
    <>
      <div className="container ">
        <div className="row m-5">
          <div className="col-md-4 ">
            <h2 className="h2-about">About me</h2>
          </div>
          <div className="col-md-8">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo iste
              suscipit sequi earum consequuntur perferendis sit dolorem sunt
              veritatis. Aliquam commodi consequuntur tenetur suscipit vero
              totam ratione cupiditate, nulla minima voluptatem 
              quas quibusdam dignissimos vitae ad similique! Quae ex perferendis
              nesciunt enim corrupti tempore. Similique eius omnis ipsam.
            </p>
            <button type="button" className="btn btn-secondary mt-4">Download Resume</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
