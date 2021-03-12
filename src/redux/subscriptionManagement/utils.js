export const convertDataToArray = (data) => {
  const subscriptionNames = ['yandex', 'ios', 'android', 'bonus', 'huawei'];

  return Object.keys(data)
    .filter((key) => subscriptionNames.includes(key))
    .map((key) => ({
      ...data[key],
      name: key,
      isLoading: false,
    }));
};
