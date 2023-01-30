import React from 'react';
import { Section } from 'components/Section/Section';
import { Notification } from 'components/Notification/Notification';
import { Statistic } from 'components/Statistic/Statistic';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onSelectOpinion = value => {
    this.setState(prev => ({
      [value]: prev[value] + 1,
    }));
  };

  countTotalFeedback = () =>
    Number(this.state.good + this.state.neutral + this.state.bad);

  countPositiveFeedbackPercentage = () =>
    Math.round((this.state.good / this.countTotalFeedback()) * 100);

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onSelectOpinion}
          />
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() > 0 ? (
            <Statistic
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
