import {useEffect, useRef} from 'react';
import {LocationPinSvg} from './LocationPinSvg/LocationPinSvg';
import svgLoadedByWebpack from './location-pin.svg'
import style from './Svg.module.css'

export function Svg() {
  return (
    <div>
      <h2>svg. file</h2>
      <div className={style.svgContainer}>
        <SvgAsJustReactComponent/>
        <SvgFromRawFileContent/>
        {/*<SvgFromFileURL/>*/}
        {/*<SvgFromFileURLSprite/>*/}
        {/*<SvgFromFileAsDataURL/>*/}
      </div>
    </div>
  );
}


function SvgAsJustReactComponent() {
  return (
    <div className={style.boxContainer}>
      <span>just react component</span>
      <LocationPinSvg/>
    </div>
  )
}

// @ts-ignore
function SvgFromRawFileContent() {
  const ref = useRef<any>();

  useEffect(() => {
    ref.current.innerHTML = svgLoadedByWebpack;
  });

  return (
    <div className={style.boxContainer}>
      <span>from file as raw content</span>
      <div ref={ref}/>
    </div>
  );
}

// @ts-ignore
function SvgFromFileURL() {
  return (
    <div className={style.boxContainer}>
      <span>from file URL</span>
      <img src={svgLoadedByWebpack} alt=""/>
    </div>
  );
}

// @ts-ignore
function SvgFromFileURLSprite() {
  return (
    <div className={style.boxContainer}>
      <span>from file URL, Sprite</span>
      <svg>
        <use xlinkHref={`${svgLoadedByWebpack}#mySymbolId`}/>
      </svg>
    </div>
  );
}

// @ts-ignore
function SvgFromFileAsDataURL() {
  return (
    <div className={style.boxContainer}>
      <span>from file as dataURL</span>
      <img src={svgLoadedByWebpack} alt=""/>
    </div>
  );
}
