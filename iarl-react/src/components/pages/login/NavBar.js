import React from 'react';

const logoGuardians = {
  width: "20%",
  marginRight: "20%"

}

export default class NavBar extends React.Component {
  render () {
    return (
      <div className="ui inverted fixed menu blue">
        <div className="ui container">
          <a target="_blank" className="header item" href="https://sites.google.com/a/computacao.ufcg.edu.br/guardians-ccc/">
            <img className="logo" src={ require('../../../images/guardians-logo.png') } style={logoGuardians}/>
            Guardians-DSC
          </a>
          <a target="_blank" className="item" href="https://www.facebook.com/guardiansufcg/">
            <i className="fab fa-facebook-square" style={{fontSize:"330%"}}></i>
          </a>
          <a target="_blank" className="item" href="https://github.com/Guardians-DSC">
            <i className="fab fa-github" style={{fontSize:"330%"}}></i>
          </a>
        </div>
      </div>
    )
  }
}
