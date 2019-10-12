import React, {Component} from 'react';


class Navbar extends Component {
    static defaultProps= {
        title:'GitHub Finder',
        icon:'fab fa-github'

    }
    render(){
        return(
            <div className="navbar bg-primary">
                <h1>
          < i className={this.props.icon} />
            {this.props.title}
                </h1>
            </div>
        )
    }
}
export default Navbar;