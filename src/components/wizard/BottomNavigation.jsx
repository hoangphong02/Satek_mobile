/* eslint-disable import/no-extraneous-dependencies */
import { WithWizard } from 'react-albus';
import { Button } from 'reactstrap';

const BottomNavigation = ({
  className,
  nextLabel,
  onClickNext,
  prevLabel,
  onClickPrev,
  disabledNext = true,
}) => (
  <WithWizard
    render={({
      next, previous, step, steps,
    }) => (
      <div className={`wizard-buttons ${className}`}>
        {prevLabel && (
        <Button
          disabled={steps.indexOf(step) <= 0}
          outline
          color="primary"
          className={`mr-4 ${steps.indexOf(step) <= 0 ? 'disabled' : ''}`}
          style={steps.indexOf(step) <= 0 ? { cursor: 'no-drop' } : {}}
          onClick={() => {
            onClickPrev(previous, steps, step);
          }}
        >
          {prevLabel}
        </Button>
        )}

        {nextLabel && (
        <Button
          disabled={!disabledNext}
          color="primary"
          className={
              steps.indexOf(step) >= steps.length - 1 ? 'disabled' : ''
            }
          onClick={() => {
            onClickNext(next, steps, step);
          }}
          style={!disabledNext ? { cursor: 'no-drop' } : {}}
        >
          {nextLabel}
        </Button>
        )}
      </div>
    )}
  />
);
export default BottomNavigation;
