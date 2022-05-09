import React, { Component } from "react";
import "./threedee-card.scss";

interface IProps {
  content: string;
  logo: string;
  title: string;
  description: string;
  link: string;
}

interface IState {
  prompt: string;
  text: string;
  cursor: string;
}

class ThreeDeeCard extends Component<IProps, IState> {
  
  constructor(props: IProps) {
    super(props);
    this.cardRef = React.createRef();
    this.titleRef = React.createRef();
    this.logoRef = React.createRef();
    this.purchaseRef = React.createRef();
    this.descriptionRef = React.createRef();
    this.sizesRef = React.createRef();
    this.circleRef = React.createRef();
  }

  private cardRef: React.RefObject<HTMLInputElement>;
  private titleRef: React.RefObject<HTMLInputElement>;
  private logoRef: React.RefObject<HTMLInputElement>;
  private purchaseRef: React.RefObject<HTMLInputElement>;
  private descriptionRef: React.RefObject<HTMLInputElement>;
  private sizesRef: React.RefObject<HTMLInputElement>;
  private circleRef: React.RefObject<HTMLInputElement>;

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
      console.log(e);
      this.cardRef.current.style.transition = "none";
      // this.cardRef.current.style.transform = "translateZ(-10px)";
      //Popout
      this.circleRef.current.style.transform = "translateZ(150px)";
      this.titleRef.current.style.transform = "translateZ(150px)";
      this.logoRef.current.style.transform = "translateY(60px) translateZ(250px) rotateZ(-90deg)";
      this.descriptionRef.current.style.transform = "translateZ(125px)";
      this.sizesRef.current.style.transform = "translateZ(100px)";
      this.purchaseRef.current.style.transform = "translateZ(75px)";
  }

  const handleMouseLeave = () => {
    this.cardRef.current.style.transition = "all 0.5s ease";
    this.cardRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //Popback
    console.log(this.circleRef);
    this.circleRef.current.style.transform = "translateZ(0px) rotate(-90deg)";
    this.titleRef.current.style.transform = "translateZ(0px)";
    this.logoRef.current.style.transform = "translateX(0px) translateZ(0px) rotateZ(0deg)";
    this.descriptionRef.current.style.transform = "translateZ(0px)";
    this.sizesRef.current.style.transform = "translateZ(0px)";
    this.purchaseRef.current.style.transform = "translateZ(0px)";
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    this.cardRef.current.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  }

  const openLink = () => {
      window.open(this.props.link, 'v_twitch');
  }

  render() {
    return (
      <div 
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
          onMouseMove={this.handleMouseMove}
          className="container">
        <div className="card" ref={this.cardRef}>
          <div className="logo">
            <div className="circle" ref={this.circleRef}></div>
            <img src={this.props.logo} alt={this.props.title} ref={this.logoRef}></img>
          </div>
          <div className="info">
            <h1 className="title" ref={this.titleRef}>{this.props.title}</h1>
            <h3 ref={this.descriptionRef}>
              {this.props.description}
            </h3>
            <div className="sizes" ref={this.sizesRef}>
              <button>39</button>
              <button>40</button>
              <button className="active">42</button>
              <button>44</button>
            </div>
            <div className="purchase" ref={this.purchaseRef}>
              <button onClick={this.openLink} href={this.props.link}>Launch</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ThreeDeeCard;
