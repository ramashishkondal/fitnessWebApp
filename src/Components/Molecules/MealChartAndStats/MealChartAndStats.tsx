import { useMemo } from 'react';
import ReactApexChart from 'react-apexcharts';
import { useSelector } from 'react-redux';
import { RootState } from '../../../Store';
import { getCaloriesOfFood } from '../../../Utils/commonUtils';

function MealChartAndStats() {
  // redux use
  const { meal } = useSelector((state: RootState) => state);

  // memo use
  const nutrientsStats = useMemo(
    () =>
      Object.values(meal)
        .flat()
        .reduce(
          (acc, val) => {
            return {
              protein: acc.protein + val.protein,
              calories: acc.calories + getCaloriesOfFood(val),
              carbs: acc.carbs + val.carbs,
              fat: acc.fat + val.fat,
            };
          },
          {
            protein: 0,
            calories: 0,
            carbs: 0,
            fat: 0,
          }
        ),
    [meal]
  );
  const percentageOfNutrientsStats = useMemo(
    () => ({
      protein: parseFloat(
        (
          ((nutrientsStats.protein * 4) / nutrientsStats.calories) *
          100
        ).toFixed(1)
      ),
      carbs: parseFloat(
        (((nutrientsStats.carbs * 4) / nutrientsStats.calories) * 100).toFixed(
          1
        )
      ),
      fat: parseFloat(
        (((nutrientsStats.fat * 9) / nutrientsStats.calories) * 100).toFixed(1)
      ),
    }),
    [nutrientsStats]
  );
  return (
    <div className="border flex flex-col justify-evenly py-4">
      <ReactApexChart
        options={{
          chart: {
            height: 350,
            type: 'radialBar',
            width: 200,
          },
          colors: ['#44C7BC', '#7265E3', '#F7A56D'],
          plotOptions: {
            radialBar: {
              dataLabels: {
                name: {
                  fontSize: '22px',
                },
                value: {
                  fontSize: '16px',
                },
                total: {
                  show: true,
                  label: 'Total Calories',
                  formatter: () => {
                    // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                    return nutrientsStats.calories.toFixed(1);
                  },
                },
              },
            },
          },
          labels: ['Protein', 'Carb', 'Fat'],
        }}
        series={[
          percentageOfNutrientsStats.protein,
          percentageOfNutrientsStats.carbs,
          percentageOfNutrientsStats.fat,
        ]}
        type="radialBar"
        width="380"
      />
      <div className="px-2">
        <div className="flex  flex-1 justify-between border-b-2 py-4 px-4 border-customGray300 rounded-sm">
          <div className="flex flex-1 items-center">
            <div className="bg-customCyan size-4 rounded-sm " />
            <p className="font-light pl-2">Protein</p>
          </div>
          <div className="flex flex-1 justify-between ml-14">
            <p className="mr-8 font-light">{nutrientsStats.protein}g</p>
            <p className="font-medium">{percentageOfNutrientsStats.protein}%</p>
          </div>
        </div>
        <div className="flex  flex-1 justify-between border-b-2 py-4 px-4 border-customGray300 rounded-sm">
          <div className="flex items-center flex-1">
            <div className="bg-customPurple size-4 rounded-sm " />
            <p className="font-light pl-2">Carb</p>
          </div>
          <div className="flex flex-1 justify-between ml-14">
            <p className="mr-8 font-light">{nutrientsStats.carbs}g</p>
            <p className="font-medium">{percentageOfNutrientsStats.carbs}%</p>
          </div>
        </div>
        <div className="flex  flex-1 justify-between py-4 px-4  rounded-sm">
          <div className="flex items-center flex-1">
            <div className="bg-customOrange size-4 rounded-sm " />
            <p className="font-light pl-2">Fat</p>
          </div>
          <div className="flex flex-1 justify-between ml-14">
            <p className="mr-8 font-light">{nutrientsStats.fat.toFixed(1)}g</p>
            <p className="font-medium">{percentageOfNutrientsStats.fat}%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MealChartAndStats;
