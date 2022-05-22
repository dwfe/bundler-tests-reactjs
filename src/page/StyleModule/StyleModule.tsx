import style from './my.module.css'

export function StyleModule() {

  return (
    <div>
      <h2>style. css modules</h2>
      <div className={style.container}>
        <p>stylized using</p>
        <p className={style.other}>css modules</p>
      </div>
      <ul>
        <li>variables</li>
        <li>composes</li>
      </ul>
    </div>
  );
}
