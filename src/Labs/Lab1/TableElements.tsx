export default function TableElements() {
    return (
        <div id="wd-tables">

            <h4>Table Tag</h4>
            
            <table border={1} width="100%">

                <thead>
                    <tr>
                        <th>Quiz</th>
                        <th>Topic</th>
                        <th>Date</th>
                        <th>Grade</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Q1</td>
                        <td>HTML</td>
                        <td>2/3/21</td>
                        <td>85</td>
                    </tr>

                    <tr>
                        <td>Q2</td>
                        <td>CSS</td>
                        <td>2/10/21</td>
                        <td>90</td>
                    </tr>

                    <tr>
                        <td>Q3</td>
                        <td>JavaScript</td>
                        <td>2/17/21</td>
                        <td>95</td>
                    </tr>

                    <tr>
                        <td>Q4</td>
                        <td>React components</td>
                        <td>2/24/21</td>
                        <td>85</td>
                    </tr>

                    <tr>
                        <td>Q5</td>
                        <td>React state</td>
                        <td>3/4/21</td>
                        <td>90</td>
                    </tr>

                    <tr>
                        <td>Q6</td>
                        <td>Node</td>
                        <td>3/11/21</td>
                        <td>95</td>
                    </tr>

                    <tr>
                        <td>Q7</td>
                        <td>Servers</td>
                        <td>3/18/21</td>
                        <td>85</td>
                    </tr>

                    <tr>
                        <td>Q8</td>
                        <td>MongoDB</td>
                        <td>3/25/21</td>
                        <td>90</td>
                    </tr>

                    <tr>
                        <td>Q9</td>
                        <td>Database Relations</td>
                        <td>4/1/21</td>
                        <td>95</td>
                    </tr>

                    <tr>
                        <td>Q10</td>
                        <td>3rd Party APIs</td>
                        <td>4/8/21</td>
                        <td>90</td>
                    </tr>
                </tbody>

                <tfoot>
                    <tr>
                        <td colSpan={3}>Average</td>
                        <td>90</td>
                    </tr>
                </tfoot>

            </table>

            <hr />

        </div>
    );
}