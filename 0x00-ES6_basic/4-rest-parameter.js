
rt default function returnHowManyArguments(...theArgs) {
  let no = 0;
  // eslint-disable-next-line
  for (const _ of theArgs) {
    no += 1;
  }
  return no;
}
