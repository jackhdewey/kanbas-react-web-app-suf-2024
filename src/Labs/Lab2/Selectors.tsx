export default function Selectors() {
    return (
        <div>

            <div id="wd-css-id-selectors">

                <h3>ID selectors</h3>

                <p id="wd-id-selector-1">
                    Instead of changing the look and feel of all the elements of the same name, e.g. p, we can refer to a specificelement by its ID
                </p>
                <p id="wd-id-selector-2">
                    Here's another paragraph using a different ID and a difference look and feel
                </p>
            </div>

            <div id="wd-css-class-selectors">

                <h3>Class Selectors</h3>

                <p className="wd-class-selector">
                    Instead of using IDs to refer to elements, you can use an element's CLASS attribute
                </p>

                <h4 className="wd-class-selector">This heading has same style as the paragraph above</h4>
            </div>

            <div className="wd-selector-1">
                <h3>Document structure selectors</h3>

                <div className="wd-selector-2">
                    Selectors can be combined to refer elements in particular places in the document

                    <p className="wd-selector-3">
                        This paragraph's red background is referenced as <br />
                        .selector-2 .selector3 <br />

                        <span className="wd-selector-4">
                            Whereas this span is a direct child of its parent
                        </span><br />

                        You can combine these relationships to create specific styles depending on document structure
    
                    </p>
                </div>
            </div>

        </div>
    );
}