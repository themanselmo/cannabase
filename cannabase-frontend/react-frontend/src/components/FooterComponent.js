import React from 'react'

class FooterComponent extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div className = "text-center">
                <footer className = "footer">
                    <span className="text-muted">All Rights Reserved 2020 @JavaGuides</span>
                </footer>
            </div>
        )
    }
}

export default FooterComponent