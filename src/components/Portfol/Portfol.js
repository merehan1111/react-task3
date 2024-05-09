import Addcart from "./Addcart";
import './Portfol.css'
export default function Portfoli() {
  return (
    <>
      <div className="container mt-3">
        <h4 style={{fontSize:'30px',fontWeight:'bold'}}>Portfolie</h4>
        <div className="row mt-3 ">
          <Addcart title={"Web Design"} />
          <Addcart title={"Mobile Design"} />
          <Addcart title={"Logo Design"} />
          <Addcart title={"Android"} />
          <Addcart title={"Cloud"} />
          <Addcart title={"Open Source"} />
         
        </div>
      </div>
    </>
  );
}
