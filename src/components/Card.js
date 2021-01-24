import React from 'react'
import PopCard from './Popups/PopCard';
import './Card.css'
import ccboard from './images/ccboard.jpg'
import ard from './images/ard.jpg'
import obie from './images/obie.jpg'

function Card(props) {
    return (
        <div className="cards" id={props.id}>
            <h1>Check Out My Experience</h1>
            <p className="subtext"><i className='fas fa-angle-double-down' /> Click Each Item For More Info <i className='fas fa-angle-double-down' /></p>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <PopCard 
                            src= {ccboard}
                            text="Contributed to the finalization of a production data warehouse and aided in the development of a web application."
                            label='Clayton County Board of Commissioners'
                            path='/'
                            content='During my time with the Clayton County Board of Commissioners software development team (Sept. 2020-Dec. 2020) I gained my first hands on experience
                            in the work force. I was quickly introduced to Agile software development and began contributing right away. This was an important experience for me
                            as I had to learn how to adapt my theoretical knowledge from academia to reality.'
                            content2='I completed and contributed projects that required data mapping, query writing, the creation of paginated reports, and the use of JavaScript.'
                            list={['SQL', 'SQL Server Reporting Services', 'Microsoft Visual Studio', 'React', 'Git']}
                            head='Skills Utilized:'
                        />
                        <PopCard
                            src= {ard}
                            text="Became knowledgeable with Arduinos, specifically how they interface with users and the physical world."
                            label='Arduino On Campus Research'
                            path='/'
                            content='I spent the Winter (2020) with a Computer Science professor gaining experience and knowledge in regards to Arduinos. This tiny microcontroller
                            opened my eyes on how much coding could interact with my everyday life. I would say that this experience brought me to the realization that 
                            my coding and intelligence could be used for much more than just Web Development or Databases.'
                            content2='My favorite project that came from this was a weather display that updated through a weather API every hour. I will be continuing to partake
                            in on campus oppurtunities that allow me to build upon this experience. Stay Tuned!'
                            list={['Arduino UNO', 'Arduino IDE', 'Python', 'RapidAPI (API Platform)']}
                            head='Skills Utilized:'
                        />
                        <PopCard
                            src= {obie}
                            text="College football player and serve on the board for a student organization."
                            label='College Athlete - Campus Org'
                            path='/'
                            content='I am on the Oberlin College Yeomen football team and also the treasurer for the Black Student Athlete Group. I think it is very important
                            to give efforts to areas you find important in life. Being on the board for this student organization has not only allowed me to meet awesome people,
                            but also given me a voice.'
                            content2='As an organization, we have improved quality of participation and given our athletes tons of career/academic oppurtunities
                            through alumni panels, events, and mentoring. As an athlete, I continue to strive to be great and am living out my childhood dreams!'
                            list={['Leadership', 'Communication', 'Planning', 'Accountability']}
                            head='Skills Utilized:'
                        />
                        {/* <CardItem 
                        src= {ccboard}
                        text="Contributed to the finalization of a production data warehouse and construction of reports with SSRS."
                        label='Clayton County Board of Commissioners'
                        path='/'
                        />
                        <CardItem 
                        src= "/"
                        text="Put stuff about arduinos here"
                        label='Arduino On Campus Research'
                        path='/'
                        /> */}
                    </ul>
                    <ul className="cards__items">
                        {/* <CardItem 
                        src= "/"
                        text="College football stuff"
                        label='Oberlin College Student Athlete -maybe (maybe not who knows) - BSAG'
                        path='/'
                        />
                        <CardItem 
                        src= "/"
                        text="Blank - Clayton County - September to December 2020 Arduino Jan 2020 to Feb 2020, add a blank one saying they could be next - maybe switch to recent experience and only have two"
                        label='Blank - add time stamps to my current experiences'
                        path='/'
                        /> */}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Card
