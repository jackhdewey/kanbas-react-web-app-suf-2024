export default function DocumentStructureStyle() {
    return(
        <div className="wd-selector-1">
            <h3>Document structure selectors</h3>
            <div className="wd-selector-2">
                Selectors can be combined to refer elements in particular places in the Document
                <p className="wd-selector-3">
                    This paragraph's red background is refernced as <br />
                    .selector-2 .selector3 <br />
                    <span className="wd-selector-4">
                        Whereas this span is a direct child of its parent
                    </span><br />
                    You can combine these relationships to create specific styles depending on document structure
                </p>
            </div>
        </div>
    );
}
    