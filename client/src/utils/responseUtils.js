function groupByDate(data) {
  return data.reduce((groupedData, obj) => {
    const date = obj.date;
    if (!groupedData[date]) {
      groupedData[date] = [];
    }
    groupedData[date].push(obj);
    return groupedData;
  }, {});
}

export { groupByDate };
