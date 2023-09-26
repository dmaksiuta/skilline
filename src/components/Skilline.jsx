import girl from "../assets/skilline/girl.png";
import team from "../assets/skilline/team.png";

export const Skilline = () =>  {
  
   
    return (
      
      
      <section className="section-mikola container ">
  
        <div className="section-mikola__text ">
  
        <div className="section-mikola__main-title">
        What is <span className="section-mikola__span">Skilline?</span>
  
        </div>
  
  
        <div className="section-mikola__desc">
        Skilline is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.
        </div>
  
        </div>


        {/* photo */}


        <div className="section-mikola__photo container">




          {/* number 1 */}
        <div className="section-mikola__photo-girl">
          <div className="section-mikola__bg-girl">
            
              <img className="girl" src={girl} alt="girl" />
              <div className="section-mikola__bg-blue"></div>
            
          </div>


        <div className="section-mikola__girl-text">
        <div className="section-mikola__title-girl">
            FOR INSTRUCTORS
          </div>

          <div className="section-mikola__girl-btn">
            <a href="/" className="section-mikola__link">
              Start a class day
            </a>
          </div>

        </div>
          


        </div>




        {/* number 2 */}

        <div className="section-mikola__photo-team">
          <div className="section-mikola__bg-girl">
            
              <img className="team" src={team} alt="girl" />
              <div className="section-mikola__team-blue"></div>
            
          </div>


        <div className="section-mikola__girl-text">
        <div className="section-mikola__title-team  ">
            FOR STUDENTS
          </div>

          <div className="section-mikola__team-btn">
            <a href="/" className="section-mikola__team-link">
              Enter acces code
            </a>
          </div>

        </div>
          


        </div>  



        </div>
  
  
  
        
  
  
        
  
  
  
        </section>
    )
  }
  
  