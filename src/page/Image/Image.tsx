import logoPng from '@publicDir/react-logo-png.png';
import logoJpg from '@publicDir/react-logo-jpg.jpg';
import logoGif from '@publicDir/react-logo-gif.gif';

export function Image() {
  return (
    <div>
      <h2>image + webpack alias</h2>
      <img src={logoPng} alt="Logo *.png"/>
      <img src={logoJpg} alt="Logo *.jpg"/>
      <img src={logoGif} alt="Logo *.gif"/>
      <p>Also used <b><code>@publicDir</code></b> webpack alias.</p>
    </div>
  )
}
