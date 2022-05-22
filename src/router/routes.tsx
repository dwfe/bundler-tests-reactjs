import {IEntry} from '@do-while-for-each/browser-router';
import {Image, IndexPage, JsonFileReading, JSXComponent, PureJsFuncRun, StyleLess, StyleModule, Svg} from '../page';

// @formatter:off
export const routes: IEntry[] = [
  {segment: '', component: <IndexPage/>},
  {segment: 'image', component: <Image/>},
  {segment: 'json-file-reading', component: <JsonFileReading/>},
  {segment: 'jsx-component', component: <JSXComponent/>},
  {segment: 'pure-js-func-run', component: <PureJsFuncRun/>},
  {segment: 'style-less', component: <StyleLess/>},
  {segment: 'style-module', component: <StyleModule/>},
  {segment: 'svg', component: <Svg/>},
];
// @formatter:on
