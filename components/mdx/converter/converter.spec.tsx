import React from 'react';
import { render, screen } from '@testing-library/react';
import { MDXConverter } from './';

it('should render with the correct text', () => {
  const source = {
    compiledSource:
      'var s=Object.defineProperty,d=Object.defineProperties;var g=Object.getOwnPropertyDescriptors;var i=Object.getOwnPropertySymbols;var a=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;var p=(o,e,t)=>e in o?s(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,r=(o,e)=>{for(var t in e||(e={}))a.call(e,t)&&p(o,t,e[t]);if(i)for(var t of i(e))c.call(e,t)&&p(o,t,e[t]);return o},u=(o,e)=>d(o,g(e));var m=(o,e)=>{var t={};for(var n in o)a.call(o,n)&&e.indexOf(n)<0&&(t[n]=o[n]);if(o!=null&&i)for(var n of i(o))e.indexOf(n)<0&&c.call(o,n)&&(t[n]=o[n]);return t};const makeShortcode=o=>function(t){return console.warn("Component "+o+" was not imported, exported, or provided by MDXProvider as global scope"),mdx("div",r({},t))},UnaguiHero=makeShortcode("UnaguiHero"),NoakThemeSwitcher=makeShortcode("NoakThemeSwitcher"),UnaguiSection=makeShortcode("UnaguiSection"),layoutProps={},MDXLayout="wrapper";function MDXContent(t){var n=t,{components:o}=n,e=m(n,["components"]);return mdx(MDXLayout,u(r(r({},layoutProps),e),{components:o,mdxType:"MDXLayout"}),mdx("p",null,"Some ",mdx("strong",{parentName:"p"},"mdx")," text, with a component Hero with title :"),mdx(UnaguiHero,{title,mdxType:"UnaguiHero"}),mdx(NoakThemeSwitcher,{mdxType:"NoakThemeSwitcher"}),mdx(UnaguiSection,{mdxType:"UnaguiSection"},title))}MDXContent.isMDXComponent=!0;\n',
    scope: { title: 'Test 1' },
  };
  const names = ['UnaguiHero', 'UnaguiSection', 'NoakThemeSwitcher'];

  const { getByText } = render(<MDXConverter source={source} componentNames={names} />);
  const rendered = screen.getByText(/mdx/i);
  expect(rendered).toBeTruthy();
});
