import React from 'react';


class YouTubeDebugger extends React.Component {
    constructor() {
        super();
        this.state = {
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                    resolution: '1080p'
                }
            }
        }
    }

    handleClick = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        });
    }

    changeResolution = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    ...this.state.video,
                    resolution: "720p"
            }
        }
    })
}
    
    render() {
        return(
            <div>
                <button className='bitrate' onClick={this.handleClick} />
                <button className='resolution' onClick={this.changeResolution} />
            </div>
        )
    }
}

export default YouTubeDebugger