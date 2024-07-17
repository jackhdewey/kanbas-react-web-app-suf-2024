const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

export default function EnvironmentVariables() {
    return (
        <div id="wd-enviroment-variables">
            <h3>Environment Variables</h3>
            <p>Remote Server: {REMOTE_SERVER}</p>
            <hr/>
        </div>
    )
}