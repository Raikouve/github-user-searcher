export const formatDate = (date: string) => {
  const dateArray = date.split('');
  const filterDateArray = dateArray.filter((element) => element !== ',' && element !== '-' && element !== ':');
  const formatedDate = filterDateArray.join('').toString().slice(0, 8);

  const year = formatedDate.slice(0, 4);
  const month = formatedDate.slice(4, 6);
  const day = formatedDate.slice(6, 8);

  let monthFormated;

  if (month === '01') {
    monthFormated = 'Jan';
  }

  if (month === '02') {
    monthFormated = 'Feb';
  }

  if (month === '03') {
    monthFormated = 'Mar';
  }

  if (month === '04') {
    monthFormated = 'Apr';
  }

  if (month === '05') {
    monthFormated = 'Mai';
  }

  if (month === '06') {
    monthFormated = 'Jun';
  }

  if (month === '07') {
    monthFormated = 'Jul';
  }

  if (month === '08') {
    monthFormated = 'Aug';
  }

  if (month === '09') {
    monthFormated = 'Sep';
  }

  if (month === '10') {
    monthFormated = 'Oct';
  }

  if (month === '11') {
    monthFormated = 'Nov';
  }

  if (month === '12') {
    monthFormated = 'Dec';
  }

  const dateString = `${monthFormated} ${day} ${year}`

  return dateString;
}
