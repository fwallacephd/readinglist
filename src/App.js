import React, { Component } from 'react';
import './App.css';
import Row from './Row/Row';
import Book from "./Book/Book";

class App extends Component {

   render() {
    return (
      <div className="App">
        <section className="heading text-center">
          <div className="row title">
            <div className="col-md-12 title">
              <h1 className="text-center title">Faith's 2018 Reading List</h1>
              <h3 className="text-center subTitle">The Good, the Bad, and the Surprising</h3>
              <br></br>
              <h4 className="text-center quote">Never trust anyone who has not brought a book with them.</h4>
              <h5 className="text-center author">― Lemony Snicket, Horseradish</h5>
              <br></br>
            </div>
          </div>
        </section>
        <Row>
          <Book image="incredible.png" title="Strangely Incredibly Good" author="Heather Grace Stewart" review="An interesting modern take on the traditional genie in a bottle story, but written poorly with no suspense and predictable outcomes. I do not recommmend."></Book>
          <Book image="circe.png" title="Circe" author="Madeline Miller" review="Circe is famous for her encounter with Odysseus and portrayed as a witch, but how did she become the devious woman that ensares Odysseus, and is she really evil?  "></Book>
          <Book image="existential.png" title="Existential: The Mission: To Survive " author="Ryan W. Aslesen" review="Typical science fiction horror. An alien species is discovered, and it is destroys everything and everyone in its way. Skip this book."></Book>
          <Book image="liberal.png" title="The Liberal Redneck Manifesto" author="Trae Crowder" review="This is a must read. Extremely well-researched and incredibly thoughtful. Trae praises the amazing culture of the south but all scolds southerners for the hateful behavior that still dominates much of the south."></Book>
          <Book image="house.png" title="The House With a Clock In Its Walls" author="John Bellairs" review="I very rarely say this, but the movie was better. It's a great story, but the writing of the book is very simplistic and over simplifies the personality of the main character."></Book>
          <Book image="children.png" title="Children of Blood and Bone" author="Tomi Adeyemi " review="Incredible book infused with Wes African culture. A backdrop of a story of magic really tells a story of power, politics, race and class. Read this now."></Book>
          <Book image="Vwars.png" title="V-Wars" author="Jonathan Maberry " review="Vampirism is a genetic disorder that is impacted by race. The author uses a non-traditional takeon the vampire myth to talk about immigration, healthcare, and more."></Book>
          <Book image="justice.png" title="Ancillary Justice" author="Ann Leckie" review="Futuristic sciece fiction novel. What makes it different is that gender is neutral. You don't know if a characters is a man or woman, and it brings up your inherent bias. Interesting read."></Book>

        </Row>
        
      </div>
    );
  }
}

export default App;
