import expect from 'expect'

describe('unit', () => {
  it('test', () => {
    expect([42, '123'].join(',')).toEqual('42,123')
  })
})
