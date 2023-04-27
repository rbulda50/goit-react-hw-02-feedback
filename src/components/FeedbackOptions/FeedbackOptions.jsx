import './FeedbackOptions.jsx';

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
                >{option}</button>
            ))}
        </div>
    )
};

export default FeedbackOptions;