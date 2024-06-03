export default function StylingForms() {
    return (
        <div>

            <div id="wd-css-styling-forms">
                <h2>Forms</h2>
                <div className="mb-3">
                    <label htmlFor="input1" className="form-label">
                        Email address
                    </label>
                    <input type="email">

                    </input>
                </div>
            </div>

            <div id="wd-css-styling-dropdowns">
                <h3>Dropdowns</h3>
                <select className="form-select">
                    <option selected> Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>

            <div id="wd-css-responsive-forms-1">
                <h3>Responsive Forms</h3>
                <div className="mb-3 row">
                    <label htmlFor="email1" className="col-sm-2 col-form-label">
                        Email
                    </label>
                    <div className="col-sm-10">
                        <input type="text" id="email1" className="form-control" value="email@example.com" />
                    </div>
                </div>

                <div className="mb-3 row">
                    <label htmlFor="password1" className="col-sm-2 col-form-label">
                        Password
                    </label>
                    <div className="col-sm-10">
                        <input type="password" id="password1" className="form-control" />
                    </div>
                </div>

                <div className="mb-3 row">
                    <label htmlFor="textarea2" className="col-sm-2 col-form-label">
                        Bio
                    </label>
                    <div className="col-sm-10">
                        <textarea id="textarea21" className="form-control" rows={3} />
                    </div>
                </div>
            </div>
        </div>
    );
}