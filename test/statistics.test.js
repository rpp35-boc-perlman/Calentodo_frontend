import renderer from 'react-test-renderer';
import StatisticsWrapper from '../client/src/components/Statistics/statisticsWrapper';

it('renders properly', () => {
  shallow(<StatisticsWrapper />);
});