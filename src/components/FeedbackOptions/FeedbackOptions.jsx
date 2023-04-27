import './FeedbackOptions.jsx';
import firstLetterToUpperCase from './FirstLetterToUpperCase.js';

const FeedbackOptions = ({ onLeaveFeedback, options }) => {
    const OptionKeys = Object.keys(options);
    return (
        <div className='FeedbackOptions__container'>
            {OptionKeys.map(option => (
                <button
                    key={option}
                    className='FeedbackOptions__btn'
                    type="button"
                    name={option}
                    onClick={onLeaveFeedback}
                >{firstLetterToUpperCase(option)}</button>
            ))}
        </div>
    )
};

export default FeedbackOptions;