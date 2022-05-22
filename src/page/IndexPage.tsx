import {Link} from '@do-while-for-each/browser-router-react-tools'
import {QaSel} from '../__tests__/regress/task/qa.selector';

export const IndexPage = () => {

  return (
    <div>
      <br/>
      <Link href="/image" data-qa={QaSel.IndexPage_Image}>image + webpack alias</Link><br/><br/>
      <Link href="/json-file-reading" data-qa={QaSel.IndexPage_JsonFileReading}>json file reading</Link><br/><br/>
      <Link href="/jsx-component" data-qa={QaSel.IndexPage_JSXComponent}>jsx component</Link><br/><br/>
      <Link href="/pure-js-func-run" data-qa={QaSel.IndexPage_PureJsFuncRun}>pure js func run</Link><br/><br/>
      <Link href="/style-less" data-qa={QaSel.IndexPage_StyleLess}>style. less pre-processor</Link><br/><br/>
      <Link href="/style-module" data-qa={QaSel.IndexPage_StyleModule}>style. css modules</Link><br/><br/>
      <Link href="/svg" data-qa={QaSel.IndexPage_Svg}>svg. file</Link><br/><br/>
    </div>
  )
}
