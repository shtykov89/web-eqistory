import React from 'react';
import { commits } from '../data.js';
import Col from 'react-bootstrap/Col';
var Diff = require('diff/dist/diff.js');

class CodeBlock extends React.Component {

  render() {

    if (!this.props.commits || this.props.commits.length !== 2) {
      return null
    }

    const codeBlocks =
      commits
        .filter((c) => {
          return this.props.commits.sort((a,b) => {
            return a - b
          })
          .indexOf(c.id) >= 0
        })
        .map((c) => {
          return c.code
        });

    const lines = Diff.diffLines(codeBlocks[0], codeBlocks[1]);
    
    return (
      <Col sm={4}>
        <pre id="code" className="codeBlock" >
          <code>
            {
              lines.map((code, i) =>
                <span className={`${code.added ? 'green' : code.removed ? 'red' : ''}`}
                  key={i}>{code.value}</span>)
            }
          </code>
        </pre>
      </Col>
    )
  }
}

export default CodeBlock