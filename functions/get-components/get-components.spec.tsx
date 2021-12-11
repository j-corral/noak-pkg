import { GetComponents } from './';

it('Should return an Object containing only MDX components', () => {
  const selectedComponents = GetComponents({
    names: [],
    withMDX: true,
  });
  const expected = { h1: {} };
  expect(selectedComponents).toMatchObject(expected);
});

it('Should return an Object containing existing selected Unagui components', () => {
  const selectedComponents = GetComponents({
    names: ['UnaguiHero', 'UnaguiSection'],
    withMDX: false,
  });
  const expected = { UnaguiHero: {}, UnaguiSection: {} };
  expect(selectedComponents).toMatchObject(expected);
});

it('Should return an Object containing existing selected Noak components', () => {
  const selectedComponents = GetComponents({
    names: ['NoakLocaleSwitcher'],
    withMDX: false,
  });
  const expected = { NoakLocaleSwitcher: {} };
  expect(selectedComponents).toMatchObject(expected);
});

it('Should return an Object containing existing selected Unagui + Noak components', () => {
  const selectedComponents = GetComponents({
    names: ['UnaguiHero', 'UnaguiSection', 'NoakLocaleSwitcher'],
    withMDX: false,
  });
  const expected = { UnaguiHero: {}, UnaguiSection: {}, NoakLocaleSwitcher: {} };
  expect(selectedComponents).toMatchObject(expected);
});

it('Should return an Object containing existing selected Unagui + Noak components + MDX Components', () => {
  const selectedComponents = GetComponents({
    names: ['UnaguiHero', 'UnaguiSection', 'NoakLocaleSwitcher'],
    withMDX: true,
  });
  const h1 = () => {
    return true;
  };
  const expected = {
    h1: {},
    UnaguiHero: {},
    UnaguiSection: {},
    NoakLocaleSwitcher: {},
  };
  expect(selectedComponents).toMatchObject(expected);
});
