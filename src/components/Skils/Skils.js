import Lang from "./lang";
import Skill from "./skill";
import './Skils.css'
export default function skills() {

  return (
    <div className='container bg-dark mt-1 p-3'>
      <h3 className="h3-skill">Skills</h3>
      <p className="p-content">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo iste ,consectetur adipisicing elit<br/>
        suscipit sequi earum consequuntur perferendis sit dolorem sunt
        veritatis. Aliquam commodi consequuntur tenetur suscipit vero
      </p>
      <div className='skill mt-3'>
               <div>
                <Lang title={'My Foucus'}/>
                <hr style={{width: '70%' , color:'white'}}></hr>
                <Lang title={' UI&UX Design'}/>
                <Lang title={'Responsive Design'}/>
                <Lang title={'Web Design'}/>
                <Lang title={'Mobile App Design'}/>
                

            </div>
            <div className="name-progress" >
                <Skill name={'HTML'} value={80} />
                <Skill name={'CSS'} value={70} />
                <Skill name={'JavaScript'} value={90} className="progress-bar bg-danger" />
                <Skill name={'React'} value={60} />
                <Skill name={'Anguler'} value={50}  />

            </div>
</div>
        </div>

     
  );
}
