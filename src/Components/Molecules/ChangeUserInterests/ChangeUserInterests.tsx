import { useState, useCallback, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { STRING } from '../../../Shared/Constants';
import { RootState } from '../../../Store';
import CustomButton from '../../Atoms/CustomButton';
import InterestItem from '../InterestItem';
import { INTERESTS } from '../../../Store/User';
import { ChangeUserInterestsProps } from './types';
import { updateUserInfo } from '../../../Utils/firebaseStore';

function ChangeUserInterests({
  closeModal,
}: Readonly<ChangeUserInterestsProps>) {
  // redux use
  const { interests: userInterests, id } = useSelector(
    (state: RootState) => state.user
  );

  // state use
  const [interests, setInterests] = useState(userInterests);

  const interestDataWithIcons = useMemo(
    () =>
      interests.map((val, index) => ({
        ...val,
        icon: INTERESTS[index].icon,
      })),
    [interests]
  );

  // functions
  const handleSelection = useCallback((title: string) => {
    setInterests((i) =>
      i.map((val) => {
        if (val.title === title) {
          return { ...val, selected: !val.selected };
        }
        return val;
      })
    );
  }, []);
  const handleSubmit = () => {
    if (id) {
      updateUserInfo(id, {
        interests: interestDataWithIcons,
      }).finally(closeModal);
    }
  };

  return (
    <div>
      <p className="text-3xl font-semibold my-2 mb-8 text-center">
        Change User Interests
      </p>
      <div className="flex flex-wrap w-full max-w-[500px] items-center justify-center mt-8">
        {interestDataWithIcons.map((val) => {
          return (
            <InterestItem
              key={val.title}
              icon={val.icon}
              title={val.title}
              isSelected={val.selected}
              setItemSelected={handleSelection}
            />
          );
        })}
      </div>
      <div className="mx-10 my-8">
        <CustomButton
          text={STRING.ADD_INTERESTS.submitButton}
          onPress={handleSubmit}
        />
      </div>
    </div>
  );
}

export default ChangeUserInterests;
