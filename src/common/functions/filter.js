import { placeholder_messages as placeholder } from "../constants/placeholder_messages";
import { button_name_filter as btns } from "../constants/button_name";
export function getFilterMessage(filter) {
  if (filter === btns.NAME.toLowerCase()) {
    return placeholder.NAME_MESSAGE;
  } else if (filter === btns.GENDER.toLowerCase()) {
    return placeholder.GENDER_MESSAGE;
  } else if (filter === btns.HEIGHT.toLowerCase()) {
    return placeholder.HEIGHT_MESSAGE;
  } else {
    return placeholder.EYE_COLOR_MESSAGE;
  }
}

export function checkValidHeightInput(arr) {
  if (
    Number.isInteger(parseInt(arr[0])) &&
    Number.isInteger(parseInt(arr[1]))
  ) {
    return true;
  }

  return false;
}
