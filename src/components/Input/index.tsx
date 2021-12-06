import StyledInput from './Input';
import P

export type InputComponentType = typeof StyledInput & {
  //Textarea : typeof Textarea
  Password : typeof InputPassword
}

Input = StyledInput

export default Input as InputComponentType