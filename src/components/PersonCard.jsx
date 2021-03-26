import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CommentsBlock from './CommentsBlock';

const PersonCard = ({ name, birth_year }) => {
  const [value, setValue] = useState('');
  const [comments, setComments] = useState([]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newComment = {
      id: Math.floor(Math.random() * 1000),
      text: value,
    };

    if (value) {
      setComments([...comments, newComment]);
    }

    setValue('');
  };

  return (
    <div className="card">
      <h2>{name}</h2>
      <p>
        Was born in
        {' '}
        {birth_year}
      </p>
      <hr />
      <div className="card__input mb-3">
        <form
          onClick={handleSubmit}
          role="presentation"
        >
          <label
            htmlFor="input-comment"
          >
            Enter comment:
          </label>
          <textarea
            className="form-control"
            type="text"
            name="comment"
            id="input-comment"
            placeholder="type your comment here"
            value={value}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="btn btn-info"
          >
            Add comment
          </button>
        </form>
      </div>
      <hr />
      <CommentsBlock comments={comments} />
    </div>
  );
};

export default PersonCard;

PersonCard.propTypes = {
  name: PropTypes.string.isRequired,
  birth_year: PropTypes.string.isRequired,
};
