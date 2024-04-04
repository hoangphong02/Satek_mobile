import { WithWizard } from 'react-albus';
import { Button } from 'reactstrap';

const BottomNavigationOri = ({
  className,
  onClickPrev,
  prevLabel,
  onClickNext,
  nextLabel,
  disabledNext,
}) => (
  <WithWizard
    render={({
      next, previous, step, steps,
    }) => (
      <div className={`wizard-buttons ${className}`}>
        <Button
          color="primary"
          className={`mr-1 ${steps.indexOf(step) <= 0 ? 'disabled' : ''}`}
          onClick={() => {
            onClickPrev(previous, steps, step);
          }}
        >
          {prevLabel}
        </Button>

        <Button
          color="primary"
          className={steps.indexOf(step) >= steps.length - 1 || disabledNext ? 'disabled' : ''}
          onClick={() => {
            onClickNext(next, steps, step);
          }}
        >
          {nextLabel}
        </Button>
      </div>
    )}
  />
);
export default BottomNavigationOri;
