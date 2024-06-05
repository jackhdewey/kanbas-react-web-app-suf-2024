export default function Positions() {
    return (
        <div>

            <div id="wd-css-position-relative">

                <h2>Relative</h2>

                <div className="wd-bg-color-gray">

                    <div className="wd-bg-color-yellow wd-dimension-portrait">
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

            </div> 


            <div id="wd-css-position-absolute">

                <h2>Absolute Position</h2>

                <div className="wd-pos-relative">

                    <div className="wd-pos-absolute-10-10 wd-bg-color-yellow wd-dimension-portrait">
                        Portrait
                    </div>

                    <div className="wd-pos-absolute-50-50 wd-bg-color-blue wd-fg-color-white wd-dimension-landscape">
                        Landscape
                    </div>

                    <div className="wd-pos-absolute-120-20 wd-bg-color-red wd-dimension-square">
                        Square
                    </div>
                    
                </div>
            </div>  

            <br /><br /><br /><br /><br />

            <div id="wd-css-position-fixed">

                <h2>Fixed position</h2>
                Checkout the blue square that says "Fixed position" stuck all the way on the right and half way down the page. It doesn't scroll with the rest of the page. Its position is "Fixed".

                <div className="wd-pos-fixed wd-dimension-square wd-bg-color-blue wd-fg-color-white">
                    Fixed position
                </div>

            </div>

            <br />

            <div id="wd-z-index">

                <h2>Z Index</h2>

                <div className="wd-pos-relative">

                    <div className="wd-pos-absolute-10-10 wd-bg-color-yellow wd-dimension-portrait">
                        Portrait
                    </div>

                    <div className="wd-zindex-bring-to-front wd-pos-absolute-50-50 wd-bg-color-blue wd-fg-color-white wd-dimension-landscape">
                        Landscape
                    </div>

                    <div className="wd-pos-absolute-120-20 wd-bg-color-red wd-dimension-square">
                        Square
                    </div>
                    
                </div>
            </div>  

            <br /><br /><br /><br /><br />

            <div id="wd-float-divs">
                <h2>Float</h2>
                <div>
                    
                    <div className="wd-float-left wd-dimension-portrait wd-bg-color-yellow">
                        Yellow 
                    </div>
                    <div className="wd-float-left wd-dimension-portrait wd-bg-color-blue wd-fg-color-white">
                        Blue 
                    </div>
                    <div className="wd-float-left wd-dimension-portrait wd-bg-color-red">
                        Red 
                    </div>

                    <img className="wd-float-right"
                        src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"/>

                    <div className="wd-float-done"></div>

                </div>
            </div>

            <br />

        </div>
               
    );
}