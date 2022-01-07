import React from 'react';
import './Projects.css'
import PopCard from './Popups/PopCard';
import report from './images/reportsample.jpg'
import poll from './images/obiepoll.jpg'
import ard from './images/ardWeather.PNG'
import web from './images/web.PNG'
import party from './images/F(X).JPG'

export default class Projects extends React.Component {

    render() {
        return (
            <div className='projects' id={this.props.id}>
                <h1>Projects</h1>
                <p className="subtext"><i className='fas fa-angle-double-down' /> Click Each Item For More Info <i className='fas fa-angle-double-down' /></p>
                <div className="cards__container">
                    <div className="cards__wrapper">
                        <ul className="cards__items">
                            <PopCard
                                src= {party}
                                text="Made front and back end solutions building a mobile social app for campus."
                                label="F(x)"
                                path="/"
                                content="Done in collaboration with classmates, this mobile application allows students to connect across campus. Not only that, but it allows students to communicate
                                anonymously while searching and actively engaging in social activies in the area."
                                content2="The problems presented when developing this mobile application came from connecting react-native to Google Firebase and developing a database model that
                                sufficed. Firebase was new to the team but through hardwork and communication we built a great mobile application that we hope to put in production one day."
                                list={['React Native', 'Firebase', 'Git']}
                                head= 'Knowledge Used:'
                            />
                             <PopCard 
                                src= {report}
                                text="Contributed heavily to the production of a clerk interface for county court room workers."
                                label='Court Room Report Interface'
                                path='/'
                                content='This web application is to be utilized by court room workers to aid in the viewing of data and reports.
                                The user logs in and is redirected to a page where they select reports on the data they wish to see. After a report
                                is selected, it is shown to the user in an iframe. They have the ability to print, refresh, and
                                check the navbar to view their employee information.'
                                content2="This was an interesting website to develop as I had to find the best way to display the selected report to the user. 
                                Reports were coming from an alternate site, so I utilized an iframe and embedded the report directly into this web application. The list of available reports
                                and employee information was updated and controlled through an API."
                                list={['HTML/CSS', 'React', 'Git']}
                                head='Knowledge Used:'
                            />

                            <PopCard
                                src= {poll}
                                text="Aided in the backend and decision making process for an on campus polling website."
                                label='ObiePoll'
                                path='/'
                                content='Done in collaboration with some classmates, this site was made as an idea. Oberlin College is consistently having students
                                poll and survey other students. To make this process easier for the student body, we thought it would be cool to centralize all the surveys.
                                Users had the ability to post and vote on polls they found interesting.'
                                content2='The problems we ran into with this website was finding a way to store each poll and their respective counts. After some research
                                we decided that the best route was to utilize Flask and SQLAlchemy in conjuction with Python to actually store our data. On the frontend we used
                                React to easily update our page.'
                                list={['HTML/CSS', 'React', 'Python (Flask)', 'SQLAlchemy', 'Git']}
                                head='Knowledge Used:'
                            />
                        </ul>
                        <ul className="cards__items">
                           
                           
                           
                           <PopCard
                            src= {web}
                            text="Developed my resume website during COVID-19 quarantine."
                            label='Resume Website'
                            path='/'
                            content='Bored while quarantining for months, what do you do with yourself? Well you make a website, DUH! This was a great way to 
                            showcase my knowledge and speed up my days spent in isolation.'
                            content2='Coding this was fun as I had complete freedom. I wanted to make something clean, simple, and effective. I think I did just that. 
                            On top of making a great site, I also wanted to be sure that it scaled properly to mobile devices. Of course I accpomplished that. Give it a try! This
                            site is hosted with Github Pages.'
                            list={['HTML/CSS', 'React']}
                            head='Knowledge Used:'
                            />

                        <PopCard
                            src= {ard}
                            text="Utilized an Arduino and API to create a nifty and helpful application."
                            label='Arduino Weather'
                            path='/'
                            content='This was completed alone as something that could apply my arduino experience. The thought process was, why wake up and check your 
                            phone for the weather? WHY NOT CODE SOMETHING THAT WILL ALWAYS SHOW YOU THE WEATHER! So now you see, that is why I made this purpose built weather display.'
                            content2='There were no inherent problems with this project, but I had to find the best way to get the weather for each day. For that, I utilized a
                            weather API and set it on an hourly timer for updating the data. This allowed me to cycle the display accurately displaying max temp, min temp, feels like,
                            and precipitaion.'
                            list={['Arduino', 'Python']}
                            head='Knowledge Used:'
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
                            
                            
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}