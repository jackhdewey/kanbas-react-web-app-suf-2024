export default function RelativePosition() {
    return (
        <div className="wd-bg-color-gray">
            <div className="wd-bg-color-yellow wd-dimensions-portrait">
                <div className="wd-pos-relative-nudge-down-right">
                    Portrait
                </div>
            </div>
            <div className="wd-pos-relative-nudge-up-right wd-bg-color-blue wd-fg-color-white wd-dimension-landscape">
                Landscape
            </div>
            <div className="wd-bg-color-red wd-dimension-square">
                Square
            </div>
        </div>
    );
}