import React from 'react';

function CommentForm ({ handleChange, handleSubmit, comment }) {
  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="text">Comment</label>
        <textarea className="textarea" id="text" name="text" placeholder="Comment"
          onChange={handleChange} value={comment.text || ''}/>
      </div>
      <button>Submit</button>
    </form>
  );
}

export default CommentForm;
