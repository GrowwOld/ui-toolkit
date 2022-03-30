

type NumberInputProps = {
  label:string;
  min:number;
  max:number;
  step:number;
  value:number;
  variant: 'warning' | 'error' | 'default';
  disabled:boolean;
}
