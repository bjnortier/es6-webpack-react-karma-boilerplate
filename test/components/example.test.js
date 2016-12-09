import path from 'path'
import React from 'react'
import Value from '../../src/components/Value'
import expect from 'expect'

describe('Testing', () => {
  it('node import should work', () => {
    expect(path).toExist()
  })
  it('vendors import should work', () => {
    expect(React).toExist()
  })
  it('local import should exist', () => {
    expect(Value).toExist()
  })
})
