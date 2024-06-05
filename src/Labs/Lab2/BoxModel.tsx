export default function BoxModel() {
    return (
        <div>

            <div id="wd-css-borders">

                <h2>Borders</h2>

                <p className="wd-border-fat wd-border-red wd-border-solid">
                    Solid fat red border
                </p>

                <p className="wd-border-thin wd-border-blue wd-border-dashed">
                    Dashed thin blue border
                </p>

            </div>

            <div id="wd-css-paddings">

                <h2>Padding</h2>

                <div className="wd-padded-top-left wd-border-fat wd-border-red wd-border-solid wd-bg-color-yellow">
                    Padded top left
                </div>

                <div className="wd-padded-bottom-right wd-border-fat wd-border-blue wd-border-solid wd-bg-color-yellow">
                    Padded bottom right
                </div>
                
                <div className="wd-padding-fat wd-border-fat wd-border-yellow wd-border-solid wd-bg-color-blue wd-fg-color-white">
                    Padded all around
                </div>

            </div>

            <div id="wd-css-margins">

                <h2>Margins</h2>

                <div className="wd-margin-bottom wd-padded-top-left wd-border-fat wd-border-red wd-border-solid wd-bg-color-yellow">
                    Margin bottom
                </div>

                <div className="wd-margin-right-left wd-padded-bottom-right wd-border-fat wd-border-blue wd-border-solid wd-bg-color-yellow">
                    Margin left right
                </div>

                <div
                    className="wd-margin-all-around wd-padding-fat wd-border-fat wd-border-yellow wd-border-solid wd-bg-color-blue wd-fg-color-white">
                    Margin all around
                </div>

            </div>

            <div id="wd-css-borders">

                <h3>Rounded corners</h3>

                <p className="wd-rounded-corners-top wd-border-thin wd-border-blue wd-border-solid wd-padding-fat">
                    Rounded corners at the top
                </p>

                <p className="wd-rounded-corners-bottom wd-border-thin wd-border-blue wd-border-solid wd-padding-fat">
                    Rounded corners at the bottom
                </p>
                <p className="wd-rounded-corners-all-around wd-border-thin wd-border-blue wd-border-solid wd-padding-fat">
                    Rounded corners all around
                </p>
                <p className="wd-rounded-corners-inline wd-border-thin wd-border-blue wd-border-solid wd-padding-fat">
                    Different rounded corners
                </p>

            </div>

            <div id="wd-css-dimensions">
                <h2>Dimension</h2>
                <div>
                    <div className="wd-dimension-portrait wd-bg-color-yellow">
                        Portrait
                    </div>
                    <div className="wd-dimension-landscape wd-bg-color-blue wd-fg-color-white">
                        Landscape
                    </div>
                    <div className="wd-dimension-square wd-bg-color-red">
                        Square
                    </div>
                </div>
            </div>


        </div>
    );
}