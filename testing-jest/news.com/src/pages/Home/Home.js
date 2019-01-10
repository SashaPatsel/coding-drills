import React, { Component } from "react";
import "./home.css"
import API from "../../utils/API";
import Card from "../../components/Card/Card"
import Button from "../../components/Button/Button"

class Home extends Component {

  state = {
    name: this.props.name,
    stories: []
  }

  componentDidMount() {
    let name;
    if (this.props.location) {
       name = this.props.location.state.name
    } else {
       name = "loading"
    }
    const stories = []
    API.getNews("bleacher-report").then(data => {
      data.data.articles.map(story => (
        stories.push(story)
      ))
        
      }).then(wait => {
        this.setState({
          name: name,
          stories: stories
        })
    })
  }

  pickNews(news) {

    const stories = []

    API.getNews(news).then(data => {
      data.data.articles.map(story => (
        stories.push(story)
      ))

    }).then(wait => {
      this.setState({
        stories: stories
      })
    })
  }

  render() {

    return (
      <div>
        <h1 className="home__heading">Welcome, {this.state.name}</h1>

        <h2 className="home__heading">Pick a Source!</h2>
        <div className="home__buttons">
          <Button onClick={() => this.pickNews("bleacher-report")} source="Bleacher Report" />
          <Button onClick={() => this.pickNews("bbc-news")} source="BBC" />
          <Button onClick={() => this.pickNews("the-hill")} source="The Hill" />
        </div>
        <div className="home__cards">
          {this.state.stories.map(story => (
            <Card link={story.url} img={story.urlToImage} title={story.title} description={story.description} />
          ))}
        </div>
      </div>
    )
  }
}

export default Home;

