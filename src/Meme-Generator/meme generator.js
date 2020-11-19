import React from "react";
import "./memegeneretor.css";
import * as htmlToImage from 'html-to-image';
import download from "downloadjs";

class Meme extends React.Component {
  constructor() {
    super();
    this.state = {
      header: "",
      footer: "",
      imagearr: [],
      image: "",
      loading: false,
      color: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.downloadimg = this.downloadimg.bind(this);
  }
  handleChange(event) {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  }
  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((response) => {
        const { memes } = response.data;
        this.setState({ imagearr: memes })
        const randNum = Math.floor(Math.random() * this.state.imagearr.length);
        const randimage = this.state.imagearr[randNum].url;
        this.setState({ image: randimage });
        console.log(this.state.image);
      });
  }
  handleClick(event) {
    event.preventDefault();
    const randNum = Math.floor(Math.random() * this.state.imagearr.length);
    const randimage = this.state.imagearr[randNum].url;
    this.setState({ image: randimage });
    console.log(this.state.image);
  }
  downloadimg() {
    var node = document.getElementById("my-node");
    htmlToImage.toPng(node);
    htmlToImage
      .toPng(document.getElementById("my-node"))
      .then(function (dataUrl) {
        download(dataUrl, "my-node.png");
      });
  }
  render() {
    return (
      <div>
        <div className="flexbox">
          {/* TITLE */}
          <div
            className="flex"
            className="play"
            style={{ position: "relative" }}
          >
            <h1>
              <text class="h14">
                <span>🤣</span>
              </text>
              <text class="h1" style={{ color: "#00004d" }}>
                M
              </text>
              <text class="h2" style={{ color: "#000066" }}>
                E
              </text>
              <text class="h3" style={{ color: "#000080" }}>
                M
              </text>
              <text class="h4" style={{ color: "#000099" }}>
                E
              </text>{" "}
              <text class="h5" style={{ color: "#0000b3" }}>
                G
              </text>
              <text class="h6" style={{ color: "#0000cc" }}>
                E
              </text>
              <text class="h7" style={{ color: "#0000e6" }}>
                N
              </text>
              <text class="h8" style={{ color: "#0000ff" }}>
                E
              </text>
              <text class="h9" style={{ color: "#1a1aff" }}>
                R
              </text>
              <text class="h10" style={{ color: "#3333ff" }}>
                A
              </text>
              <text class="h11" style={{ color: "#4d4dff" }}>
                T
              </text>
              <text class="h12" style={{ color: " #6666ff" }}>
                O
              </text>
              <text class="h13" style={{ color: "#8080ff" }}>
                R
              </text>
            </h1>
          </div>
          <div className="flex" id="my-node">
            <img
              src={this.state.image}
              style={{
                minWidth: "100px",
                minHeight: "258.438px",
                maxHeight: "470px",
                width: "50%",
              }}
              alt="please wait a moment"
            ></img>

            <div
              className="fontflex"
              style={{
                wordBreak: "break-all",
                position: "absolute",
                top: "1%",
                maxWidth: "45%",
                height: "45%",
                overflow: "auto",
                color: this.state.color,
              }}
            >
              <p>
                <b style={{ borderStyle: "none" }}>{this.state.header}</b>
              </p>
            </div>
            <div
              className="fontflex"
              style={{
                position: "absolute",
                bottom: "-2%",
                maxWidth: "45%",
                wordBreak: "break-all",
                
                maxHeight: "45%",
                overflow: "auto",
                color: this.state.color,
              }}
            >
              <p>
                <b>{this.state.footer}</b>
              </p>
            </div>
          </div>
          <div>
            <button
              title="(please wait a moment after clicking the button to go to next image!!!)"
              style={{
                backgroundColor: "black",
                color: "white",
                border: "0.5px solid black",
              }}
              onClick={this.handleClick}
            >
              next image<span role="img">➡️</span>
            </button>
          </div>
          <div
            style={{ padding: "20px", position: "relative" }}
            className="flex"
          >
            <h3 style={{ color: "blue", textShadow: "1.5px 1.5px 1px" }}>
              TEXT BOX
            </h3>
            <form>
              <div className="inputcontainer">
                <div>
                  <div>
                    <label>
                      <b>Top Text:</b>
                    </label>
                  </div>
                  <input
                    type="text"
                    name="header"
                    placeholder="header text*"
                    onChange={this.handleChange}
                    value={this.state.header}
                  />
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div>
                  <div>
                    <label>
                      <b>Bottom Text:</b>
                    </label>
                  </div>
                  <input
                    type="text"
                    name="footer"
                    placeholder="footer text*"
                    onChange={this.handleChange}
                    value={this.state.footer}
                  />
                </div>
              </div>
            </form>
            <label>choose your font color</label>
            <input
              type="color"
              name="color"
              onChange={this.handleChange}
              value={this.state.color}
            />
          </div>
          <div style={{ padding: "5px" }}>
            <button
              style={{
                paddingLeft: "10px",
                paddingRight: "10px",
                color: "red",
                backgroundColor: " #33ffff",
              }}
              onClick={this.downloadimg}
            >
              <h3>DOWNLOAD MEME ⬇️</h3>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default Meme;
