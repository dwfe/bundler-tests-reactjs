import style from './LocationPinSvg.module.css'

export function LocationPinSvg(props: { width?: number; height?: number; }) {
  const {width = 150, height = 150} = props
  return (
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1"
         className={style.container}
         viewBox="0 0 30 30"
         width={width} height={height}
         x="0px" y="0px">

      <path className={style.st9} d="M26,12c0,8-11,17-11,17S4,20,4,12C4,5.9,8.9,1,15,1S26,5.9,26,12z"/>
      <circle className={style.st1} cx="15" cy="12" r="7"/>
      <circle className={style.st6} cx="15" cy="12" r="3"/>

    </svg>
  );
}
