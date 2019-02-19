import React, { Component } from "react";
import socketIOClient from "socket.io-client";
class App extends Component {
  constructor() {
    super();
    this.state = {
      response: false,
      endpoint: "http://59.126.167.134:88"
    };
  }
  componentDidMount() {
    const { endpoint } = this.state;
    const socket = socketIOClient(endpoint);
    socket.on("FromAPI", data => this.setState({ response: data }));
  }
  render() {
    const { response } = this.state;
    return (
      <div style={{ textAlign: "center" }}>
        {response
          ? (
              <div>
                <p>
                  伺服器分流: {response.server}
                </p>
                <p>
                  現在線上使用者數量: {response.users}
                </p>
                <p>
                  最大同時線上使用者數量: {response.maxUsers}
                </p>
                <p>
                  現在伺服器時間: {response.currentDateTime}
                </p>
              </div>
            )
          : <p>Loading...</p>}
      </div>
    );
  }
}
export default App;