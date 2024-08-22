import { useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../Store';
import { STRING } from '../../../Shared/Constants';
import CustomButton from '../../Atoms/CustomButton';
import PreferenceItem from '../PreferenceItem';
import { ChangeUserPreferencesProps } from './types';
import { updateUserInfo } from '../../../Utils/firebaseStore';

function ChangeUserPreferences({
  closeModal,
}: Readonly<ChangeUserPreferencesProps>) {
  // redux use
  const { preferences: userPreferences, id } = useSelector(
    (state: RootState) => state.user
  );

  // state use
  const [preferences, setPreferences] = useState(userPreferences);

  // functions
  const handleSelection = useCallback((title: string) => {
    setPreferences((p) =>
      p.map((val) => {
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
        preferences,
      }).finally(closeModal);
    }
  };

  return (
    <div>
      <p className="text-3xl font-semibold my-2 mb-8 text-center">
        Change User Preferences
      </p>
      <div className="flex flex-col w-96 items-center my-10">
        {preferences.map((val) => {
          return (
            <PreferenceItem
              key={val.title}
              isSelected={val.selected}
              title={val.title}
              setIsItemSelected={handleSelection}
            />
          );
        })}
      </div>
      <div className="min-w-[60%] mb-8">
        <CustomButton
          text={STRING.ADD_PREFERENCES.submitButton}
          onPress={handleSubmit}
        />
      </div>
    </div>
  );
}

export default ChangeUserPreferences;
