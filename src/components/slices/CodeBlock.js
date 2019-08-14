import React from "react"
import PropTypes from "prop-types"

const CodeBlock = ({ input }) => (
  <pre>
    <code>
      <div
        dangerouslySetInnerHTML={{ __html: input.primary.code_block.html }}
      />
    </code>
  </pre>
)

export default CodeBlock

CodeBlock.propTypes = {
  input: PropTypes.object.isRequired,
}
