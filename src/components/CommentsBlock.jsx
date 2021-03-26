import React from 'react';
import PropTypes from 'prop-types';

const CommentBlock = ({ comments }) => (
  <div>
    {comments.length > 0 && (
    <>
      <h4>Comments:</h4>
      <div>
        {comments.map(item => (
          <p className="border border-info" key={item.id}>
            {item.text}
          </p>
        ))}
      </div>
    </>
    )}
  </div>
);

export default CommentBlock;

CommentBlock.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
