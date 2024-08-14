import { PerformanceCardProps } from './types';

function PerformanceCard({
  isGood,
  day,
  value,
}: Readonly<PerformanceCardProps>) {
  return (
    <div>
      <div>
        <div>
          <p>{isGood ? 'Best Performance' : 'Worst Performance'}</p>
          <p>{day}</p>
        </div>
      </div>
      <p>{value}</p>
    </div>
  );
}

export default PerformanceCard;
